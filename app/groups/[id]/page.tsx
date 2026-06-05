"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { mockGroupDetails, mockTasks, mockMarketplaceItems, mockLeaderboard } from "@/lib/mock-data";

type TabType = "tasks" | "marketplace" | "leaderboard";

export default function GroupDetail() {
  const [activeTab, setActiveTab] = useState<TabType>("tasks");
  const params = useParams();
  const groupId = params.id as string;
  const isFirstGroup = groupId === "1";

  const group = isFirstGroup ? mockGroupDetails : null;
  const tasks = isFirstGroup ? mockTasks : [];
  const marketplaceItems = isFirstGroup ? mockMarketplaceItems : [];
  const leaderboard = isFirstGroup ? mockLeaderboard : [];

  if (!group) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground mb-4">Group not found. This demo only includes Group 1.</p>
          <Link href="/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  const userBalance = group.members[0].balance;

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-start">
            <div>
              <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block">
                &larr; Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-foreground">{group.name}</h1>
              <p className="text-sm text-muted-foreground">{group.description}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">Your Balance</p>
              <p className="text-2xl font-bold text-foreground">{userBalance} points</p>
            </div>
          </div>
        </div>
      </header>

      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex gap-1">
            <button
              type="button"
              onClick={() => handleTabClick("tasks")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "tasks"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              Tasks
            </button>
            <button
              type="button"
              onClick={() => handleTabClick("marketplace")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "marketplace"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              Marketplace
            </button>
            <button
              type="button"
              onClick={() => handleTabClick("leaderboard")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "leaderboard"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              Leaderboard
            </button>
          </nav>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {activeTab === "tasks" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-foreground">Tasks</h2>
              <Button variant="outline" size="sm" disabled>
                + Create Task (Demo)
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              {tasks.map((task) => (
                <div key={task.id} className="border border-border rounded-lg p-5 bg-card">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{task.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                      <div className="mt-3 flex gap-2 flex-wrap">
                        <span className="text-xs font-medium px-2 py-1 rounded bg-secondary text-foreground">
                          {task.points_reward} points
                        </span>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded ${
                            task.status === "completed"
                              ? "bg-foreground text-background"
                              : task.status === "in_progress"
                                ? "bg-secondary text-muted-foreground"
                                : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {task.status === "completed"
                            ? "Completed"
                            : task.status === "in_progress"
                              ? "In Progress"
                              : "Open"}
                        </span>
                      </div>
                      {task.assigned_to && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          Assigned to: <span className="text-foreground">{task.assigned_to.display_name}</span>
                        </p>
                      )}
                    </div>
                    {task.status !== "completed" && (
                      <Button size="sm" disabled>
                        Complete
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "marketplace" && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">Marketplace</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketplaceItems.map((item) => (
                <div key={item.id} className="border border-border rounded-lg overflow-hidden bg-card">
                  <div className="bg-secondary h-32 flex items-center justify-center">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 mb-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-sm font-semibold ${item.status === "sold_out" ? "text-muted-foreground" : "text-foreground"}`}
                      >
                        {item.cost_points} points
                      </span>
                      <Button
                        size="sm"
                        disabled={item.status === "sold_out"}
                        variant={item.status === "sold_out" ? "ghost" : "default"}
                      >
                        {item.status === "sold_out" ? "Sold Out" : "Buy"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "leaderboard" && (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">Leaderboard</h2>
            <div className="flex flex-col gap-3">
              {leaderboard.map((entry) => (
                <div
                  key={entry.user.id}
                  className={`border rounded-lg p-4 flex items-center gap-4 ${
                    entry.rank === 1 ? "border-foreground bg-secondary" : "border-border bg-card"
                  }`}
                >
                  <div className="text-2xl font-bold w-10 text-center text-foreground">{entry.rank}</div>
                  <img
                    src={entry.user.avatar_url}
                    alt={entry.user.display_name}
                    className="size-10 rounded-full bg-secondary"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">{entry.user.display_name}</h3>
                    <p className="text-xs text-muted-foreground">{entry.tasks_completed} tasks completed</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">{entry.total_points}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
