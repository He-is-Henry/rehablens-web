import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - RehabLens',
  description: 'Terms and conditions governing the use of the RehabLens rehabilitation tracking platform.',
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-[#23302E]">
      <header className="border-b border-[#DDE5E4] pb-6 space-y-2">
        <h1 className="text-3xl font-bold text-[#1E3F3A]">Terms of Service</h1>
        <p className="text-sm text-[#5C6B68]">Last updated: September 2026</p>
      </header>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">1. Acceptance of Terms</strong>
        <p className="text-[#5C6B68]">
          By accessing or using the RehabLens mobile app or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use the platform.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed border-l-4 border-[#B89B6E] pl-4 py-1 bg-white rounded-r-lg">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">2. Medical Disclaimer</strong>
        <p className="text-[#5C6B68]">
          RehabLens is a technological tool designed to support physical therapy adherence and is not a medical device. It does not provide medical diagnosis, direct treatment, or substitute for professional clinical advice. Always follow specific instructions provided by your qualified healthcare professional before undertaking rehabilitation routines.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">3. Eligibility</strong>
        <p className="text-[#5C6B68]">
          You must be at least 18 years of age, or using the platform under the direct supervision of a healthcare provider, parent, or legal guardian, to create an account on RehabLens.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">4. Account Responsibilities</strong>
        <p className="text-[#5C6B68]">
          You are responsible for safeguarding your login credentials and maintaining control over device access. You agree to notify your provider or RehabLens immediately of any unauthorized account activity.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">5. Acceptable Use</strong>
        <p className="text-[#5C6B68]">
          You agree not to misuse the platform, reverse engineer pose estimation models, submit falsified session metrics, or impersonate other clinical staff or patients.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">6. Hospital & Clinical Staff Responsibilities</strong>
        <p className="text-[#5C6B68]">
          Hospitals and attending clinicians retain sole responsibility for evaluating patient readiness, prescribing appropriate physical therapy routines, and reviewing session results.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">7. Intellectual Property</strong>
        <p className="text-[#5C6B68]">
          All rights, title, branding, source code, and assets associated with RehabLens remain the exclusive property of the RehabLens team.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">8. Limitation of Liability</strong>
        <p className="text-[#5C6B68]">
          RehabLens is provided on an &quot;as is&quot; basis without warranties of any kind. To the maximum extent permitted by law, RehabLens is not liable for physical injury or health outcomes resulting from app usage or exercise execution.
        </p>
      </section>

      <section className="space-y-4 leading-relaxed">
        <strong className="block text-lg font-semibold text-[#1E3F3A]">9. Contact</strong>
        <p className="text-[#5C6B68]">
          Questions regarding these terms should be directed to{' '}
          <a href="mailto:rehablensofficial@gmail.com" className="text-[#2F6F64] underline font-medium">
            rehablensofficial@gmail.com
          </a>.
        </p>
      </section>
    </article>
  );
}
