// SPDX-FileCopyrightText: JR Lanteigne <root@dnim.dev>
// SPDX-License-Identifier: GPL-3.0-or-later
const KEY = "keylab.profileNames";

export function getProfileName(index: number): string {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || "{}");
    return all[index] || `Profile ${index + 1}`;
  } catch {
    return `Profile ${index + 1}`;
  }
}

export function setProfileName(index: number, name: string) {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || "{}");
    all[index] = name;
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    // ignore
  }
}
