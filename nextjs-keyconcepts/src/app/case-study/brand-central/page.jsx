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
  Rocket,
  DollarSign,
  Package,
} from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '120%', label: 'Sales Growth' },
  { value: '3x', label: 'Customer Reach' },
  { value: '60%', label: 'Faster Order Processing' },
]

const resultMetrics = [
  {
    value: '120%',
    label: "Average sales growth for Brand Central's clients post-platform launch",
  },
  {
    value: '3x',
    label: 'More brand clients managed by the same team — no additional headcount',
  },
  {
    value: '60%',
    label: 'Faster listing updates and order processing across all platforms',
  },
]

const platformCards = [
  {
    name: 'AMAZON',
    color: 'bg-amber-500',
    description: 'Listings updated manually per SKU. Price changes took hours to reflect. Inventory counts frequently lagged behind actual stock — leading to orders accepted for items already sold on Myntra.',
  },
  {
    name: 'MYNTRA',
    color: 'bg-rose-500',
    description: "Different catalogue format, different image specs, different content requirements. Every new brand onboarding required rebuilding the entire catalogue from scratch in Myntra's format manually.",
  },
  {
    name: 'AJIO',
    color: 'bg-purple-500',
    description: 'Seasonal and trend-based listings required frequent rapid updates. Manual processes meant Brand Central was always a step behind — missing trend windows while competitors moved faster.',
  },
]

const problemCards = [
  {
    icon: DollarSign,
    title: 'Wrong Prices Live',
    description: "Price changes made on one platform weren't reflected on others. Brands were unknowingly selling below margin on some platforms while overpriced on others.",
  },
  {
    icon: Package,
    title: 'Inventory Overselling',
    description: "Stock sold on Amazon wasn't deducted from Myntra or Ajio in time. Overselling meant cancelled orders, bad reviews, and penalty flags from marketplaces.",
  },
  {
    icon: Clock,
    title: 'Listings Too Slow',
    description: 'What should have taken minutes was taking days. Every new product, every seasonal update, every price campaign — done manually across three platforms.',
  },
]

const keyMetrics = [
  { label: 'Order Sync Accuracy', value: '100%' },
  { label: 'Supported Marketplaces', value: 'Amazon, Myntra, Ajio' },
  { label: 'Manual Effort Saved', value: '60%' },
  { label: 'Stock Sync Speed', value: 'Real-Time' },
]

const features = [
  {
    icon: FileText,
    title: 'Unified Listing Management',
    description: 'Create or update a product listing once. The platform automatically formats, adapts, and pushes it to Amazon, Myntra, and Ajio — each in the correct format and spec required by that marketplace.',
  },
  {
    icon: RefreshCw,
    title: 'Centralised Pricing Engine',
    description: 'Set pricing rules and run campaigns from one place. Changes reflect across all platforms simultaneously — no more platforms out of sync, no more margin errors.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Inventory Sync',
    description: 'Every sale on any platform immediately updates stock across all others. Overselling eliminated. Marketplace penalty flags gone. Brand clients protected.',
  },
  {
    icon: ShoppingBag,
    title: 'Centralised Order Management',
    description: 'Orders from Amazon, Myntra, and Ajio flowing into one queue. Prioritised, assigned, and tracked in one place — no jumping between three platform dashboards.',
  },
  {
    icon: Rocket,
    title: 'Rapid Brand Onboarding',
    description: 'New brands onboarded to all platforms in a fraction of the previous time. Catalogue templates built once, pushed everywhere. What took days now takes hours.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics Dashboard',
    description: 'Brand-by-brand, platform-by-platform sales performance, inventory movement, and order fulfilment metrics — all in one report that Brand Central can share directly with clients.',
  },
]

const beforeAfterData = {
  before: [
    'Every listing updated manually — three times, platform by platform',
    'Prices out of sync across platforms — margin errors going unnoticed',
    'Inventory overselling — cancelled orders, penalty flags',
    'New brand onboarding took days of manual catalogue work',
    "Team capacity limited by manual workload — couldn't grow client base",
    'No single view of performance across all platforms and clients',
  ],
  after: [
    'One update pushes to all platforms instantly — correctly formatted',
    'Centralised pricing engine — all platforms always in sync',
    'Real-time inventory sync — zero overselling, zero penalty flags',
    'New brand live on all platforms in hours, not days',
    'Same team handling 3× more clients — without adding headcount',
    'Single analytics dashboard — shared directly with brand clients',
  ],
}

const timelineSteps = [
  {
    title: 'Understanding the Real Workflow',
    time: 'Weeks 1–2',
    desc: "Sat with Brand Central's operations team. Mapped every manual task, every platform touchpoint, every decision that was being made by hand. Found the highest-pain, highest-frequency tasks to solve first.",
  },
  {
    title: 'Architecture & API Planning',
    time: 'Weeks 3–4',
    desc: 'Mapped the API capabilities and constraints of Amazon, Myntra, and Ajio. Designed the data model that would make a single update propagate correctly across three different platform formats.',
  },
  {
    title: 'Build, Test, Refine',
    time: 'Weeks 5–14',
    desc: 'Built feature by feature — inventory sync first (the highest pain), then pricing, then listings, then orders. Each feature tested with real Brand Central accounts before moving to the next.',
  },
  {
    title: 'Pilot with Live Clients',
    time: 'Weeks 15–16',
    desc: "Ran the platform live with a small group of Brand Central's actual brand clients — real products, real orders, real inventory. Caught edge cases, refined the experience, confirmed it worked under real conditions.",
  },
  {
    title: 'All Clients Migrated',
    time: 'Full Rollout',
    desc: "Full platform rollout across all Brand Central's clients. Onboarding new brands now takes hours instead of days. The same team that was struggling to manage their existing clients could now take on three times as many.",
  },
]

export default function BrandCentralCaseStudyPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white overflow-hidden">
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
                E-Commerce  ·  Marketplace  ·  SaaS Platform
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight text-white"
              >
                E-commerce Platform Revolutionizing <span className="text-[#f1592a]">Retail Experience</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-md lg:text-lg mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
              >
                Brand Central helps brands sell on Amazon, Myntra, and Ajio - but everything was managed manually. Listings took days to update. Prices were out of sync across platforms. Inventory was overselling because a sale on one platform wasn't reflected on others. Key Concepts built the platform that turned that vision into reality.
              </motion.p>


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

              {/* Showcase Image Banner */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-12 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src="/assets/brand-central.png"
                  alt="Brand Central Case Study Showcase"
                  className="w-full h-auto object-cover"
                />
              </motion.div> */}
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

              {/* Left Column: Description & Subsections */}
              <div className="lg:col-span-2 space-y-12">
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
                    Brand Central had a great business idea and a real market need. Brands across India — many of them manufacturers and D2C labels — wanted to sell on Amazon, Myntra, and Ajio but didn't know how to manage those platforms effectively. Brand Central stepped in as their expert partner: handle the listings, manage the catalogues, run the operations.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    The problem was how they were doing it. <strong className="text-gray-900 font-semibold">Everything was manual.</strong> Every listing update, every price change, every inventory adjustment — done platform by platform, account by account, by hand. As their client roster grew, the cracks became craters.
                  </p>
                </motion.div>

                {/* Operations Lead Quote block */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-6 border-l-4 border-[#f1592a] bg-[#f1592a]/5 py-5 pr-4 rounded-r-2xl"
                >
                  <blockquote className="text-gray-800 italic text-sm md:text-base font-semibold leading-relaxed">
                    "We were managing three platforms for each client. Every change had to be made three times. And half the time, something was out of sync somewhere — and we wouldn't find out until a client called us angry."
                  </blockquote>
                  <p className="text-xs font-bold text-[#f1592a] uppercase mt-3 tracking-wider">— Brand Central, Operations Lead</p>
                </motion.div>

                {/* Three Platforms. Three Separate Realities. Zero Sync. */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 pt-4"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Three Platforms. Three Separate Realities. Zero Sync.
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Each marketplace had its own interface, its own rules, and its own format. Managing them separately meant Brand Central's team was doing the same work three times — and still getting it wrong:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {platformCards.map((card, i) => (
                      <div
                        key={i}
                        className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50 flex flex-col justify-start"
                      >
                        <div className="flex items-center space-x-2 mb-3">
                          <span className={`w-2.5 h-2.5 rounded-full ${card.color}`} />
                          <span className="font-bold text-gray-900 text-xs tracking-wider uppercase">{card.name}</span>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Three Problems Costing Them Every Day */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 pt-4"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Three Problems Costing Them Every Day
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {problemCards.map((card, i) => (
                      <div
                        key={i}
                        className="p-5 border border-red-100/60 rounded-2xl bg-red-50/30 flex flex-col justify-start text-center items-center"
                      >
                        <div className="w-10 h-10 rounded-full bg-red-100/60 flex items-center justify-center mb-3">
                          <card.icon className="text-[#f1592a] w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <h4 className="font-bold text-red-950 text-sm mb-2">{card.title}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* THE REAL COST Callout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 border border-amber-200/80 rounded-3xl bg-amber-50/40"
                >
                  <span className="text-xs font-bold text-[#f1592a] uppercase tracking-wider block mb-3">
                    THE REAL COST
                  </span>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Brand Central wasn't just losing efficiency — they were losing client trust. Every cancelled order due to overselling, every price error that a brand spotted, every trend missed because listings were slow — these were chips in the reputation of a company whose entire value was supposed to be making marketplace selling <strong className="text-gray-900 font-semibold">easier</strong> for their clients.
                  </p>
                </motion.div>
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
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#f1592a]">Need Marketplace Integration?</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Our team specializes in building multi-channel marketplace integrations, stock auto-sync systems, and pricing algorithms.
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
                What We Built - Feature by Feature
              </h2>
              <p className="text-md md:text-lg text-gray-600 text-center">
                A high-speed SaaS retail middleware connecting stock levels, order allocations, and catalogs under one dynamic hub.
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
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
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
        <section className="py-16 md:py-24 bg-white">
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
                Transforming Daily Retail Operations
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
                A structured engineering roadmap outline tracing design strategy, code executions, and optimization sprints.
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

        {/* The Result / Key Metrics Section */}
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
                  Scale Operations. Eliminate Errors.
                </h2>
              </motion.div>

              {/* Labeled Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resultMetrics.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 md:p-8 border border-gray-100 rounded-3xl bg-gray-50 text-center flex flex-col justify-between"
                  >
                    <p className="text-4xl md:text-5xl font-extrabold text-[#f1592a] mb-4">{stat.value}</p>
                    <p className="text-xs md:text-sm font-medium text-gray-600 leading-relaxed">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Explanatory Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-600 text-sm md:text-base leading-relaxed"
              >
                <p>
                  But the number we found most meaningful was quieter than any of these. Before the platform, Brand Central's team was spending the majority of their day doing repetitive manual work across three dashboards. After the platform, that same team was spending their time on strategy — helping brands grow, not just keeping up with the paperwork. <strong className="text-gray-900 font-bold">The platform didn't just make their work faster. It made their work matter more.</strong>
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
                  "We used to dread onboarding a new brand — it meant days of catalogue work. Now we can take a brand live on all three platforms in a morning. We've taken on more clients in the last three months than in the entire previous year."
                </blockquote>
                <p className="text-xs font-bold text-[#f1592a] uppercase mt-3 tracking-wider">— Brand Central, Founder</p>
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
                  <Sparkle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Managing Multiple Platforms Manually? There's a Better Way.
                </h2>

                <p className="text-md md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Let's design a customized, robust, and automated multi-channel synchronization ecosystem tailored to your backend integrations.
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
