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
  CheckCircle,
  Package,
  DollarSign,
  Rocket,
  AlertTriangle,
} from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '45%', label: 'Efficiency Increase Across All Operations' },
  { value: '30%', label: 'Cost Reduction in Raw Material Holding' },
  { value: '6 mo.', label: 'Full ROI Timeline on System Investment' },
]

const keyMetrics = [
  { label: 'Raw Material Overstock Cut', value: '35%' },
  { label: 'Export Doc Processing Time', value: '4 hrs → 25 mins' },
  { label: 'Sales Order Delivery Accuracy', value: '98%+' },
  { label: 'Team System Adoption Rate', value: '100%' },
]

const departmentSuffering = [
  {
    dept: 'PURCHASE',
    color: 'border-red-100 bg-red-50/40 text-red-950',
    desc: 'Bought raw materials based on monthly estimates rather than real demand. Result: 35% excess raw material stock sitting in the warehouse, tying up capital that could have been used for expansion.',
  },
  {
    dept: 'SALES',
    color: 'border-red-100 bg-red-50/40 text-red-950',
    desc: 'Committed delivery dates to clients without knowing stock levels or production capacity. Result: frequent missed deadlines, frustrated clients, and sales reps constantly chasing production for updates.',
  },
  {
    dept: 'PRODUCTION',
    color: 'border-red-100 bg-red-50/40 text-red-950',
    desc: 'Scheduled production runs on whiteboards and spreadsheets. Raw materials frequently ran out mid-batch, halting production lines while workers waited for emergency purchase orders.',
  },
  {
    dept: 'EXPORTS',
    color: 'border-red-100 bg-red-50/40 text-red-950',
    desc: 'Manually compiled regulatory export documents for every single shipment. Took 4 hours per shipment — creating a bottleneck at dispatch every time a container was ready.',
  },
]

const resultDepartments = [
  {
    title: 'PURCHASE — NOW DRIVEN BY REAL DEMAND',
    icon: ShoppingBag,
    desc: 'Procurement auto-calculates raw material requirements based on confirmed sales orders and active production schedules. Overstocking cut by 35% within four months.',
  },
  {
    title: 'SALES — REAL-TIME INVENTORY VISIBILITY',
    icon: Database,
    desc: 'Sales reps see live stock levels, batch statuses, and production line availability directly from their phones. Delivery dates promised to clients are accurate.',
  },
  {
    title: 'PRODUCTION — VISUAL BATCH PLANNING',
    icon: Factory,
    desc: 'Production manager plans runs on a visual drag-and-drop schedule that automatically validates raw material availability before a batch is scheduled. Zero mid-batch halts.',
  },
  {
    title: 'EXPORTS — 25-MINUTE DOCUMENTATION',
    icon: FileText,
    desc: 'Export document compiler auto-generates localized invoices, packing lists, and chemical certificates from batch data. Processing time cut from 4 hours to 25 minutes.',
  },
]

const specificallyBuilt = [
  {
    title: 'Unified Inventory Module',
    desc: 'Real-time stock tracking with lot and batch tracing across all warehouses and raw material stores.',
  },
  {
    title: 'Formulation-Level Production Manager',
    desc: 'Chemical recipe builder that scales raw material quantities based on batch size and validates stock availability.',
  },
  {
    title: 'Automated Purchase Trigger System',
    desc: 'Auto-calculates raw material requirements from confirmed sales orders and triggers purchase order drafts.',
  },
  {
    title: 'Visual Production Line Scheduler',
    desc: 'Drag-and-drop planning board matching raw material availability with machine line capacity.',
  },
  {
    title: 'Export Documentation Compiler',
    desc: 'One-click generation of shipping documents, packing lists, and chemical regulatory certificates from batch data.',
  },
  {
    title: 'Multi-Department Access Matrix',
    desc: 'Role-based dashboards giving Purchase, Sales, Production, and Exports the exact views they need — no clutter.',
  },
  {
    title: 'Deep Custom Odoo Integration',
    desc: "Built on Odoo's core framework but heavily customized for chemical manufacturing workflows, compliance, and lot tracking.",
  },
]

const timelineSteps = [
  {
    time: 'Weeks 1–3',
    title: 'Process Audit',
    desc: 'Sat with all four departments. Mapped chemical formula templates, compliance checklists, and every manual workaround currently in use. Identified the highest-friction handoffs.',
  },
  {
    time: 'Weeks 4–8',
    title: 'Core Database & Architecture',
    desc: 'Built centralized Odoo database with lot tracing models, formulation tables, and raw material recipe structures. Established the data models that connected Purchase to Sales.',
  },
  {
    time: 'Weeks 9–14',
    title: 'Module Build & Integration',
    desc: 'Built feature by feature — inventory first, then procurement triggers, then production planner, then export compiler. Tested each module with actual historical batch data.',
  },
  {
    time: 'Weeks 15–20',
    title: 'Team Training & Parallel Run',
    desc: 'Ran the new ERP alongside the old manual process for four weeks. Trained each team on their specific dashboard. Refined workflows based on daily operator feedback.',
  },
  {
    time: 'Weeks 21–24',
    title: 'Full Go-Live',
    desc: 'Cut over completely to the new custom ERP. 100% team adoption from day one. Old email threads and WhatsApp groups for operational updates retired.',
  },
]

const dayToDayChanges = [
  {
    stat: 'Raw material overstock cut by 35%',
    desc: "Purchase buys what's needed, not what they guess is needed.",
  },
  {
    stat: 'Export doc processing: 4 hrs → 25 mins',
    desc: 'One-click generation from batch data.',
  },
  {
    stat: 'Zero mid-batch production halts',
    desc: 'Raw material availability validated before a batch starts.',
  },
  {
    stat: 'Sales order delivery accuracy: 98%+',
    desc: 'Dates committed based on live stock and line capacity.',
  },
  {
    stat: 'Traceability of every batch',
    desc: 'Full lot tracing from raw material purchase to customer delivery.',
  },
  {
    stat: '100% team adoption from day one',
    desc: 'System built for how they work, so nobody needed to cheat.',
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
                For a medium-sized chemical manufacturer in Gujarat, operational growth brought operational pain. Four departments were operating as four separate islands. We listened first, then built a custom Odoo ERP that connected Purchase, Sales, Production, and Exports into one real-time workflow.
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

        {/* Section 1: The Challenge */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

              {/* Left Column: Description */}
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
                    For a medium-sized chemical manufacturer in Gujarat, operational growth brought operational pain. Production volume had tripled over five years, but the systems used to manage that production hadn’t changed since the company had five employees.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Four departments were operating as four separate islands. <strong className="text-gray-900 font-semibold">Everything was being tracked, but nothing was being shared.</strong> Purchase bought raw materials without knowing what Sales had committed to. Production ran batches without knowing whether raw materials were actually in stock. Sales promised delivery dates based on guesswork. And Exports spent days manually compiling compliance documents every time a shipment was ready.
                  </p>
                </motion.div>

                {/* Operations Director Quote */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-6 border-l-4 border-[#f1592a] bg-[#f1592a]/5 py-5 pr-4 rounded-r-2xl"
                >
                  <blockquote className="text-gray-800 italic text-sm md:text-base font-semibold leading-relaxed">
                    "We had one email thread for the whole company. Purchase, Sales, Production, Exports — everyone was working out of the same chain. If one person missed an update, something broke."
                  </blockquote>
                  <p className="text-xs font-bold text-[#f1592a] uppercase mt-3 tracking-wider">— Director of Operations, Chemical Manufacturer</p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                >
                  The company wasn't failing because their products were bad or their market was shrinking. They were failing because operating four departments without integration meant every growth milestone created four times as much operational chaos.
                </motion.p>

                {/* Section 2: How Each Department Was Working — And Suffering */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 pt-4"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    How Each Department Was Working — And Suffering
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {departmentSuffering.map((item, i) => (
                      <div
                        key={i}
                        className={`p-6 border rounded-3xl flex flex-col justify-start ${item.color}`}
                      >
                        <span className="font-bold text-xs tracking-wider uppercase mb-2 block">{item.dept}</span>
                        <p className="text-xs md:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-2">
                    The problem wasn't that the teams were incompetent — they were working extremely hard. But because their tools didn't talk to each other, every team's effort was undermined by every other team's blind spots.
                  </p>
                </motion.div>

                {/* WHAT WE FOUND Callout Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 border border-amber-200/80 rounded-3xl bg-amber-50/40"
                >
                  <span className="text-xs font-bold text-[#f1592a] uppercase tracking-wider block mb-3">
                    WHAT WE FOUND
                  </span>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Instead of buying a standard ERP and trying to force their process into it, what they needed was a system designed around how a chemical manufacturer actually works — lot numbers, batch tracking, chemical formulations, and export documentation.
                  </p>
                </motion.div>

                {/* Section 3: Why Two Previous Systems Had Failed Them */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 pt-4"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Why Two Previous Systems Had Failed Them
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    This wasn't the company's first attempt at solving this. They had already bought two off-the-shelf ERP software packages over the previous three years. Both were abandoned within six months of implementation.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    The reason was simple: off-the-shelf software is built for retail or standard assembly manufacturing. <strong className="text-gray-900 font-semibold">Chemical manufacturing has specific requirements that retail software doesn't understand.</strong> Formulation scaling, batch/lot tracking, chemical compliance certificates, multi-stage production runs — none of this fitted into the standard modules without massive, expensive customization that still didn't work right.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Every time the software failed to handle a chemical-specific task, the team went back to Excel and WhatsApp. Within months, the ERP was an empty shell that nobody used, and the old chaos was back.
                  </p>
                </motion.div>

                {/* THE LESSON THEY LEARNED Callout Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 border border-[#f1592a]/20 rounded-3xl bg-[#f1592a]/5"
                >
                  <span className="text-xs font-bold text-[#f1592a] uppercase tracking-wider block mb-3">
                    THE LESSON THEY LEARNED
                  </span>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    An ERP is only useful if the team actually uses it. If using the system is harder than using WhatsApp, the team will go back to WhatsApp. The solution had to be built for how they work, not how a software vendor thinks they should work.
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
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-[#f1592a]">Need a Custom ERP System?</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Our team develops specialized ERP architectures, manufacturing planners, custom inventory tracking, and document builders.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:shadow-lg hover:shadow-[#f1592a]/30 transition-all"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: The Result: One System. Four Aligned Departments. */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                The Solution
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                The Result: One System. Four Aligned Departments.
              </h2>
              <p className="text-md md:text-lg text-gray-600 text-center leading-relaxed">
                We built a custom ERP using Odoo as a base — customized from the ground up for chemical manufacturing. The system connected all four departments into one real-time workflow. <strong className="text-gray-900 font-semibold">Every department now sees what every other department is doing, in real time.</strong>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {resultDepartments.map((dept, index) => (
                <motion.div
                  key={index}
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
                        <dept.icon className="text-[#f1592a] w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold mb-3 text-gray-900 leading-snug">{dept.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{dept.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: What We Specifically Built */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Platform Architecture
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                What We Specifically Built
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {specificallyBuilt.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="p-5 md:p-6 bg-gray-50/60 border border-gray-100 hover:border-[#f1592a]/20 rounded-2xl flex items-start space-x-4 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-[#f1592a]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="text-[#f1592a] w-4 h-4" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: How It Unfolded */}
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
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Key Metrics & What Actually Changed Day to Day */}
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
                  Key Metrics
                </h2>
              </motion.div>

              {/* 3 Metric Cards */}
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
                    <p className="text-4xl md:text-5xl font-extrabold text-[#f1592a] mb-4">{stat.value}</p>
                    <p className="text-xs md:text-sm font-medium text-gray-600 leading-relaxed">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Subheading: What Actually Changed Day to Day */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 pt-4"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  What Actually Changed Day to Day
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dayToDayChanges.map((change, i) => (
                    <div
                      key={i}
                      className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50 flex flex-col justify-start"
                    >
                      <h4 className="font-bold text-gray-900 text-sm mb-2">{change.stat}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{change.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Managing Director Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-4 border-[#f1592a] bg-[#f1592a]/5 py-6 pr-6 rounded-r-3xl"
              >
                <blockquote className="text-gray-800 italic text-sm md:text-base font-semibold leading-relaxed">
                  "For the first time in five years, I open my laptop in the morning and see the whole business — Purchase, Sales, Production, Exports. Live, accurate, connected. No phone calls to figure out where a batch is. Everything is right there."
                </blockquote>
                <p className="text-xs font-bold text-[#f1592a] uppercase mt-3 tracking-wider">— Managing Director, Chemical Manufacturer</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 8: What This Means for Your Business */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6 text-center lg:text-left">
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
                  If your business has outgrown spreadsheet tracking but off-the-shelf software feels wrong for how you actually work, you don't need a bigger software vendor — you need a system built around your specific operational reality. A custom ERP doesn't force your business into a software vendor's template. It digitises your actual workflow.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  The key isn't building a system with a thousand features. The key is building a system that your team actually uses — because it makes their daily work simpler, not harder. That's the difference between an ERP project that succeeds and one that gets abandoned.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 9: CTA Jumbobox */}
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
                  Is Your Business Running in Silos?<br></br>
                  Let's Bring It Together.
                </h2>

                <p className="text-md md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                  No pitch, no pressure. Just an honest conversation about how your departments work today — and what it would look like if they were all finally aligned.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight size={16} />
                  </Link>

                </div>


              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </LayoutWrapper>
  )
}
