'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';

const APK_URL = 'https://github.com/He-is-Henry/rehablens-mobile/releases/latest/download/rehablens.apk';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAFAF8]/90 border-b border-[#DDE5E4]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-[#1E3F3A]">RehabLens</span>
        </Link>
        <a
          href={APK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F6F64] hover:bg-[#1E3F3A] text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
        >
          <Download className="w-4 h-4" />
          <span>Download</span>
        </a>
      </nav>
    </header>
  );
}
