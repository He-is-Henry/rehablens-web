import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - RehabLens',
  description: 'Learn how RehabLens collects, uses, and protects your medical and exercise data.',
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-[#23302E]">
      <header className="border-b border-[#DDE5E4] pb-6 space-y-2">
        <h1 className="text-3xl font-bold text-[#1E3F3A]">Privacy Policy</h1>
        <p className="text-sm text-[#5C6B68]">Last updated: September 2026</p>
      </header>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">1. Introduction</strong>
        <p className="text-[#5C6B68]">
          RehabLens is committed to protecting your health data and personal privacy. This Privacy Policy outlines how we collect, process, and safeguard information when you use our mobile application and related web services.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">2. Data We Collect</strong>
        <ul className="list-disc pl-5 text-[#5C6B68] space-y-2">
          <li><strong>Account information:</strong> Name, email address, and clinical identifiers required for account creation and doctor linkage.</li>
          <li><strong>Health and exercise data:</strong> Session results, total completed repetitions, exercise history, duration, and calculated form accuracy scores.</li>
          <li><strong>Camera access:</strong> Used exclusively for real-time local pose detection during active exercise sessions. No video footage or camera streams are ever recorded, saved, or uploaded to servers.</li>
          <li><strong>Device information:</strong> Technical information required for session synchronization and diagnostics, such as IP address and device model.</li>
        </ul>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">3. How We Use Your Data</strong>
        <ul className="list-disc pl-5 text-[#5C6B68] space-y-2">
          <li>To deliver real-time exercise form feedback and rehabilitation tracking.</li>
          <li>To allow your assigned doctors and clinical staff to monitor your recovery progress remotely.</li>
          <li>To calculate exercise streaks, rep counts, and adherence metrics.</li>
          <li>We strictly do not sell or monetize your personal or health data to third parties.</li>
        </ul>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">4. Data Sharing</strong>
        <p className="text-[#5C6B68]">
          Your exercise session metadata is visible exclusively to your assigned hospital staff and administrators linked to your care plan. We do not share your health data with advertisers, third-party brokers, or external entities outside your direct clinical relationship.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">5. Data Retention</strong>
        <p className="text-[#5C6B68]">
          Account and session data are retained for as long as your account remains active within your healthcare provider&apos;s system. You may request full account deletion and data removal at any time by contacting support.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">6. Camera & Health Privacy</strong>
        <p className="text-[#5C6B68]">
          Camera hardware is activated strictly during an active rehabilitation routine. Machine learning pose detection runs locally on your device hardware; zero video frames leave your smartphone. Only numerical metrics (rep count, completion percentage, form score) are saved to track progress.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">7. Your Rights</strong>
        <p className="text-[#5C6B68]">
          You maintain the right to access your exercise records at any time through the app, withdraw consent for data collection, or request complete account erasure by reaching out to our support team.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">8. Contact Us</strong>
        <p className="text-[#5C6B68]">
          If you have questions regarding this policy or data processing practices, email us at{' '}
          <a href="mailto:rehablensofficial@gmail.com" className="text-[#2F6F64] underline font-medium">
            rehablensofficial@gmail.com
          </a>.
        </p>
      </section>
    </article>
  );
}
