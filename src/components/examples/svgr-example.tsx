"use client";

/**
 * SVGR Example Component
 * 
 * This demonstrates how to use SVGR to import SVGs as React components.
 * 
 * Note: For the sawtooth.svg which contains a clipPath definition,
 * you might want to keep using it as an Image or inline it.
 * But for regular icon SVGs, SVGR is perfect!
 */

// Example: If you have an icon SVG, you can import it like this:
// import MyIcon from "@/public/icons/my-icon.svg";

export function SVGRExample() {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">SVGR Examples</h2>

      <div className="space-y-2">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Import SVG files as React components:
        </p>
        <pre className="rounded-md bg-zinc-100 p-4 text-sm dark:bg-zinc-900">
          <code>{`import Icon from "@/public/icons/icon.svg";

<Icon className="w-10 h-10 text-blue-500" />`}</code>
        </pre>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Or import as URL for Next.js Image:
        </p>
        <pre className="rounded-md bg-zinc-100 p-4 text-sm dark:bg-zinc-900">
          <code>{`import iconUrl from "@/public/icons/icon.svg?url";
import Image from "next/image";

<Image src={iconUrl} alt="Icon" width={100} height={100} />`}</code>
        </pre>
      </div>
    </div>
  );
}
