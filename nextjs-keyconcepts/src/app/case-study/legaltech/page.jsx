'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import {
  Shield,
  Zap,
  Check,
  Calendar,
  FileText,
  ArrowRight,
  Clock,
  Settings,
  Database,
  Search,
  Award,
  TrendingUp,
  Sparkles,
  Globe,
  Percent,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  FileSignature,
  Cpu,
  Layers,
  Activity,
  FileEdit,
  Briefcase,
  Users,
  BarChart3,
  RefreshCw,
  Lock,
} from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '100%', label: 'Paperless Legal Execution Across India' },
  { value: 'Pan India', label: 'State Stamp Duty Calculation & Procurement Engine' },
  { value: 'Zero', label: 'Manual Errors or In-Person Notary Visits Required' },
]

const keyMetrics = [
  { label: 'Secure Storage Encryption', value: '100%' },
  { label: 'States & UTs Supported', value: '36' },
  { label: 'Platform Production SLA', value: '99.99%' },
]

const beforeAfterData = {
  before: [
    'Physical stamp paper required — visit to vendor or vendor delivery delay',
    'Manual document drafting — high error rate and formatting inconsistencies',
    'In-person signing — physically posting documents or flying executives to sign',
    'State-by-state stamp duty confusion — risk of underpaid stamp duty',
    'Days to complete a single contract or agreement execution',
    'No tracking — hard to know where a contract was in the signing process',
    'Storage problems — physical files lost in cabinets or damaged',
    'High cost of execution — notary fees, travel fees, printing and courier costs',
  ],
  after: [
    'Paperless execution — all digital from draft to final executed copy',
    'Dynamic interview builder — error-free documents created in minutes',
    'Aadhaar e-Sign — legally binding digital signatures executed anywhere in India',
    'Automated stamp duty calculation — precise state stamp tariffs calculated instantly',
    'Minutes to execute contract — processing time reduced by 90%+',
    'Real-time document tracking — complete status visibility for every party',
    'Encrypted digital vault — secure cloud storage with 24/7 instant retrieval',
    'Fraction of the cost — zero travel, zero courier fees, zero paper printing costs',
  ],
}

const features = [
  {
    icon: FileText,
    title: 'Interactive Document Builder',
    description: 'Drag-and-drop clause editor that compiles custom legal drafts using context-aware questionnaires, conditional variables, and live preview rendering.',
  },
  {
    icon: Settings,
    title: 'Dynamic Interview Forms',
    description: 'Context-aware questionnaires that collect inputs and auto-populate contract variables without requiring legal expertise.',
  },
  {
    icon: Percent,
    title: 'Stamp Duty Engine',
    description: 'Automated state tariff calculation engine covering 28 states and 8 union territories to prevent underpayment and state non-compliance.',
  },
  {
    icon: Shield,
    title: 'Payment Escrow Gateway',
    description: 'Multi-party split payments routing stamp duty values directly to state treasury wallets while processing platform convenience fees.',
  },
  {
    icon: FileSignature,
    title: 'Aadhaar E-Sign Integration',
    description: 'Legally binding digital signatures integrated directly with UIDAI validation API, making agreements enforceable under Indian law.',
  },
  {
    icon: BookOpen,
    title: 'Vetted Template Vault',
    description: 'Secure, collaborative repository for legally compliant templates, agreements, deeds, and corporate filings created by expert legal counsel.',
  },
  {
    icon: Globe,
    title: 'Regional Compliance Engine',
    description: 'Automated state-level compliance checks validating localized clause requirements and jurisdiction-specific legal mandates.',
  },
  {
    icon: Cpu,
    title: 'High-Speed PDF Compiler Engine',
    description: 'Generates pixel-perfect PDF documents, mirroring traditional stamp-paper format constraints and legal printing standards.',
  },
  {
    icon: BarChart3,
    title: 'Document Lifecycle Audit',
    description: 'Real-time timeline monitor tracking document drafts from creation, review, e-signing, and stamp duty procurement to final storage.',
  },
]

const securityBullets = [
  {
    title: 'Bank-Grade AES-256 Encryption',
    desc: 'Every document encrypted at rest and in transit using military-grade cryptographic keys.',
  },
  {
    title: 'Role-Based Access Control',
    desc: 'Granular permission settings ensuring only authorized signatories and team members access sensitive agreements.',
  },
  {
    title: 'Tamper-Proof Audit Trail',
    desc: 'Immutable activity log recording timestamps, IP addresses, Aadhaar authentication IDs, and document hashes.',
  },
  {
    title: 'Encrypted Vault Storage',
    desc: 'Secure cloud storage infrastructure with automatic multi-region backups, zero data leakage, and instant retrieval.',
  },
]

const flowSteps = [
  { step: '01', title: 'Select Template' },
  { step: '02', title: 'Fill Questionnaire' },
  { step: '03', title: 'Live Preview' },
  { step: '04', title: 'Procure Stamp' },
  { step: '05', title: 'e-Sign' },
  { step: '06', title: 'Share & Store' },
]

const timelineSteps = [
  {
    time: 'Weeks 1–4',
    title: 'Discovery & Legal Architecture',
    desc: 'Analyzed national legal templates, state stamp duty laws, and UIDAI e-sign compliance regulations. Mapped system architecture, security requirements, and data privacy protocols.',
  },
  {
    time: 'Weeks 5–12',
    title: 'Core Engine & Compiler',
    desc: 'Developed document builder, dynamic questionnaire compiler, and legal clause rendering engine. Built high-speed PDF compiler mirroring traditional stamp paper constraints.',
  },
  {
    time: 'Weeks 13–16',
    title: 'Government & Signature APIs',
    desc: 'Integrated state treasury calculation APIs for real-time stamp duty procurement and UIDAI-certified Aadhaar e-sign protocols for legally binding execution.',
  },
  {
    time: 'Weeks 17–20',
    title: 'Security Audit & Bank Testing',
    desc: 'Completed extensive security audits, penetration testing, and compliance verification. Embedded bank-grade encryption, role-based access control, and audit trail logging.',
  },
  {
    time: 'Weeks 21–24',
    title: 'Production Launch',
    desc: 'Released public platform, onboarded initial enterprise clients, and launched nation-wide across India. Platform processed thousands of legal documents in its first month.',
  },
]

export default function LegalTechCaseStudyPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/20 to-white/5 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-6"
              >
                LegalTech  ·  eSign  ·  Identity Validation  ·  SaaS
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight text-white"
              >
                MVP to Market Leader: Taking India's Legal Documentation <span className="text-[#f1592a]">Online</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                In India, legal documentation was still entirely manual — prone to forgery, slow to process, and impossible to do remotely. A founder saw this gap and had a clear vision: make it secure, digital, and accessible to anyone, anywhere. Key Concepts built the platform that turned that vision into reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3 mb-16"
              >
                {['Identity Validation', 'Video Recording', 'Transcript', 'eSign', 'Consent Capture', '3rd Party Integration', 'Scheduling'].map((badge) => (
                  <span key={badge} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300">
                    {badge}
                  </span>
                ))}
              </motion.div>

              {/* Stats Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 border border-white/10 rounded-3xl p-3 max-w-3xl mx-auto backdrop-blur-sm"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl md:text-3xl font-extrabold text-[#f1592a] mb-2">{stat.value}</p>
                    <p className="text-xs text-slate-300 uppercase font-semibold tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 1: The Challenge */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

              {/* Left Column: Description */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a]">
                    The Challenge
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    The Challenge
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    In India, executing a simple legal document was a multi-day ordeal — paper-heavy, physically exhausting, and dependent on multiple visits to stamp vendors, lawyers, and notary public offices. It required buying physical stamp paper, printing, visiting a notary, and physically signing each page. Disjointed, expensive, and error-prone by default.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    The problem was how people were doing it. Every step was manual. A founder or individual needed a contract drafted, stamp paper procured, clauses customized, and signatures collected. For a startup or an enterprise executing hundreds of agreements a month, this was a massive operational bottleneck — taking days per agreement, adding legal overhead, and risking non-compliance at scale. The legal system was stuck in the 1990s.
                  </p>
                </motion.div>

                {/* Founder Quote block */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-6 border-l-4 border-[#f1592a] bg-[#f1592a]/5 py-5 pr-4 rounded-r-2xl"
                >
                  <blockquote className="text-gray-800 italic text-sm md:text-base font-semibold leading-relaxed">
                    "The entire legal documentation industry in India was running on physical paper. From stamp duty to notary to legal signatures, someone had to build a platform that digitized and automated every step of the process."
                  </blockquote>
                  <p className="text-xs font-bold text-[#f1592a] uppercase mt-3 tracking-wider">— Founder, LegalTech Platform</p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                >
                  The team came to us with an ambitious vision: build India's first end-to-end digital legal platform that could handle everything from document creation and dynamic interview forms to instant stamp duty procurement and legally binding digital signatures. <strong className="text-gray-900 font-semibold">Digital legal documentation that reduced standard legal processing time from days to minutes — and created the category.</strong>
                </motion.p>
              </div>

              {/* Right Column: Sidebar Metrics & CTA */}
              <div className="space-y-8 lg:sticky lg:top-28">
                {/* Metrics Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm"
                >
                  <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Project Key Metrics</h4>
                  <div className="space-y-4">
                    {keyMetrics.map((metric, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                        <span className="text-xs text-gray-500 font-medium">{metric.label}</span>
                        <span className="text-sm font-bold text-[#f1592a]">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Direct Help CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-slate-950 rounded-3xl p-6 text-white border border-white/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#f1592a]/5 rounded-full blur-xl" />
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#f1592a]">Need a LegalTech Product?</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Our team understands complex transactional flows, Aadhaar integrations, and scalable PDF rendering. Let's discuss your custom application.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:shadow-lg hover:shadow-[#f1592a]/30 transition-all"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: India's Legal Documentation — Old Way vs. What We Built */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Before & After
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                India's Legal Documentation — Old Way vs. What We Built
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Old Way Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-red-50/30 border border-red-100 rounded-3xl p-6 md:p-8"
              >
                <h3 className="text-lg font-bold text-red-900 mb-6 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <span>THE OLD WAY</span>
                </h3>
                <ul className="space-y-4">
                  {beforeAfterData.before.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs md:text-sm text-gray-600">
                      <span className="text-red-300 mr-3 text-lg leading-none select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What We Built Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-emerald-50/30 border border-emerald-100 rounded-3xl p-6 md:p-8"
              >
                <h3 className="text-lg font-bold text-emerald-900 mb-6 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                  <span>WHAT WE BUILT (THE NEW WAY)</span>
                </h3>
                <ul className="space-y-4">
                  {beforeAfterData.after.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs md:text-sm text-gray-700 font-medium">
                      <span className="text-[#f1592a] mr-3 text-lg leading-none select-none">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: What We Built — Every Feature, Every Reason */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                What We Built
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                What We Built — Every Feature, Every Reason
              </h2>
              <p className="text-md md:text-lg text-gray-600 text-center leading-relaxed">
                We built a custom LegalTech platform designed to digitize India's legal documentation process from start to finish — from document creation to dynamic interview forms, instant stamp duty calculation, escrow payment routing, Aadhaar e-Sign, and a vetted template vault.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feat, index) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative h-full"
                >
                  <div className="h-full bg-white rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-2xl border border-gray-100 hover:border-[#f1592a]/20 transition-all flex flex-col justify-start">
                    <div className="relative w-12 h-12 transition-transform shrink-0 mb-6 group-hover:scale-110">
                      <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 transition-all group-hover:bg-white group-hover:border-[#f1592a]/10">
                        <feat.icon className="text-gray-700 w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 leading-snug">{feat.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mt-1">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Built for Enterprise Security Sub-Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-slate-950 text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#f1592a]/10 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-6">
                <span className="text-xs font-bold text-[#f1592a] uppercase tracking-wider block">
                  Enterprise Security Architecture
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Built for Enterprise Security — Not Just Convenience
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
                  Digital legal documentation handling sensitive contracts and financial agreements required enterprise-grade security architecture — not just standard Web App controls. We engineered bank-grade encryption, AES-256 storage, multi-party access control, and complete audit logging:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {securityBullets.map((item, idx) => (
                    <div key={idx} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-start space-x-4">
                      <Lock className="text-[#f1592a] w-5 h-5 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: How a Complete Legal Documentation Session Works */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Workflow Session
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                How a Complete Legal Documentation Session Works
              </h2>
              <p className="text-md md:text-lg text-gray-600 text-center leading-relaxed">
                From selecting a template to downloading a legally binding executed document — the entire process happens in minutes, completely online:
              </p>
            </motion.div>

            {/* 6 Steps Grid / Row */}
            <div className="relative max-w-6xl mx-auto mb-12">
              <div className="hidden lg:block absolute top-[28px] left-[7%] right-[7%] h-[2px] bg-gradient-to-r from-[#f1592a]/20 via-[#ff7a45]/30 to-[#f1592a]/20 pointer-events-none z-0" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                {flowSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative w-14 h-14 rounded-full bg-[#f1592a] text-white border-2 border-[#ff7a45] flex items-center justify-center font-bold text-xs group-hover:scale-110 shadow-md transition-all mb-4">
                      <span>{step.step}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm leading-snug">{step.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto"
            >
              The entire flow — from draft to executed agreement — happens in one seamless session. The user selects a template, answers context-aware questions, previews the auto-populated document, procures digital stamp duty, signs via Aadhaar e-Sign, and downloads or shares the executed contract.
            </motion.p>
          </div>
        </section>

        {/* Section 5: How It Unfolded (Same Timeline Steps Theme as Brand Central) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Timeline
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                How It Unfolded
              </h2>
            </motion.div>

            {/* Vertical Timeline matching Brand Central style */}
            <div className="max-w-4xl mx-auto relative pl-6 border-l border-gray-200 space-y-12">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative group"
                >
                  <div className="absolute -left-[33px] top-1 w-4.5 h-4.5 rounded-full border-2 border-white bg-gray-300 group-hover:bg-[#f1592a] group-hover:scale-120 transition-all duration-300 shadow-sm" />

                  <div className="bg-white border border-gray-100 hover:border-[#f1592a]/20 hover:shadow-lg transition-all rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs md:text-sm font-bold text-[#f1592a]">{step.time}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 leading-snug">{step.title}</h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: The Result: A Gap Closed. A Category Created. */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                  The Result
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                  The Result: A Gap Closed. A Category Created.
                </h2>
              </motion.div>

              {/* Labeled Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 md:p-8 border border-gray-100 rounded-3xl bg-gray-50 text-center flex flex-col justify-between"
                  >
                    <p className="text-3xl md:text-4xl font-extrabold text-[#f1592a] mb-3">{stat.value}</p>
                    <p className="text-xs md:text-sm font-medium text-gray-600 leading-relaxed">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Explanatory Paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed"
              >
                <p>
                  Document execution time was cut from days to minutes. A process that used to involve physical travel, manual paperwork, and multiple intermediaries was reduced to a single online session. <strong className="text-gray-900 font-semibold">The platform didn't just digitize legal documents — it created a whole new standard for how contracts are executed in India.</strong>
                </p>
                <p>
                  From startups executing founder agreements to enterprises managing thousands of vendor contracts, the platform proved that legal documentation doesn't have to be slow, expensive, or paper-heavy.
                </p>
              </motion.div>

              {/* Founder Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-4 border-[#f1592a] bg-[#f1592a]/5 py-6 pr-6 rounded-r-3xl"
              >
                <blockquote className="text-gray-800 italic text-sm md:text-base font-semibold leading-relaxed">
                  "We had a great vision for the product, but we needed an engineering team that could build a complex legal engine from scratch. Key Concepts understood that vision and executed it flawlessly."
                </blockquote>
                <p className="text-xs font-bold text-[#f1592a] uppercase mt-3 tracking-wider">— Founder, LegalTech Platform</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 7: What This Means for Your Business */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  What This Means for Your Business
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  If your industry is still burdened by manual processes, physical paperwork, or fragmented legacy tools — there is an opportunity to build a digital platform that digitizes your entire workflow and creates a new standard for your market.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Building complex, regulated software requires more than standard Web development — it requires deep architectural planning, high security standards, complex API integrations, and intuitive User Experience design.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 8: CTA / Footer CTA Section matching "product-development" & "Brand central" theme */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZhd0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8"
              >
                <Sparkles className="text-white w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-md text-white font-medium">Ready to Build?</span>
              </motion.span>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                See a Gap in Your Industry That Technology Could Close?
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                We partner with founders and enterprise leaders to build category-defining software platforms. Let's discuss your vision.
              </p>

              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="group px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold"
                >
                  <span className="text-sm md:text-md">Start a Conversation</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </LayoutWrapper>
  )
}
