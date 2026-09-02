'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { AnimatedH1 } from '@/components/animated-h1'
import { motion } from 'motion/react'
import { useEnquiryModal } from '@/context/enquiry-modal-context'
import {
  Shield,
  Zap,
  Bell,
  Scan,
  Clock,
  CheckCircle,
  Smartphone,
  Calendar,
  FileText,
  UserCog,
  ArrowRight,
  Sparkles,
  Cpu,
  TrendingUp,
  Database,
  Building,
  Key,
  ListFilter,
  Layers,
  MapPin,
  Check,
  Building2,
  Factory,
  Home,
  FileSpreadsheet,
  ClipboardCheck,
  Camera,
  WifiOff,
  RefreshCw,
  School,
  Bot,
  BarChart3,
  Search,
  FolderOpen,
  Coins,
  ClipboardList,
  CheckSquare,
  Flag,
} from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    metric: '80%',
    label: 'Faster claims cycle vs paper',
  },
  {
    metric: '90%',
    label: 'Contactless & digital flow',
  },
  {
    metric: '99.9%',
    label: 'Billing & estimation accuracy',
  },
]

const processSteps = [
  {
    icon: ClipboardList,
    title: 'Claim Registration',
    description: 'Web or email',
  },
  {
    icon: Search,
    title: 'Survey & Investigation',
    description: 'JIR · ILA · LOR · FSR',
  },
  {
    icon: FolderOpen,
    title: 'Documents & OCR',
    description: 'Centralised + AI-assisted',
  },
  {
    icon: CheckSquare,
    title: 'Approval',
    description: 'Maker-Checker · RBAC',
  },
  {
    icon: Coins,
    title: 'Invoice & Billing',
    description: 'Processing · Dispatch',
  },
  {
    icon: RefreshCw,
    title: 'Reconciliation',
    description: 'Finance · Reporting',
  },
  {
    icon: Flag,
    title: 'Closure',
    description: 'Auditable · Traceable',
  },
]

const coreFeatures = [
  {
    icon: ClipboardCheck,
    title: 'Centralized Claims Management',
    description: 'Manage the full claim lifecycle in one system - registration, survey processing, documents, approvals, invoicing, reconciliation and closure. Every claim stage tracked, every action logged.',
    iconBg: 'bg-[#f1592a]/10 border-[#f1592a]/20',
    iconColor: 'text-[#f1592a]',
  },
  {
    icon: Search,
    title: 'Survey Workflow Management',
    description: 'Structure survey operations around JIR, ILA, LOR, FSR and surveyor activities with controlled workflows and fully traceable records. Every survey stage documented and accountable.',
    iconBg: 'bg-[#ff7a45]/10 border-[#ff7a45]/20',
    iconColor: 'text-[#ff7a45]',
  },
  {
    icon: FolderOpen,
    title: 'Document & OCR Processing',
    description: 'Centralize all claim documents with OCR and Azure OpenAI-assisted processing to reduce repetitive data entry. Documents stored in Amazon S3 with full audit access.',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    iconColor: 'text-amber-500',
  },
  {
    icon: RefreshCw,
    title: 'Workflow & Approval Controls',
    description: 'Configurable workflow engine with Role-Based Access Control, Maker-Checker approval chains, automated reminders, and escalation notifications. Every decision traceable.',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    iconColor: 'text-indigo-500',
  },
  {
    icon: Coins,
    title: 'Claims Finance & Reconciliation',
    description: 'Invoice processing, dispatch management, reconciliation, and management reporting - all from the same claims platform. No finance data leaving the system to a separate tool.',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Building2,
    title: 'Enterprise Access & Security',
    description: 'Microsoft Azure AD SSO, JWT authentication, Microsoft Outlook / Graph integration, comprehensive audit logging, and background job schedulers built for enterprise-scale operations.',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-500',
  },
]

const aiBots = [
  {
    icon: Bot,
    title: 'Claim Creation Bot',
    description: 'Creates claims through guided conversation or from incoming emails - extracting policy data with OCR, building provisional claims, and following up on missing fields automatically.',
    bullets: [
      'Conversational claim creation on web',
      'Email parsing & provisional claim generation',
      'OCR-assisted policy data extraction',
      'Missing-field follow-up with the submitter',
      'Claim completion & handoff to workflow',
    ],
    iconColor: 'text-[#f1592a]',
    iconBg: 'bg-[#f1592a]/10 border-[#f1592a]/20',
  },
  {
    icon: BarChart3,
    title: 'Workflow AI Bot',
    description: 'Continuously monitors active claims, evaluates stage progress against historical patterns, and surfaces context-aware next steps, risk alerts, and workflow deviation flags.',
    bullets: [
      'Live monitoring of all active claims',
      'Comparison against historical claim patterns',
      'Context-aware next-step suggestions',
      'Risk alerts for stalled or at-risk claims',
      'Workflow deviation detection and guidance',
    ],
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Bell,
    title: 'Notification AI Bot',
    description: 'Proactively manages task deadlines and SLA commitments - prioritizing reminders, escalating unresolved actions, and choosing channels based on urgency and acknowledgement status.',
    bullets: [
      'Anticipates task and SLA risk before breach',
      'Prioritized reminder sequencing',
      'Multi-channel escalation by urgency',
      'Acknowledgement-aware and follow-up logic',
      'SLA breach detection and alerts',
    ],
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
  },
]

const ruleFeatures = [
  {
    icon: Zap,
    title: 'No-Code Business Rule Engine',
    bullets: [
      'IF-THEN rule builder - no developer needed',
      'Automatic stage movement and task creation',
      'Provisional claim timer and auto-lock',
      'LOR auto-status engine',
      'Invoice draft automation on FSR approval',
    ],
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50 border-amber-100',
  },
  {
    icon: Clock,
    title: 'SLA Engine & Escalation Control',
    bullets: [
      'SLA timers per claim type and stage',
      'Breach detection before it happens',
      'Retail claim 30-day SLA and IRD escalation',
      'Automatic escalation triggers by role',
      'Survey stage reopen and subsequent visit management',
    ],
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50 border-red-100',
  },
  {
    icon: FileSpreadsheet,
    title: 'Analytics & Finance Intelligence',
    bullets: [
      'Advanced MIS and operational reporting',
      'Customer analytics, CRM and geographic heatmaps',
      'Surveyor performance management and scoring',
      'Reconciliation and profitability dashboard',
      'TDS calculation and GIPSA rate engine',
    ],
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: Building2,
    title: 'Enterprise Configuration',
    bullets: [
      'Multi-branch configuration and claim transfer',
      'Activity log and comprehensive audit trail',
      'Bulk document approval and rejection',
      'Microsoft SSO enforcement',
      'Invoice statistical dashboard',
    ],
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50 border-blue-100',
  },
]

const integrations = [
  {
    name: 'React',
    subName: 'Web Platform',
    logo: '/assets/techLogo/react-icon.svg',
  },
  {
    name: 'ASP.NET Core',
    subName: 'API Layer',
    logo: '/assets/techLogo/microsoft_azure_logo_icon.svg',
  },
  {
    name: 'SQL Server',
    subName: 'Core Database',
    logo: '/assets/techLogo/icon_sql.png',
  },
  {
    name: 'React Native',
    subName: 'Surveyor App',
    logo: '/assets/techLogo/react-native-icon.svg',
  },
  {
    name: 'Azure AD',
    subName: 'Auth & SSO',
    logo: '/assets/techLogo/microsoft_azure_logo_icon.svg',
  },
  {
    name: 'Azure OpenAI',
    subName: 'AI & LLM',
    logo: '/assets/techLogo/openai-logo-icon.svg',
  },
  {
    name: 'Amazon S3',
    subName: 'Document Storage',
    logo: '/assets/techLogo/AWS.png',
  },
  {
    name: 'Microsoft Graph',
    subName: 'Email Integration',
    logo: '/assets/techLogo/Microsoft Graph.svg',
  },
  {
    name: 'Google Maps',
    subName: 'GPS & Navigation',
    logo: '/assets/techLogo/Google_Maps.png',
  },
  {
    name: 'OCR Engine',
    subName: 'Document Extraction',
    logo: '/assets/techLogo/ocr_icon.svg',
  },
]

const purposeBuiltList = [
  {
    icon: TrendingUp,
    title: 'Insurance Survey Organizations',
    description: 'Independent survey firms and loss assessment organizations that need a structured, auditable platform for end-to-end claim and survey operations.',
    iconColor: 'text-[#f1592a]',
    iconBg: 'bg-[#f1592a]/10 border-[#f1592a]/20',
  },
  {
    icon: FileText,
    title: 'Multi-Branch Survey Operations',
    description: 'Organizations with multiple offices and surveyors managing claims across branches - with centralized oversight, branch-level access controls, and consolidated reporting.',
    iconColor: 'text-[#ff7a45]',
    iconBg: 'bg-[#ff7a45]/10 border-[#ff7a45]/20',
  },
  {
    icon: Shield,
    title: 'Claims Operations Teams',
    description: 'Claims teams that need structured survey workflows, document management, approval controls, and billing - all connected in one system with proper audit trails..',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
  },
]

const mobileAppFeatures = [
  {
    icon: Calendar,
    title: 'Scheduling & Assignment',
    description: 'Accept, decline, or propose alternative times for assignments. Dashboard, workload view, schedule, and calendar in one screen.',
    iconBg: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
  {
    icon: MapPin,
    title: 'GPS Check-In & Navigation',
    description: 'GPS-verified check-in, visit timer, navigation, route planning, and geo-fencing for precise field documentation.',
    iconBg: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
  },
  {
    icon: Camera,
    title: 'Evidence Capture & Annotation',
    description: 'Geo-tagged photo evidence with annotation. Document scan and upload directly from the field - no laptop needed.',
    iconBg: 'bg-[#f1592a]/10 text-[#f1592a] border-[#f1592a]/20',
  },
  {
    icon: FileText,
    title: 'Dynamic Field Forms & JIR/MOM',
    description: 'Line-of-business specific field forms. JIR and MOM completed on mobile. All data synced back to the central platform.',
    iconBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
  {
    icon: WifiOff,
    title: 'Offline-First Operation',
    description: 'Works without connectivity. All data captured offline syncs automatically when signal is restored. No lost field work.',
    iconBg: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  },
]

const previewTasks = [
  {
    icon: FileText,
    id: 'Claim #CLM-2401',
    desc: 'Fire & Allied - Commercial',
    status: 'Accepted',
    statusClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  },
  {
    icon: MapPin,
    id: 'GPS Check-In',
    desc: 'Site verified - 09:14 AM',
    status: 'Done',
    statusClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  },
  {
    icon: Camera,
    id: 'Evidence Capture',
    desc: '14 photos - 3 annotated',
    status: 'In Progress',
    statusClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  },
  {
    icon: FileText,
    id: 'JIR Form',
    desc: 'LOB fields - 7 of 12 complete',
    status: 'Pending',
    statusClass: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  },
  {
    icon: RefreshCw,
    id: 'Sync to Platform',
    desc: 'Auto-sync on connection',
    status: 'Offline',
    statusClass: 'bg-slate-500/10 text-slate-400 border border-slate-500/20',
  },
]

export default function ClaimGeniePage() {
  const { openModal } = useEnquiryModal()
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/50 to-gray-100">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-full blur-3xl"
            />
          </div>
          <div className="container text-center lg:text-left mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-8"
                >
                  <Sparkles className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                  <span className="text-xs md:text-sm font-semibold text-gray-700">
                    Claim Genie - Insurtech Product
                  </span>
                </motion.div>
                <AnimatedH1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900"
                >
                  Smarter Claims Operations.{' '}
                  <span className="block bg-gradient-to-r from-[#f1592a] via-[#ff7a45] to-[#f1592a] bg-clip-text text-transparent">
                    From Assignment to Closure.
                  </span>
                </AnimatedH1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
                >
                  Claims processing doesn't have to be slow and manual. Claim Genie simplifies the journey from assignment to settlement, reducing turnaround time by 60%.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center sm:items-start sm:flex-row gap-4 mb-8"
                >
                  <div onClick={() => openModal('Claim Genie')} className="w-[80%] sm:w-auto cursor-pointer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/40 transition-all flex items-center justify-center space-x-2"
                    >
                      <span className="text-sm md:text-base font-semibold">Schedule a Demo</span>
                      <Zap className="group-hover:scale-110 transition-transform w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                    </motion.button>
                  </div>
                  <Link
                    href="#core-capabilities"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('core-capabilities')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-[80%] sm:w-auto"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full group px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span className="text-sm md:text-base font-semibold">Explore Features</span>
                      <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5 text-gray-800" strokeWidth={1.5} />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-3 gap-4 sm:gap-6 w-full pt-8 border-t border-gray-200"
                >
                  {benefits.map((benefit, index) => (
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left" key={index}>
                      <span className="font-bold text-2xl md:text-3xl text-[#f1592a] leading-none">{benefit.metric}</span>
                      <span className="text-gray-600 text-[10px] sm:text-xs md:text-sm mt-2 font-medium">{benefit.label}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Mobile Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mx-auto flex justify-center lg:justify-end"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/20 to-[#ff7a45]/20 blur-3xl scale-75" />
                <div className="relative z-10 w-[320px] h-[640px] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20" />
                  <div className="w-full h-full bg-white overflow-hidden flex flex-col">
                    <div className="h-12 bg-white flex items-center justify-between px-8 pt-2 shrink-0">
                      <span className="text-xs font-semibold text-gray-900">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-3 border border-gray-900 rounded-sm" />
                      </div>
                    </div>
                    {/* App Content */}
                    <div className="px-5 pt-2 pb-6 flex-1 bg-gradient-to-br from-slate-50 to-white overflow-y-auto">
                      <div className="text-center mb-6">
                        <div className="relative w-14 h-14 mx-auto mb-3">
                          <div className="w-full h-full bg-[#f1592a] rounded-2xl flex items-center justify-center shadow-lg">
                            <Sparkles className="text-white" size={28} strokeWidth={1.5} />
                          </div>
                        </div>
                        <h2 className="text-lg font-bold text-gray-900">Claim Genie Mobile</h2>
                        <p className="text-xs text-gray-500">Field Surveyor Dashboard</p>
                      </div>

                      {/* Active Task */}
                      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] uppercase font-bold text-[#f1592a] bg-[#f1592a]/5 px-2 py-0.5 rounded-full">New Job</span>
                          <span className="text-xs text-gray-400">1.2 km away</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-1">Vehicle Damage Survey</h3>
                        <p className="text-xs text-gray-600 mb-3">Toyota Corolla • GJ-05-AB-1234</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <MapPin size={14} className="text-[#f1592a]" />
                          <span className="truncate">Adajan Area, Surat</span>
                        </div>
                      </div>

                      {/* Upload preview */}
                      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                        <h4 className="text-xs font-bold text-gray-900 mb-3">Damage Photo Estimation</h4>
                        <div className="aspect-video bg-gray-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-dashed border-gray-200">
                          {/* Simulated damage photo */}
                          <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center p-3 text-center">
                            <Shield className="text-[#ff7a45] mb-1" size={20} />
                            <p className="text-[10px] text-gray-300">Front bumper damage analysis</p>
                            <span className="text-xs font-extrabold text-[#ff7a45] mt-1">Estimate: ₹12,400</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="z-10 absolute top-20 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#f1592a] rounded-lg flex items-center justify-center shadow-md shadow-[#f1592a]/30">
                      <CheckCircle className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Survey Uploaded</p>
                      <p className="text-xs text-gray-600">Geo-verified</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Steps (One Platform. Every Stage.) */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Claims Lifecycle
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                One Platform. Every Stage.
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-center">
                ClaimGenie manages the complete claim journey - from first registration to final closure - without information leaving the system.
              </p>
            </motion.div>

            {/* Horizontal Timeline Steps */}
            <div className="relative max-w-6xl mx-auto mt-12">
              {/* Line */}
              <div className="hidden lg:block absolute top-[28px] left-[7%] right-[7%] h-[2px] bg-gradient-to-r from-[#f1592a]/20 via-[#ff7a45]/30 to-[#f1592a]/20 pointer-events-none z-0" />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-14 h-14 rounded-full bg-white border border-[#f1592a]/10 flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 group-hover:bg-[#f1592a] group-hover:border-[#f1592a] transition-all duration-300 shadow-md">
                      <step.icon className="text-[#f1592a] group-hover:text-white w-6 h-6 transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-[#f1592a] font-bold uppercase mb-1">Step {index + 1}</span>
                    <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[150px] lg:max-w-none">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Features section */}
        <section id="core-capabilities" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Core Platform Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                The Enterprise Claims<br></br>Operations Foundation
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
                Everything your claims and survey operation needs to run efficiently - available in the current ClaimGenie platform today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="relative h-full bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-left">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative w-12 h-12 group-hover:scale-110 transition-transform shrink-0">
                        <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-all border border-gray-100 group-hover:border-[#f1592a]/10">
                          <feature.icon className="text-gray-700 w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Bots section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Smart Automation Claim
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-center text-white">
                Three AI Bots.<br></br>Embedded Inside ClaimGenie.
              </h2>
              <p className="text-md md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed text-center">
                Not bolt-on AI. Three purpose-built bots embedded directly into the ClaimGenie workflow - each designed to remove a specific category of manual effort from claims operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {aiBots.map((bot, index) => (
                <motion.div
                  key={bot.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 hover:border-[#f1592a]/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-start group"
                >
                  <div className="relative w-12 h-12 transition-transform shrink-0 mb-6 group-hover:scale-110">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center border border-white/10 transition-all group-hover:bg-slate-800 group-hover:border-[#f1592a]/20">
                      <bot.icon className="text-white w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-slate-950" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center flex-wrap gap-2">
                    <span>{bot.title}</span>
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 mt-2">{bot.description}</p>

                  <ul className="space-y-2 mt-auto border-t border-white/10 pt-4">
                    {bot.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-xs md:text-sm text-slate-400 leading-relaxed">
                        <span className={`${bot.iconColor} mr-2 shrink-0 select-none`}>→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Field App section */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Surveyor Mobile App
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                The Full Survey Operation.<br></br>In Your Field Team's Pocket.
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
                An offline-capable Android and iOS app that takes assignment management, evidence capture, field forms, GPS check-in, and claim communication to the surveyor - wherever they are.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 space-y-6"
              >
                {mobileAppFeatures.map((feat, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="relative w-10 h-10 transition-transform shrink-0 group-hover:scale-110">
                      <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 transition-all group-hover:bg-white group-hover:border-[#f1592a]/10">
                        <feat.icon className="text-gray-700 w-4.5 h-4.5" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">{feat.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Simulated app preview on the right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <div className="relative bg-gradient-to-br from-[#f1592a]/5 to-[#ff7a45]/5 rounded-3xl p-6 md:p-8 border border-gray-100 w-full max-w-[480px]">
                  <div className="bg-slate-950 rounded-2xl shadow-xl p-5 border border-white/5 text-white">
                    <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-4">
                      <span className="font-bold text-xs tracking-wide text-slate-200">ClaimGenie Field App</span>
                      <div className="flex items-center space-x-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full text-[9px] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping mr-1" />
                        <span>Live</span>
                      </div>
                    </div>

                    {/* List of active tasks */}
                    <div className="space-y-3">
                      {previewTasks.map((task, i) => (
                        <div key={i} className="flex items-center justify-between p-3.5 bg-white/5 border border-white/5 rounded-2xl">
                          <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                              <task.icon size={16} strokeWidth={1.5} />
                            </div>
                            <div>
                              <h5 className="font-bold text-white text-xs sm:text-sm">{task.id}</h5>
                              <p className="text-[10px] text-slate-400 mt-0.5">{task.desc}</p>
                            </div>
                          </div>
                          <div className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold ${task.statusClass}`}>
                            {task.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Automation Rules section */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Automation & Control
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                Every Workflow Rule.<br></br>Every SLA. Automated.
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-center">
                No-code business rules, SLA timers, and automatic stage movement - so your claims operation runs consistently without manual chasing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {ruleFeatures.map((rule, idx) => (
                <motion.div
                  key={rule.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 hover:border-[#f1592a]/20 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="relative w-10 h-10 transition-transform shrink-0 group-hover:scale-110">
                      <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 transition-all group-hover:bg-white group-hover:border-[#f1592a]/10">
                        <rule.icon className="text-gray-700 w-4.5 h-4.5" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#f1592a] rounded-full border border-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 flex items-center flex-wrap gap-2 leading-snug">
                      <span>{rule.title}</span>
                    </h3>
                  </div>
                  <ul className="space-y-2.5 flex-1 mt-2">
                    {rule.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-xs md:text-sm text-gray-500 leading-relaxed">
                        <span className="text-gray-300 mr-2 shrink-0 select-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Stack section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Technology & Architecture
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-center text-white">
                Built on a Proven Enterprise Stack
              </h2>
              <p className="text-md md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-center">
                React, .NET Core, SQL Server, React Native, Azure AD, Azure OpenAI, and Amazon S3 - chosen for reliability, security, and scale.
              </p>
            </motion.div>

            {/* Integration Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {integrations.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, borderColor: 'rgba(241, 89, 42, 0.4)' }}
                  className="bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-5 h-36 transition-all duration-300 text-center relative group"
                >
                  <div className="h-[42px] w-[42px] relative flex items-center justify-center mb-3">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-[42px] w-[42px] object-contain filter group-hover:brightness-115 transition-all"
                    />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white">{item.name}</h3>
                  <span className="text-[10px] sm:text-xs text-slate-400 mt-1 block">{item.subName}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
                Who It's Built For
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                Purpose-Built for Insurance Survey Operations
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-center">
                ClaimGenie is designed specifically for claims survey and loss assessment organizations - not generic insurance administration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {purposeBuiltList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col items-center text-center h-full justify-start animate-fade-in group"
                >
                  <div className="relative w-12 h-12 transition-transform shrink-0 mb-6 group-hover:scale-110">
                    <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 transition-all group-hover:bg-white group-hover:border-[#f1592a]/10">
                      <item.icon className="text-gray-700 w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
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
              className="max-w-6xl mx-auto text-center"
            >
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/40"
                >
                  <Sparkles className="text-white w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
                  Ready to See Claim Genie In Action?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
                  Book a 30-minute demo. We'll walk you through the full platform, show you how it works for your claims team, and answer every question you have - no commitment required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div onClick={() => openModal('Claim Genie')} className="w-full sm:w-auto flex justify-center cursor-pointer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all font-semibold flex items-center justify-center space-x-2"
                    >
                      <span className="text-sm md:text-md">Schedule a Demo</span>
                    </motion.button>
                  </div>
                  <Link href="/contact" className="w-full sm:w-auto flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-[#f1592a] transition-all font-semibold flex items-center justify-center space-x-2"
                    >
                      <span className="text-sm md:text-md">Contact Sales</span>
                    </motion.button>
                  </Link>
                </div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="mt-6 md:mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-white/80"
                >

                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">30-minute demo, No commitment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">Phase 1 available now</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">Phase 2 in active development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">Built by Key Concepts in Surat</span>
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
