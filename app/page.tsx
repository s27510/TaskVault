"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold tracking-tight text-foreground mb-4">TaskVault</h1>
          <p className="text-xl text-muted-foreground mb-4">Gamify your tasks. Reward your achievements.</p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
            Create a group with family or friends, assign tasks, earn coins, and unlock amazing rewards in a fun,
            competitive ecosystem.
          </p>

          <div className="flex gap-3 justify-center">
            <Link href="/dashboard">
              <Button size="lg">Try Demo</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="size-10 rounded-md bg-secondary flex items-center justify-center mb-4">
              <svg className="size-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Create Tasks</h3>
            <p className="text-sm text-muted-foreground">
              Assign tasks to group members and set reward points for each completion.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="size-10 rounded-md bg-secondary flex items-center justify-center mb-4">
              <svg className="size-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Earn Coins</h3>
            <p className="text-sm text-muted-foreground">
              Complete tasks and accumulate coins to spend in the marketplace.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="size-10 rounded-md bg-secondary flex items-center justify-center mb-4">
              <svg className="size-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Unlock Rewards</h3>
            <p className="text-sm text-muted-foreground">
              Use your coins to redeem rewards and unlock special achievements.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
