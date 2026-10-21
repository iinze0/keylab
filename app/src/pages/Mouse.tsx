// SPDX-FileCopyrightText: JR Lanteigne <root@dnim.dev>
// SPDX-License-Identifier: GPL-3.0-or-later
export default function MousePage() {
  return (
    <div className="flex h-full flex-col">
      <iframe
        src="https://iinze0.github.io/openmouse/"
        title="OpenMouse"
        className="h-full w-full flex-1 border-0"
        allow="hid"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}
