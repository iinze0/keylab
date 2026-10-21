// SPDX-FileCopyrightText: JR Lanteigne <root@dnim.dev>
// SPDX-License-Identifier: GPL-3.0-or-later
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">Keylab</h1>
      <p className="text-muted-foreground">
        Configure Attack Shark, Akko, Epomaker and other ROYUAN keyboards from the browser.
        Remap keys, set RGB lighting, record macros, and adjust actuation — nothing to install.
      </p>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Features</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Per-key remapping and layers</li>
          <li>RGB lighting effects and paint mode</li>
          <li>Macro recording (onboard slots)</li>
          <li>Adjustable actuation and Rapid Trigger</li>
          <li>Multiple color themes</li>
          <li>Works over WebHID in Chrome / Edge</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Links</h2>
        <div className="flex flex-col gap-1 text-sm">
          <a href="https://github.com/iinze0/sharkfin" target="_blank" rel="noreferrer" className="text-primary hover:underline">
            GitHub repository
          </a>
          <a href="https://getsharkfin.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">
            Original sharkfin
          </a>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">
        Keylab is a rebranded fork of sharkfin. All configuration stays on your machine.
      </div>
    </div>
  );
}
