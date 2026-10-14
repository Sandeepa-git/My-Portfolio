"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" onClick={copy} className="copy-email" aria-label={copied ? 'Email address copied' : `Copy ${email}`}>
      <span>{email}</span>
      {copied ? <Check size={15} /> : <Copy size={15} />}
      <span className="sr-only" aria-live="polite">{copied ? 'Copied' : ''}</span>
    </button>
  );
}
