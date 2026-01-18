# SVGR Usage Guide

SVGR is now configured in your Next.js project! You can import SVG files as React components.

## How to Use

### Option 1: Import as React Component (Default)

Import SVG files directly as React components:

```tsx
import SawtoothIcon from "@/public/masking/sawtooth.svg";

export function MyComponent() {
  return (
    <div>
      <SawtoothIcon className="w-10 h-10" />
    </div>
  );
}
```

**Benefits:**
- Full control over SVG props (className, style, onClick, etc.)
- Can style with Tailwind CSS classes
- Better for interactive SVGs
- Smaller bundle size (SVG is inlined)

### Option 2: Import as URL (for Next.js Image)

If you need to use the SVG with Next.js `Image` component, use the `?url` suffix:

```tsx
import sawtoothUrl from "@/public/masking/sawtooth.svg?url";
import Image from "next/image";

export function MyComponent() {
  return (
    <Image src={sawtoothUrl} alt="Sawtooth" width={100} height={100} />
  );
}
```

## Examples

### Basic Usage

```tsx
import Logo from "@/public/logo.svg";

export function Header() {
  return (
    <header>
      <Logo className="h-8 w-8" />
    </header>
  );
}
```

### With Custom Props

```tsx
import Icon from "@/public/icon.svg";

export function Button() {
  return (
    <button>
      <Icon 
        className="w-5 h-5 text-blue-500" 
        fill="currentColor"
        onClick={() => console.log("clicked")}
      />
    </button>
  );
}
```

### With Animation (GSAP)

```tsx
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MaskIcon from "@/public/masking/sawtooth.svg";

export function AnimatedMask() {
  useGSAP(() => {
    gsap.to(".mask-icon", {
      scale: 1.2,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  });

  return <MaskIcon className="mask-icon w-full h-full" />;
}
```

## Configuration

The SVGR configuration is in `next.config.ts`. You can customize SVGR options if needed:

```typescript
use: [
  {
    loader: "@svgr/webpack",
    options: {
      svgo: true, // Optimize SVG
      svgoConfig: {
        plugins: [
          {
            name: "removeViewBox",
            active: false, // Keep viewBox
          },
        ],
      },
    },
  },
]
```

## Tips

1. **Use React components for icons and interactive SVGs** - Better performance and flexibility
2. **Use `?url` for large SVGs or when you need Next.js Image optimization**
3. **SVGs imported as components accept all standard SVG props**
4. **You can style SVGs with Tailwind classes like `className="w-10 h-10 text-blue-500"`**
