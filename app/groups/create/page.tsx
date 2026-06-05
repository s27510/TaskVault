"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function CreateGroup() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("You must be logged in to create a group");
        return;
      }

      const { data: groupData, error: groupError } = await supabase
        .from("groups")
        .insert([
          {
            name,
            description,
            created_by: user.id,
          },
        ])
        .select();

      if (groupError) throw groupError;

      if (groupData && groupData[0]) {
        const { error: memberError } = await supabase.from("group_members").insert([
          {
            group_id: groupData[0].id,
            user_id: user.id,
            role: "admin",
          },
        ]);

        if (memberError) throw memberError;

        router.push(`/groups/${groupData[0].id}`);
      }
    } catch (err: any) {
      setError(err.message || "Failed to create group");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/dashboard">
            <Button variant="ghost">← Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Create a New Group</h1>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Group Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g., Family Chores"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Description (optional)</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., A group to track household chores and earn rewards"
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={loading || !name} className="bg-primary hover:bg-blue-600 text-white">
                {loading ? "Creating..." : "Create Group"}
              </Button>
              <Link href="/dashboard">
                <Button variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
