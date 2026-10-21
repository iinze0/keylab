// SPDX-FileCopyrightText: JR Lanteigne <root@dnim.dev>
// SPDX-License-Identifier: GPL-3.0-or-later
import { useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "keylab.onboarded";

export default function Onboarding() {
  const [open, setOpen] = useState(() => !localStorage.getItem(KEY));

  if (!open) return null;

  const dismiss = () => {
    localStorage.setItem(KEY, "1");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-w-md rounded-xl border bg-card p-6 shadow-xl">
        <h2 className="text-xl font-bold">Welcome to Keylab</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Configure your ROYUAN keyboard from the browser. Plug it in via USB, then use the sidebar to adjust lighting, keys, macros, and more.
        </p>
        <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
          <li>• Choose a color theme at the bottom of the sidebar</li>
          <li>• Connect your keyboard to start editing</li>
          <li>• Profiles and settings stay on the device</li>
        </ul>
        <div className="mt-6 flex justify-end">
          <Button onClick={dismiss}>Got it</Button>
        </div>
      </div>
    </div>
  );
}
