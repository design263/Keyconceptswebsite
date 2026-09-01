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
} from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '100%', label: 'Document Accuracy' },
  { value: 'Pan India', label: 'Availability' },
  { value: 'Zero', label: 'Manual Errors' },
]

const challengeCards = [
  {
    title: 'Multi-State Stamp Rules',
    description: 'Dynamic calculations of state-specific stamp duty laws and automatic integration with local government treasuries across 28 states.',
  },
  {
    title: 'Offline-First Drafts',
    description: 'Enable legal document creation, offline variables caching, and automatic synchronization when network coverage is restored.',
  },
  {
    title: 'Intelligent Clause Manager',
    description: 'A modular document builder using drag-and-drop clause patterns, conditional variables validation, and live preview rendering.',
  },
]

const keyMetrics = [
  { label: 'Secure Storage Encryption', value: '100%' },
  { label: 'States & UTs Supported', value: '36' },
  { label: 'Platform Production SLA', value: '99.99%' },
]

const features = [
  {
    icon: FileText,
    title: 'Document Builder',
    description: 'Interactive clause editor that compiles drafts with drag-and-drop legal block management.',
  },
  {
    icon: Settings,
    title: 'Dynamic Interview Forms',
    description: 'Intelligent inputs collection using context-aware questionnaires to auto-populate contract fields.',
  },
  {
    icon: Percent,
    title: 'Stamp Duty Engine',
    description: 'State tariff calculations calculated dynamically to prevent underpayment and state penalties.',
  },
  {
    icon: Shield,
    title: 'Payment Escrow Gateway',
    description: 'Multi-party split payments routing stamp duty values directly to government wallets.',
  },
  {
    icon: FileSignature,
    title: 'Aadhaar E-Sign Integration',
    description: 'Legally binding digital signatures integrated directly with UIDAI validation API.',
  },
  {
    icon: BookOpen,
    title: 'Vetted Template Vault',
    description: 'Secure, collaborative repository for legally compliant templates, agreements, and deeds.',
  },
  {
    icon: Globe,
    title: 'Regional Compliance',
    description: 'Automated state-level compliance checks validating localized clause requirements.',
  },
  {
    icon: Cpu,
    title: 'High-Speed PDF Compiler',
    description: 'Generates pixel-perfect PDF documents, mirroring traditional stamp-paper format constraints.',
  },
  {
    icon: BarChart3,
    title: 'Document Lifecycle Audit',
    description: 'Real-time timeline monitor tracking variable drafts from creation to final execution.',
  },
]

const flowSteps = [
  { step: '01', title: 'Setup Template', desc: 'Legally vet and upload base drafts.' },
  { step: '02', title: 'Input Variables', desc: 'Complete questionnaire interview.' },
  { step: '03', title: 'Dynamic Preview', desc: 'Review real-time populated variables.' },
  { step: '04', title: 'Aadhaar E-Sign', desc: 'Secure digital signature execution.' },
  { step: '05', title: 'Stamp Duty Procurement', desc: 'Dynamic purchase of legal stamp duty.' },
  { step: '06', title: 'Executed Document', desc: 'Download legally binding certificate.' },
]

const timelineSteps = [
  {
    phase: 'Phase 1',
    title: 'MVP Definition & Scope',
    time: 'Weeks 1-4',
    desc: 'Analyzed national legal templates, compliance requirements, and mapped technical integrations.',
  },
  {
    phase: 'Phase 2',
    title: 'Clause Compiler Engine',
    time: 'Weeks 5-12',
    desc: 'Developed draft builder with dynamic state clause rendering and variable compiler algorithms.',
  },
  {
    phase: 'Phase 3',
    title: 'Government Stamp API',
    time: 'Weeks 13-16',
    desc: 'Integrated real-time treasury calculations and payment routing for stamp paper procurement.',
  },
  {
    phase: 'Phase 4',
    title: 'Security & Sign Auditing',
    time: 'Weeks 17-20',
    desc: 'Completed extensive compliance audits for Aadhaar e-sign protocols and secure document vault keys.',
  },
  {
    phase: 'Phase 5',
    title: 'Production Beta Launch',
    time: 'Weeks 21-24',
    desc: 'Released public beta, onboarded primary enterprise customers, and launched across India.',
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
                {['Identity Validation', 'Video Recording', 'Transcript', 'eSign', 'Consent Capture', '3rd Party Integration', 'Scheduling',].map((badge) => (
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
                    <p className="text-xs md:text-xs text-slate-300 uppercase font-semibold tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

              {/* Left Column: Description */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                    The Challenge
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                    Traditional Legal Paperwork is Complex, Highly Unorganized, and Fragmented
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    In India, legal documentation has historically relied on localized printers, manual typographical modifications, and long queues to procure physical stamp papers. Errors in duty calculations or outdated template clauses frequently cause severe transaction delays or invalidate agreements completely.
                  </p>
                </motion.div>

                {/* Quote block */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-6 border-l-4 border-[#f1592a] bg-[#f1592a]/5 py-4 pr-4 rounded-r-2xl"
                >
                  <blockquote className="text-gray-800 italic text-sm md:text-base font-medium leading-relaxed">
                    "Automating legal documents was not just about making a form — it was about dynamically managing varying state laws, local stamp duty rules, and ensuring strict legal compliance at a national scale."
                  </blockquote>
                  <p className="text-xs font-bold text-[#f1592a] uppercase mt-2 tracking-wider">— Technical Architect, Key Concepts</p>
                </motion.div>

                {/* Key challenges cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {challengeCards.map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50 flex flex-col justify-start"
                    >
                      <h4 className="font-bold text-gray-900 text-sm mb-2">{card.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Sidebar Metrics & CTA */}
              <div className="space-y-8">
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

        {/* What We Built Section */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100">
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
                Every Clause. Every Stamp. Automated.
              </h2>
              <p className="text-md md:text-lg text-gray-600 text-center">
                A modular suite designed to take legal documents from blank screen drafts to legally executed binding instruments in minutes.
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
          </div>
        </section>

        {/* How It Works Flow Chart */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Flow Diagram
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                How a Complete Legal Documentation Session Works
              </h2>
              <p className="text-md md:text-lg text-gray-600 text-center">
                From draft initialization to procurement and digital signature execution.
              </p>
            </motion.div>

            {/* Steps Workflow List */}
            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block absolute top-[28px] left-[7%] right-[7%] h-[2px] bg-gradient-to-r from-[#f1592a]/20 via-[#ff7a45]/30 to-[#f1592a]/20 pointer-events-none z-0" />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                {flowSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative w-14 h-14 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center font-bold text-gray-800 text-sm group-hover:border-[#f1592a] group-hover:bg-[#f1592a]/5 shadow-sm group-hover:shadow-md transition-all mb-4">
                      <span className="text-[#f1592a] group-hover:scale-110 transition-transform">{step.step}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1 leading-snug">{step.title}</h4>
                    <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed max-w-[140px]">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Unfolded / Development Timeline */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100">
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
              <p className="text-md md:text-lg text-gray-600 text-center">
                Our structured roadmap outlining product strategy, implementation details, and the sprint iterations to beta launch.
              </p>
            </motion.div>

            {/* Vertical/Horizontal Process Flow */}
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
                  {/* Circle dot marker */}
                  <div className="absolute -left-[33px] top-1 w-4.5 h-4.5 rounded-full border-2 border-white bg-gray-300 group-hover:bg-[#f1592a] group-hover:scale-120 transition-all duration-300 shadow-sm" />

                  <div className="bg-white border border-gray-100 hover:border-[#f1592a]/20 hover:shadow-lg transition-all rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-100 border border-amber-200/50 px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                          {step.phase}
                        </span>
                        <span className="text-xs font-bold text-gray-400">{step.time}</span>
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

        {/* The Result Section */}
        <section className="py-16 md:py-24 bg-white">
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
                  A Category Defined. A Nation Served.
                </h2>
                <p className="text-md md:text-lg text-gray-600 text-center leading-relaxed">
                  The resulting legal documentation platform scales transaction processing times down by 95%, removing human error variables.
                </p>
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
                    className="p-6 border border-gray-100 rounded-3xl bg-gray-50 text-center"
                  >
                    <p className="text-4xl font-extrabold text-[#f1592a] mb-2">{stat.value}</p>
                    <p className="text-xs uppercase font-bold text-gray-600 tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Architect Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-4 border-[#f1592a] bg-[#f1592a]/5 py-6 pr-6 rounded-r-3xl"
              >
                <blockquote className="text-gray-800 italic text-sm md:text-base font-semibold leading-relaxed">
                  "We did not just build a product. We built the core transactional infrastructure that powers legal documentation for thousands of Indian businesses, ensuring bulletproof compliance at scale."
                </blockquote>
                <p className="text-xs font-bold text-[#f1592a] uppercase mt-2 tracking-wider">— Director of Engineering, Key Concepts</p>
              </motion.div>

              {/* What This Means for Your Business */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">What This Means for Your Business</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Whether you are scaling transaction processes, automating internal legal drafting pipelines, or looking to integrate government-authorized stamp procurement gateways into your native applications—our core architectures provide the flexibility, compliance, and enterprise security guarantees to execute securely.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a] via-[#ff7a45] to-[#f1592a]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/40"
                >
                  <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Never Have to Prove Technical Capability Again!
                </h2>

                <p className="text-md md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Looking to digitize complex legal workflows or build custom transaction platforms? Let's engineer a solution together.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Request a Demo</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/insights/case-studies"
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-[#f1592a] transition-all font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>See All Case Studies</span>
                  </Link>
                </div>

                {/* Checklist bullets */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-white/80"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">30-minute consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">No obligation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">Surat core engineering</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </LayoutWrapper>
  )
}
