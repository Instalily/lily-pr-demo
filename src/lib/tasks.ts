export type TaskStatus = "open" | "shipped";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  /** Rough size of the change, useful for picking a task live on a call. */
  size: "S" | "M";
  /** Files Lily will most likely touch. Shown so the audience knows what to watch. */
  files: string[];
};

/**
 * The demo backlog.
 *
 * Every task here is a REAL, self-contained change to this very app. During a
 * demo you ask Lily to pick one up; Lily branches, edits these files, commits,
 * and opens a pull request. Merge it and the board you are looking at changes.
 *
 * When a task ships, flip `status` to "shipped" in the same PR that implements
 * it, so the board stays honest.
 */
export const tasks: Task[] = [
  {
    id: 1,
    title: "Add a dark-mode toggle",
    description:
      "The app already responds to the OS colour scheme via Tailwind's dark: classes, but there is no way to switch manually. Add a header toggle that flips between light and dark and remembers the choice.",
    status: "open",
    size: "M",
    files: ["src/app/layout.tsx", "src/components/ThemeToggle.tsx"],
  },
  {
    id: 2,
    title: "Add an /about page",
    description:
      "Add a second route at /about explaining what this demo repo is for, plus a nav link back to the board. Good first task: it shows a brand-new file and route appearing in the diff.",
    status: "open",
    size: "S",
    files: ["src/app/about/page.tsx"],
  },
  {
    id: 3,
    title: "Filter the board by status",
    description:
      "Add Open / Shipped / All filter buttons above the task list so the board can be narrowed down. Requires a small client component and some state.",
    status: "open",
    size: "M",
    files: ["src/app/page.tsx", "src/components/TaskBoard.tsx"],
  },
  {
    id: 4,
    title: "Show a shipped-progress bar",
    description:
      "Display 'X of Y tasks shipped' with a progress bar at the top of the board, derived from the tasks array. Visibly moves every time another task is merged.",
    status: "open",
    size: "S",
    files: ["src/app/page.tsx", "src/components/Progress.tsx"],
  },
];

export const shippedCount = (list: Task[] = tasks) =>
  list.filter((t) => t.status === "shipped").length;
