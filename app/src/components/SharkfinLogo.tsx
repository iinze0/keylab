// SPDX-FileCopyrightText: JR Lanteigne <root@dnim.dev>
// SPDX-License-Identifier: GPL-3.0-or-later
export default function SharkfinLogo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Keylab"
      role="img"
    >
      <rect width="64" height="64" rx="12" fill="#0e0e11" />
      <path
        d="M12 12h16c7 0 13 6 13 13v6c0 4-2 7-5 9l6 10h-9l-6-9h-6v9H12V12zm10 9v8h6c3 0 5-2 5-5s-2-3-5-3h-6z"
        fill="#f5c518"
      />
      <path
        d="M38 12l13 20-13 20h10l8-12 8 12h10l-13-20 13-20H59l-8 12-8-12H38z"
        fill="#ffffff"
      />
    </svg>
  );
}
