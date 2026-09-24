'use client';

import { motion } from 'framer-motion';
import { Download, Camera, LayoutDashboard, WifiOff, Building2 } from 'lucide-react';

const APK_URL = 'https://github.com/He-is-Henry/rehablens-mobile/releases/latest/download/rehablens.apk';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-b from-[#2F6F64]/10 via-[#FAFAF8] to-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1E3F3A] leading-tight">
              Camera-powered rehab, anywhere.
            </h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-[#5C6B68] max-w-2xl mx-auto leading-relaxed"
            initial="hidden" animate="visible" variants={fadeIn}
          >
            RehabLens connects hospitals, doctors, and patients around a shared rehabilitation exercise library with on-device camera tracking that checks your form in real time.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
            initial="hidden" animate="visible" variants={fadeIn}
          >
            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2F6F64] hover:bg-[#1E3F3A] text-white font-medium rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download for Android</span>
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#DDE5E4]/50 text-[#1E3F3A] font-medium rounded-xl transition-colors border border-[#DDE5E4]"
            >
              <span>Learn more</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-[#DDE5E4] shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#B89B6E] mb-3">1 in 48,000</div>
            <p className="text-[#5C6B68] leading-relaxed">
              Nigeria has roughly one physiotherapist for every 48,000 people, making in-person follow-ups nearly impossible.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-[#DDE5E4] shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1E3F3A] mb-3">Poor adherence</div>
            <p className="text-[#5C6B68] leading-relaxed">
              Most patients abandon home rehabilitation routines within weeks when exercising unsupervised without feedback.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-[#DDE5E4] shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#2F6F64] mb-3">No feedback loop</div>
            <p className="text-[#5C6B68] leading-relaxed">
              Hospitals and clinical staff have no reliable way to verify if patients are executing prescribed exercises correctly.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How it Works Section */}
      <section className="max-w-6xl mx-auto px-6 w-full space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-[#1E3F3A]">How RehabLens Works</h2>
          <p className="text-[#5C6B68]">Designed to bridge the gap between hospital care and home recovery.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="relative flex flex-col items-center text-center space-y-4 p-6">
            <div className="w-12 h-12 rounded-full bg-[#1E3F3A] text-white flex items-center justify-center font-bold text-lg">1</div>
            <h3 className="text-xl font-semibold text-[#23302E]">Hospital Register</h3>
            <p className="text-[#5C6B68] text-sm leading-relaxed">
              Hospital registers on the platform and onboards clinical staff with role-based access.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="relative flex flex-col items-center text-center space-y-4 p-6">
            <div className="w-12 h-12 rounded-full bg-[#2F6F64] text-white flex items-center justify-center font-bold text-lg">2</div>
            <h3 className="text-xl font-semibold text-[#23302E]">Assign Exercises</h3>
            <p className="text-[#5C6B68] text-sm leading-relaxed">
              Doctor assigns specific rehabilitation exercises tailored to each patient&apos;s recovery plan.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="relative flex flex-col items-center text-center space-y-4 p-6">
            <div className="w-12 h-12 rounded-full bg-[#B89B6E] text-white flex items-center justify-center font-bold text-lg">3</div>
            <h3 className="text-xl font-semibold text-[#23302E]">Real-Time Guidance</h3>
            <p className="text-[#5C6B68] text-sm leading-relaxed">
              Patient exercises at home. On-device camera tracks pose form and counts valid reps in real time.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-6xl mx-auto px-6 w-full space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-[#1E3F3A]">Platform Features</h2>
          <p className="text-[#5C6B68]">Built specifically for low-resource environments and high clinical accuracy.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-[#DDE5E4] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#2F6F64]/10 text-[#2F6F64] flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#23302E]">Camera Form Tracking</h3>
            <p className="text-[#5C6B68] leading-relaxed text-sm">
              Real-time joint angle detection and rep counting using a state machine (rest, triggered, holding, returning) right from your smartphone camera.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-[#DDE5E4] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#2F6F64]/10 text-[#2F6F64] flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#23302E]">Doctor Dashboard</h3>
            <p className="text-[#5C6B68] leading-relaxed text-sm">
              Clinical staff monitor patient adherence, session history, rep accuracy, and recovery progression remotely through central dashboards.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-[#DDE5E4] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#2F6F64]/10 text-[#2F6F64] flex items-center justify-center">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#23302E]">Works Offline</h3>
            <p className="text-[#5C6B68] leading-relaxed text-sm">
              Pose tracking and ML inference run locally on the smartphone. No active internet connectivity or specialized hardware required during sessions.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-[#DDE5E4] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#2F6F64]/10 text-[#2F6F64] flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#23302E]">Hospital Management</h3>
            <p className="text-[#5C6B68] leading-relaxed text-sm">
              Onboard medical staff, link patient accounts, manage shared exercise libraries, and assign customized routines at institutional scale.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Download Section */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="bg-[#1E3F3A] text-white rounded-3xl p-10 md:p-16 text-center space-y-8 shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Start your rehab journey.</h2>
            <p className="text-[#DDE5E4] text-base sm:text-lg">
              Free to download. No special equipment needed: just your Android phone.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2F6F64] hover:bg-white hover:text-[#1E3F3A] text-white text-base font-semibold rounded-xl transition-all shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download APK</span>
            </a>
            <p className="text-xs text-[#DDE5E4]/80">
              iOS coming soon &middot; Requires Android 8.0+
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
