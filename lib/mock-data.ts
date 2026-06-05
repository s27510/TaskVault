export const mockUser = {
  id: "1",
  username: "alex_demo",
  display_name: "Alex Johnson",
  avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
};

export const mockGroups = [
  {
    id: "1",
    name: "Summer House Chores",
    description: "Family chores for the summer break",
    created_by: "1",
    member_count: 4,
    balance: 450,
  },
];

export const mockGroupDetails = {
  id: "1",
  name: "Summer House Chores",
  description: "Family chores for the summer break",
  created_by: "1",
  members: [
    {
      id: "1",
      username: "alex_demo",
      display_name: "Alex Johnson",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      balance: 450,
      role: "admin",
      tasks_completed: 12,
    },
    {
      id: "2",
      username: "sarah_smith",
      display_name: "Sarah Smith",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      balance: 380,
      role: "member",
      tasks_completed: 9,
    },
    {
      id: "3",
      username: "mike_wilson",
      display_name: "Mike Wilson",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
      balance: 290,
      role: "member",
      tasks_completed: 7,
    },
    {
      id: "4",
      username: "emma_jones",
      display_name: "Emma Jones",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      balance: 210,
      role: "member",
      tasks_completed: 4,
    },
  ],
};

export const mockTasks = [
  {
    id: "1",
    title: "Mow the lawn",
    description: "Cut the grass in the backyard and front yard",
    points_reward: 50,
    assigned_to: {
      id: "2",
      display_name: "Sarah Smith",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    status: "completed",
    due_date: "2026-06-10",
    created_at: "2026-06-01",
    completed_at: "2026-06-08",
  },
  {
    id: "2",
    title: "Clean the kitchen",
    description: "Wash dishes, wipe counters, and sweep the floor",
    points_reward: 40,
    assigned_to: {
      id: "3",
      display_name: "Mike Wilson",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    },
    status: "in_progress",
    due_date: "2026-06-06",
    created_at: "2026-06-02",
    completed_at: null,
  },
  {
    id: "3",
    title: "Organize the pantry",
    description: "Sort food items and arrange shelves",
    points_reward: 35,
    assigned_to: {
      id: "4",
      display_name: "Emma Jones",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    },
    status: "open",
    due_date: "2026-06-12",
    created_at: "2026-06-03",
    completed_at: null,
  },
  {
    id: "4",
    title: "Water the plants",
    description: "Water all indoor and outdoor plants",
    points_reward: 20,
    assigned_to: {
      id: "1",
      display_name: "Alex Johnson",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    },
    status: "completed",
    due_date: "2026-06-05",
    created_at: "2026-06-03",
    completed_at: "2026-06-05",
  },
  {
    id: "5",
    title: "Paint the garage",
    description: "Prime and paint the garage walls",
    points_reward: 150,
    assigned_to: null,
    status: "open",
    due_date: "2026-06-20",
    created_at: "2026-06-01",
    completed_at: null,
  },
];

export const mockMarketplaceItems = [
  {
    id: "1",
    title: "Movie Night Pass",
    description: "Get to choose the movie and snacks for family movie night",
    cost_points: 100,
    quantity_available: 5,
    image_url: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=200&fit=crop",
    status: "available",
    created_by: "1",
  },
  {
    id: "2",
    title: "Dessert of Choice",
    description: "Request any homemade dessert you want",
    cost_points: 80,
    quantity_available: 10,
    image_url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop",
    status: "available",
    created_by: "1",
  },
];

export const mockLeaderboard = [
  {
    rank: 1,
    user: {
      id: "1",
      display_name: "Alex Johnson",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    },
    total_points: 450,
    tasks_completed: 12,
  },
  {
    rank: 2,
    user: {
      id: "2",
      display_name: "Sarah Smith",
      avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    total_points: 380,
    tasks_completed: 9,
  },
];

export const mockAchievements = [
  {
    id: "1",
    name: "Task Master",
    description: "Complete 10 tasks",
    icon: "🏆",
    unlocked: true,
  },
  {
    id: "2",
    name: "Quick Learner",
    description: "Earn 500 points",
    icon: "⚡",
    unlocked: true,
  },
  {
    id: "3",
    name: "Top Performer",
    description: "Rank #1 on leaderboard",
    icon: "🌟",
    unlocked: true,
  },
  {
    id: "4",
    name: "Rising Star",
    description: "Earn 1000 points",
    icon: "✨",
    unlocked: false,
  },
];
