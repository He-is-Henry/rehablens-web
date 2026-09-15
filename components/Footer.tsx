import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#DDE5E4] bg-[#FAFAF8] py-12 text-sm text-[#5C6B68]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="font-bold text-[#1E3F3A] text-base">RehabLens</span>
          <p className="text-xs">Camera-powered rehabilitation platform</p>
        </div>

        <div className="flex items-center gap-6 font-medium">
          <Link href="/privacy" className="hover:text-[#1E3F3A] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#1E3F3A] transition-colors">
            Terms of Service
          </Link>
          <a href="mailto:rehablensofficial@gmail.com" className="hover:text-[#1E3F3A] transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
