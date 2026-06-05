"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { mockUser, mockGroups } from "@/lib/mock-data";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-foreground">
            TaskVault
          </Link>
          <div className="flex gap-4 items-center">
            <span className="text-sm text-muted-foreground">Welcome, {mockUser.display_name}</span>
            <Link href="/">
              <Button variant="outline" size="sm">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockGroups.map((group: any) => (
              <Link key={group.id} href={`/groups/${group.id}`}>
                <div className="border border-border rounded-lg p-5 bg-card hover:border-foreground/20 transition cursor-pointer">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{group.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{group.member_count} members</span>
                    <span className="text-sm font-semibold text-foreground">{group.balance} points</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="border border-border rounded-lg p-6 bg-card">
          <h2 className="text-lg font-semibold text-foreground mb-2">Demo Mode</h2>
          <p className="text-sm text-muted-foreground">
            This is a demonstration of TaskVault with sample data. Click on any group to see the full features including
            tasks, marketplace, leaderboards, and achievements.
          </p>
        </div>
      </main>
    </div>
  );
}
