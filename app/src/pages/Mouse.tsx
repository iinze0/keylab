// SPDX-FileCopyrightText: JR Lanteigne <root@dnim.dev>
// SPDX-License-Identifier: GPL-3.0-or-later
export default function MousePage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
        <div className="min-w-0">
          <h1 className="text-sm font-semibold">Mouse settings</h1>
          <p className="text-xs text-muted-foreground">
            If your browser cannot access the mouse in this embedded view, open OpenMouse directly.
          </p>
        </div>
        <a
          href="https://iinze0.github.io/openmouse/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Open OpenMouse in a new tab ↗
        </a>
      </div>
      <iframe
        src="https://iinze0.github.io/openmouse/"
        title="OpenMouse mouse settings"
        className="min-h-0 w-full flex-1 border-0"
        allow="hid"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}
