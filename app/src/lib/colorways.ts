// SPDX-FileCopyrightText: JR Lanteigne <root@dnim.dev>
// SPDX-License-Identifier: GPL-3.0-or-later
export interface Colorway {
  id: string;
  label: string;
  dark: boolean;
  /** [base, accent] swatch colors for the picker. */
  swatch: [string, string];
}

export const COLORWAYS: Colorway[] = [
  { id: "noir", label: "Noir", dark: true, swatch: ["#0c0c10", "#4f8cff"] },
  { id: "gold", label: "Gold", dark: true, swatch: ["#1c1814", "#e8b84a"] },
  { id: "jade", label: "Jade", dark: true, swatch: ["#0f1c18", "#2dd4bf"] },
  { id: "rose", label: "Rose", dark: true, swatch: ["#1a1216", "#f472b6"] },
  { id: "frost", label: "Frost", dark: false, swatch: ["#f4f7fa", "#60a5fa"] },
  { id: "amber", label: "Amber", dark: true, swatch: ["#1f1610", "#f59e0b"] },
  { id: "neon", label: "Neon", dark: true, swatch: ["#0a0a12", "#22d3ee"] },
  { id: "sage", label: "Sage", dark: false, swatch: ["#f0f4f0", "#4ade80"] },
  { id: "midnight", label: "Midnight", dark: true, swatch: ["#0a0e1a", "#818cf8"] },
  { id: "coral", label: "Coral", dark: true, swatch: ["#1a1014", "#fb7185"] },
  { id: "ice", label: "Ice", dark: false, swatch: ["#f8fafc", "#38bdf8"] },
  { id: "forest", label: "Forest", dark: true, swatch: ["#0c1610", "#34d399"] },
];

const KEY = "sharkfin.colorway";

export function applyColorway(id: string) {
  const cw = COLORWAYS.find((c) => c.id === id) ?? COLORWAYS[0];
  const root = document.documentElement;
  root.dataset.colorway = cw.id;
  root.classList.toggle("dark", cw.dark);
  localStorage.setItem(KEY, cw.id);
}

export function initColorway(): string {
  const saved = localStorage.getItem(KEY) ?? COLORWAYS[0].id;
  applyColorway(saved);
  return COLORWAYS.some((c) => c.id === saved) ? saved : COLORWAYS[0].id;
}
