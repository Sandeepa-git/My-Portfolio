"use client";

import { useEffect } from 'react';

const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

// Renders an AdSense unit once NEXT_PUBLIC_ADSENSE_CLIENT (ca-pub-...) is set; renders nothing before approval.
export default function AdSlot({ slot }) {
  useEffect(() => {
    if (!CLIENT) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  if (!CLIENT) return null;
  return (
    <div className="ad-slot" aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
