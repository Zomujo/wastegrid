"use client";

import { useEffect, useState } from "react";

export default function MaterialIcon({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Check if font is already loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontLoaded(true);
      });

      // Also check specifically for Material Symbols
      document.fonts.load('24px "Material Symbols Outlined"').then(() => {
        setFontLoaded(true);
      });
    } else {
      // Fallback for browsers that don't support document.fonts
      setFontLoaded(true);
    }
  }, []);

  if (!fontLoaded) {
    // Return empty space with same dimensions while font loads
    return <span className={`inline-block w-6 h-6 ${className}`} />;
  }

  return <span className={`material-symbols-outlined ${className}`}>{icon}</span>;
}

