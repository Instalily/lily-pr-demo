# Lily PR Demo

A deliberately small Next.js app used to demo **Lily opening real pull requests**.

The app is a *backlog board*. Every card on the homepage is a genuine,
self-contained change to this same repo. On a call you pick a card, ask Lily to
do it, and the audience watches the full loop:

```
task -> branch -> code change -> commit -> pull request -> merge -> the app changes
```

Because the thing being demoed and the thing being changed are the same app,
every PR has an immediate, visible payoff on screen.

---

## Setup (once, before the demo)

Requirements: Node 20+ and npm.

```bash
git clone https://github.com/Instalily/lily-pr-demo.git
cd lily-pr-demo
npm install
npm run dev          # http://localhost:3000
```

You should see the backlog board with four open tasks.

Useful checks:

```bash
npm run build        # production build
npm run lint         # eslint
```

---

## Running the demo

### 1. Set the scene (~30s)

Show `http://localhost:3000` side by side with the GitHub repo. Explain that
each card is a real change and that nothing is pre-written - Lily writes the
code live.

Have these open in tabs:

- the running app (`localhost:3000`)
- https://github.com/Instalily/lily-pr-demo/issues
- https://github.com/Instalily/lily-pr-demo/pulls

### 2. Hand Lily a task

Pick a card and ask in plain language. Good openers:

> Lily, take task #2 from the backlog and open a PR for it.

> Lily, add the dark-mode toggle described in task #1 and open a pull request.

> Lily, have a look at issue #3 in this repo and implement it.

Start with **task #2 (`/about` page, size S)** - it is the fastest, and the diff
is easy to read because it adds a brand-new route.

### 3. Narrate what Lily does

While Lily works, point out that she:

1. **explores the repo first** - reads `src/lib/tasks.ts` and the existing
   components rather than guessing at conventions,
2. **matches the existing style** - same Tailwind patterns, same TypeScript
   types, same file layout,
3. **verifies before claiming done** - runs `npm run build` and `npm run lint`,
4. **opens a PR** on a fresh branch with a real title and description.

### 4. Review and merge

Open the PR, walk the diff, then merge it:

```bash
gh pr merge <number> --squash --delete-branch
git pull
```

Refresh `localhost:3000` - the change is live. The board's
"X of Y tasks shipped" counter moves, because the PR also flips that task's
`status` to `"shipped"` in `src/lib/tasks.ts`.

### 5. Repeat or go off-script

The strongest moment is usually an **unscripted** request, since it proves
nothing was staged. Try:

> Lily, the task cards feel cramped on mobile - fix the spacing and open a PR.

> Lily, add a task to the backlog for adding tests, then open a PR.

---

## The backlog

| # | Task | Size | Why it demos well |
|---|------|------|-------------------|
| 1 | Add a dark-mode toggle | M | Interactive; needs a client component and persistence |
| 2 | Add an `/about` page | S | Fastest; new file + new route, very readable diff |
| 3 | Filter the board by status | M | Real state management, not just markup |
| 4 | Show a shipped-progress bar | S | Derived data; visibly moves as tasks merge |

Tasks live in [`src/lib/tasks.ts`](src/lib/tasks.ts) and are also filed as
GitHub issues, so you can demo the issue -> PR flow.

---

## Resetting between demos

The repo is only useful with open tasks, so roll it back afterwards. Tag the
pristine state once so resets are trivial:

```bash
git tag demo-baseline <initial-sha>    # do this before the first demo
git push origin demo-baseline
# later (main is protected, so restore via a PR or temporarily lift the rule):
git checkout -b restore-baseline demo-baseline && git push -u origin restore-baseline
```

Also reopen any issues that were auto-closed, and delete leftover branches:

```bash
gh issue reopen <number>
git push origin --delete <branch>
```

---

## Project layout

```
src/
  app/
    layout.tsx      # root layout
    page.tsx        # the backlog board
    globals.css     # Tailwind
  components/
    TaskCard.tsx    # single task card
  lib/
    tasks.ts        # the backlog - source of truth for the board
```

Built with Next.js (App Router), TypeScript and Tailwind CSS.

> **Note on fonts:** this app intentionally uses system fonts instead of
> `next/font/google`, so `npm run build` works in sandboxes and CI with no
> outbound network access.
