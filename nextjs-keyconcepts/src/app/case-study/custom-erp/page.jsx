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
  ShoppingBag,
  ArrowUpRight,
  Sparkle,
  Factory,
  ClipboardList,
  FlameKindling,
} from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '45%', label: 'Efficiency Increase' },
  { value: '30%', label: 'Cost Reduction' },
  { value: '6 mo.', label: 'ROI Timeline' },
]

const challengeCards = [
  {
    title: 'Drowning in Manual Paperwork',
    description: 'Invoices, delivery notes, and regulatory chemical export certifications were hand-typed, causing processing bottlenecks and human entry errors.',
  },
  {
    title: 'Inventory Blind Spots',
    description: 'Sales committed delivery dates to clients without real-time inventory visibility or current chemical production queue statuses.',
  },
  {
    title: 'Overstocking & Waste',
    description: 'Procurement teams bought raw chemical ingredients without feedback loops, leading to 35% excess storage inventory and cash flow blocks.',
  },
]

const failedCards = [
  {
    title: 'Inflexible Formulation Sheets',
    description: 'Off-the-shelf software failed to support complex multi-stage chemical recipe adjustments, scaling ratios, and strict raw material formulation guidelines.',
  },
  {
    title: 'No Lot / Batch Tracing',
    description: 'Traditional systems lacked dynamic serial/lot tracking required to monitor batch lifecycles from manufacture to client delivery for compliance audits.',
  },
  {
    title: 'Generic Retail Workflows',
    description: 'Rigid standard retail inventory modules forced operations to abandon their natural chemical manufacturing flows, leading to zero employee usage.',
  },
]

const keyMetrics = [
  { label: 'Data Operations Transparency', value: '100%' },
  { label: 'Connected Departments', value: 'Purchase, Sales, Production, Exports' },
  { label: 'Raw Material Overstock Cut', value: '35%' },
]

const features = [
  {
    icon: ShoppingBag,
    title: 'Intelligent Purchase Manager',
    description: 'Predictive procurement engine that auto-calculates and triggers purchase orders matching raw material requirements with active orders.',
  },
  {
    icon: Database,
    title: 'Real-Time Inventory Control',
    description: 'Automatic lot tracing, batch tracking, and formulation-level stock allocations that synchronize across all warehouses dynamically.',
  },
  {
    icon: Factory,
    title: 'Visual Production Planner',
    description: 'Visual drag-and-drop planning board aligning manufacturing runs directly with raw material availability and machine capacities.',
  },
  {
    icon: FileText,
    title: 'Automated Export Compiler',
    description: 'One-click generation of localized invoices, detailed packing lists, and chemical certification reports, reducing delays.',
  },
]

const beforeAfterData = {
  before: [
    'Purchasing raw materials manually, leading to 35% excess storage inventory.',
    'Sales committing delivery dates without knowing stock levels or production lines.',
    'Exports spent hours manually compiling regulatory documents and export sheets.',
    'Production scheduling on whiteboards without real-time stock balances visibility.',
  ],
  after: [
    'Procurement triggers dynamic purchase orders based on active material balances.',
    'Real-time inventory sync prevents overselling and schedules production runs.',
    'Export document compiler decreases processing time from 4 hours to 25 minutes.',
    'Drag-and-drop visual planner matches raw material availability with line capacity.',
  ],
}

const timelineSteps = [
  {
    phase: 'Phase 1',
    title: 'Listening & Process Audit',
    time: 'Weeks 1-3',
    desc: 'Mapped chemical formula templates, compliance checklists, and department silos.',
  },
  {
    phase: 'Phase 2',
    title: 'Core Database & Lots API',
    time: 'Weeks 4-8',
    desc: 'Built centralized Odoo database with lot tracing models, formulation tables, and raw material recipes.',
  },
  {
    phase: 'Phase 3',
    title: 'Procurement & Stock Workers',
    time: 'Weeks 9-14',
    desc: 'Configured automated procurement rules and stock allocation alerts to synchronize purchase pipelines.',
  },
  {
    phase: 'Phase 4',
    title: 'Visual Planner Dashboard',
    time: 'Weeks 15-20',
    desc: 'Designed dynamic visual production planner with real-time material validation checks and calendar scheduling.',
  },
  {
    phase: 'Phase 5',
    title: 'Go-Live & Migrations',
    time: 'Weeks 21-24',
    desc: 'Integrated one-click export document compiler, migrated historic spreadsheets data, and went live.',
  },
]

export default function CustomERPCaseStudyPage() {
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
                Speciality Chemicals  ·  Custom ERP  ·  Manufacturing  ·  Odoo
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight text-white"
              >
                Digital Transformation Success: Scaling Operations with <span className="text-[#f1592a]">Custom ERP</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                4 years in business, growing fast - but Purchase, Sales, Production, and Exports were all working from a single shared email inbox and Excel files. Purchase was buying excess stock. Sales was committing orders that weren't in inventory. Production had no planning visibility. Exports was drowning in manual paperwork. Two previous software systems had already failed them. We listened first, then built a custom Odoo ERP that finally connected everything.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3 mb-16"
              >
                {['Custom Odoo ERP', 'Chemical Formulations', 'Production Planner', 'Export Automation'].map((badge) => (
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
                    Disconnected Teams Operating Blindly on Excel Sheets
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    A rapidly expanding speciality chemicals manufacturer hit an operational wall. Sales, purchasing, warehousing, and exports operated as completely separate islands. Purchasing bought raw chemical components based on guesswork, Sales promised order dispatch dates without inventory views, and exports spent hours manually typing bills, certificate sheets, and shipping papers.
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
                    "Purchase was buying excess stock, Sales committed orders we couldn't make, and Production was operating blind. The email-and-spreadsheet setup was breaking down at our scale."
                  </blockquote>
                  <p className="text-xs font-bold text-[#f1592a] uppercase mt-2 tracking-wider">— Director of Operations</p>
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
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#f1592a]">Need a Custom ERP System?</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Our team develops specialized ERP architectures, manufacturing planners, custom inventory tracking, and document builders.
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

        {/* Why Two Previous Systems Had Failed Them */}
        <section className="py-16 md:py-20 bg-gray-50/30 border-t border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                  Failed Abstractions
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Why Two Previous Systems Had Failed Them
                </h2>
                <p className="text-gray-500 text-xs md:text-sm mt-4 leading-relaxed max-w-2xl mx-auto">
                  Generic off-the-shelf software packages could not grasp the unique realities of chemical compounding. Forced layout migrations caused user rejection.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {failedCards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:border-[#f1592a]/20 transition-all"
                  >
                    <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#f1592a] rounded-full" />
                      <span>{card.title}</span>
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Internal Quote */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-4 border-amber-500 bg-amber-500/5 py-4 pr-4 rounded-r-2xl"
              >
                <blockquote className="text-gray-800 italic text-xs md:text-sm font-medium leading-relaxed">
                  "Off-the-shelf software forced us to change our core formula sheets and production workflows. We needed a system built around our actual chemistry, not a generic retail model."
                </blockquote>
                <p className="text-[10px] font-bold text-amber-600 uppercase mt-2 tracking-wider">— Lead Chemist, Speciality Chemicals</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Built Section */}
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
                One System. Four Aligned Departments.
              </h2>
              <p className="text-md md:text-lg text-gray-600 text-center">
                A custom-tailored Odoo ERP suite aligning purchasing formulas, batch traces, and plant operations schedules under one database.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Before and After Section */}
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
                Unifying Disconnected Operations
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Before Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-red-50/30 border border-red-100 rounded-3xl p-6 md:p-8"
              >
                <h3 className="text-lg font-bold text-red-900 mb-6 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <span>Manual Operations (Before)</span>
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

              {/* After Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-emerald-50/30 border border-emerald-100 rounded-3xl p-6 md:p-8"
              >
                <h3 className="text-lg font-bold text-emerald-900 mb-6 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                  <span>Automated System (After)</span>
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

        {/* How It Unfolded / Development Timeline */}
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
              <p className="text-md md:text-lg text-gray-600 text-center">
                A structured engineering roadmap outline tracing design strategy, database setups, and go-live iterations.
              </p>
            </motion.div>

            {/* Vertical Timeline */}
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
                  Scale Operations. Reduce Costs.
                </h2>
                <p className="text-md md:text-lg text-gray-600 text-center leading-relaxed">
                  The customized ERP resolved chemical production queues and cut raw material overstock allocations by 35%.
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
                    className="p-6 border border-gray-100 rounded-3xl bg-white text-center shadow-sm"
                  >
                    <p className="text-4xl font-extrabold text-[#f1592a] mb-2">{stat.value}</p>
                    <p className="text-xs uppercase font-bold text-gray-600 tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Operation Director Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-4 border-[#f1592a] bg-[#f1592a]/5 py-6 pr-6 rounded-r-3xl"
              >
                <blockquote className="text-gray-800 italic text-sm md:text-base font-semibold leading-relaxed">
                  "We built an integrated Odoo system that finally connected their operations. Within 6 months, they went from daily chaos and missed deadlines to having one connected system."
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
                  For manufacturers operating with siloed teams and manual spreadsheets, generic software packages often lead to failed projects and team frustration. By engineering a custom Odoo ERP tailored to your formulation rules, warehousing allocations, and visual shop schedules—we optimize your operations pipeline securely.
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
                  <Factory className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Is Your Business Running in Silos? Let's Connect It Together.
                </h2>

                <p className="text-md md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Let's design a customized, robust, and connected ERP ecosystem matching your exact formulation and manufacturing rules.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all font-semibold flex items-center justify-center space-x-2 animate-bounce"
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
