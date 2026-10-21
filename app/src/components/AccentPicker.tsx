// SPDX-FileCopyrightText: JR Lanteigne <root@dnim.dev>
// SPDX-License-Identifier: GPL-3.0-or-later
import { useState } from "react";

const KEY = "keylab.accent";

function applyAccent(hex: string) {
  document.documentElement.style.setProperty("--primary", hex);
  document.documentElement.style.setProperty("--ring", hex);
  document.documentElement.style.setProperty("--key-accent", hex);
  localStorage.setItem(KEY, hex);
}

export function initAccent() {
  const saved = localStorage.getItem(KEY);
  if (saved) applyAccent(saved);
}

export default function AccentPicker() {
  const [color, setColor] = useState(() => localStorage.getItem(KEY) || "#f5c518");

  return (
    <div className="flex items-center justify-between gap-2 px-1 py-1">
      <span className="text-[11px] text-muted-foreground">Custom accent</span>
      <input
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          applyAccent(e.target.value);
        }}
        className="h-6 w-8 cursor-pointer rounded border border-border bg-transparent"
        title="Custom accent color"
      />
    </div>
  );
}
