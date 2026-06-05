"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pointsReward, setPointsReward] = useState("10");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [members, setMembers] = useState<any[]>([]);
  const [group, setGroup] = useState<any>(null);
  const router = useRouter();
  const params = useParams();
  const groupId = params.id as string;
  const supabase = createClient();

  useEffect(() => {
    const loadGroupAndMembers = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.push("/auth/login");
          return;
        }

        const { data: groupData } = await supabase.from("groups").select("*").eq("id", groupId).single();

        setGroup(groupData);

        const { data: membersData } = await supabase.from("group_members").select("*").eq("group_id", groupId);

        setMembers(membersData || []);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadGroupAndMembers();
  }, [groupId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("You must be logged in");
        return;
      }

      const { error: taskError } = await supabase.from("tasks").insert([
        {
          group_id: groupId,
          created_by: user.id,
          title,
          description,
          points_reward: parseInt(pointsReward),
          assigned_to: assignedTo || null,
          due_date: dueDate || null,
          status: "open",
        },
      ]);

      if (taskError) throw taskError;

      router.push(`/groups/${groupId}`);
    } catch (err: any) {
      setError(err.message || "Failed to create task");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href={`/groups/${groupId}`}>
            <Button variant="ghost">← Back to Group</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Create a New Task</h1>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Task Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g., Clean the kitchen"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what needs to be done..."
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Points Reward *</label>
                <input
                  type="number"
                  value={pointsReward}
                  onChange={(e) => setPointsReward(e.target.value)}
                  required
                  min="1"
                  placeholder="10"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Assign To (optional)</label>
              <select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Unassigned</option>
                {members.map((member) => (
                  <option key={member.user_id} value={member.user_id}>
                    Member
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={loading || !title} className="bg-primary hover:bg-blue-600 text-white">
                {loading ? "Creating..." : "Create Task"}
              </Button>
              <Link href={`/groups/${groupId}`}>
                <Button variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
