// dexent/components/ui/SafeImage.tsx
"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

// A drop-in replacement for next/image that gracefully hides itself if the
// image fails to load (e.g. the file is missing). Prevents broken-image icons
// on blog posts whose featured image hasn't been added yet.
export default function SafeImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return <Image {...props} onError={() => setFailed(true)} />;
}