import type { Task } from "@/lib/tasks";

const statusStyles: Record<Task["status"], string> = {
  open: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
  shipped:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
};

export default function TaskCard({ task }: { task: Task }) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
          <span className="mr-2 font-mono text-sm text-zinc-400">
            #{task.id}
          </span>
          {task.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[task.status]}`}
        >
          {task.status}
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {task.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded border border-zinc-200 px-1.5 py-0.5 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          size {task.size}
        </span>
        {task.files.map((file) => (
          <code
            key={file}
            className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {file}
          </code>
        ))}
      </div>
    </article>
  );
}
