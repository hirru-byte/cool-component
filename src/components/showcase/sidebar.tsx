"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const components = [
  { name: "Button", href: "/components/button" },
  { name: "Card", href: "/components/card" },
  { name: "Badge", href: "/components/badge" },
  { name: "Masking", href: "/components/masking" },
  { name: "Sample Template", href: "/components/sample" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b border-zinc-200 px-6 dark:border-zinc-800">
          <Link href="/" className="text-lg font-semibold">
            Component Showcase
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <div className="px-3 py-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Components
            </p>
            <div className="space-y-1">
              {components.map((component) => (
                <Link
                  key={component.href}
                  href={component.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    pathname === component.href
                      ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                  )}
                >
                  {component.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
