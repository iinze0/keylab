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
  { id: "carbon", label: "Carbon", dark: true, swatch: ["#1a1a1e", "#f5c518"] },
  { id: "ocean", label: "Ocean", dark: true, swatch: ["#0f1f2e", "#3ecf8e"] },
  { id: "ember", label: "Ember", dark: true, swatch: ["#2a1810", "#ff6b35"] },
  { id: "arctic", label: "Arctic", dark: false, swatch: ["#eef4f8", "#4a9eff"] },
  { id: "violet", label: "Violet", dark: true, swatch: ["#1e1630", "#a78bfa"] },
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
