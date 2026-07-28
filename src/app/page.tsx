import TaskCard from "@/components/TaskCard";
import { tasks, shippedCount } from "@/lib/tasks";

export default function Home() {
  const shipped = shippedCount();

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-16">
      <header>
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Instalily - Lily PR Demo
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          The demo backlog
        </h1>
        <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Every card below is a real change to <em>this</em> app. Ask Lily to
          pick one up and she will branch, write the code, commit, and open a
          pull request. Merge it and this page changes.
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          {shipped} of {tasks.length} tasks shipped
        </p>
      </header>

      <section className="mt-10 flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>

      <footer className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800">
        See{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
          README.md
        </code>{" "}
        for the full demo script.
      </footer>
    </main>
  );
}
