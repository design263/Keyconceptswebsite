import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { 
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  UserCheck,
  Shield,
  BarChart3,
  Bell,
  Clock,
  MapPin,
  Settings,
  FileCheck,
  Zap,
  TrendingUp,
  Eye,
  MessageSquare,
  ChevronDown,
  Database,
  GitBranch,
  Target,
  Sparkles,
  Building2,
  UserPlus
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";

// Animated Counter Component
function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2,
  decimals = 0
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 30, 
    stiffness: 100,
    duration: duration * 1000 
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.floor(latest);
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

// Hero Stats Data
const heroStats = [
  { value: 10000, suffix: "+", label: "Active Members", prefix: "", icon: Users, decimals: 0 },
  { value: 500, suffix: "+", label: "Events Managed", prefix: "", icon: Calendar, decimals: 0 },
  { value: 95, suffix: "%", label: "Approval Speed", prefix: "", icon: CheckCircle, decimals: 0 },
  { value: 24, suffix: "/7", label: "Platform Access", prefix: "", icon: Eye, decimals: 0 }
];

// Core Features with Tab Content
const coreFeatures = [
  {
    id: "members",
    icon: Users,
    title: "Member Management",
    description: "Profiles, roles, and status tracking",
    longDescription: "Streamline your community operations with comprehensive member management. Create detailed member profiles, assign roles and permissions, track membership status, and maintain organized records—all in one centralized platform.",
    features: [
      "Detailed member profiles with custom fields",
      "Role-based access control (Admin, Member, Guest)",
      "Membership status tracking (Active, Pending, Expired)",
      "Bulk import/export capabilities",
      "Advanced search and filtering",
      "Member activity tracking & analytics"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "events",
    icon: Calendar,
    title: "Event Management",
    description: "Create events, track RSVPs, monitor attendance",
    longDescription: "Organize community events effortlessly. Create and publish events, manage RSVPs, send automated reminders, track attendance in real-time, and gather post-event feedback—all within a unified event management system.",
    features: [
      "Event creation with rich details & media",
      "RSVP management with waitlists",
      "Automated email & SMS reminders",
      "Real-time attendance tracking",
      "Recurring event scheduling",
      "Post-event surveys & feedback"
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "approvals",
    icon: FileCheck,
    title: "Approval Workflows",
    description: "Multi-level approvals with real-time status",
    longDescription: "Automate approval processes with configurable multi-level workflows. Define approval chains, set delegation rules, receive real-time notifications, and maintain full audit trails for complete transparency and accountability.",
    features: [
      "Customizable multi-level approval chains",
      "Automated routing & delegation",
      "Real-time status notifications",
      "Approval history & audit trails",
      "Conditional approval rules",
      "Mobile approval capabilities"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

// Key Benefits
const keyBenefits = [
  {
    icon: Database,
    title: "Centralized Control",
    description: "Manage everything from a single, unified dashboard with complete visibility across all community operations."
  },
  {
    icon: Zap,
    title: "Reduced Manual Work",
    description: "Automate repetitive tasks, workflows, and notifications to save time and eliminate human errors."
  },
  {
    icon: Eye,
    title: "Transparent Processes",
    description: "Full visibility into member activities, event participation, and approval statuses with detailed audit logs."
  },
  {
    icon: TrendingUp,
    title: "Scalable for Growth",
    description: "Built to scale seamlessly as your community grows—from hundreds to thousands of members without performance loss."
  }
];

// Additional Capabilities
const additionalCapabilities = [
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Multi-channel notifications (email, SMS, in-app) for events, approvals, and announcements."
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Internal messaging, discussion forums, and announcement boards for seamless community interaction."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive insights into member engagement, event participation, and community health metrics."
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Enterprise-grade security with role-based permissions, data encryption, and GDPR compliance."
  },
  {
    icon: Settings,
    title: "Custom Branding",
    description: "White-label solution with custom branding, colors, logos, and domain mapping."
  },
  {
    icon: GitBranch,
    title: "Integration Ready",
    description: "RESTful APIs and webhooks for seamless integration with payment gateways, CRMs, and third-party tools."
  }
];

// Use Cases
const useCases = [
  {
    type: "Social Communities (Samaj)",
    icon: Users,
    title: "Connect & Celebrate Together",
    description: "Build stronger bonds within your community with comprehensive member management, cultural event coordination, and networking tools designed specifically for Samaj organizations.",
    highlightedFeature: {
      icon: Users,
      title: "Member Directory",
      description: "Maintain detailed family networks with searchable member profiles and relationship mapping"
    },
    features: [
      "Member directory & family networks",
      "Cultural event management",
      "Matrimonial & business networking",
      "Community welfare programs",
      "Festival & celebration planning",
      "Donation & fundraising tracking"
    ],
    image: "https://images.unsplash.com/photo-1759738102510-ec524f666274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1haiUyMGNvbW11bml0eSUyMGdhdGhlcmluZyUyMGN1bHR1cmFsJTIwZXZlbnR8ZW58MXx8fHwxNzcxOTEzMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    contentAlign: "left"
  },
  {
    type: "Professional Associations",
    icon: Briefcase,
    title: "Professional Excellence & Growth",
    description: "Streamline your professional association operations with powerful tools for membership management, event coordination, certification tracking, and networking facilitation.",
    highlightedFeature: {
      icon: FileCheck,
      title: "Certification Management",
      description: "Track member certifications, CPD credits, and professional development milestones"
    },
    features: [
      "Member directory & networking",
      "Event registration & CPD tracking",
      "Certification management",
      "Annual conference planning",
      "Committee & board management",
      "Professional resource library"
    ],
    image: "https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGFzc29jaWF0aW9uJTIwY29uZmVyZW5jZSUyMG5ldHdvcmtpbmd8ZW58MXx8fHwxNzcxOTEzMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    contentAlign: "right"
  },
  {
    type: "Non-Profit Organizations",
    icon: Heart,
    title: "Amplify Your Impact",
    description: "Empower your non-profit with tools designed to maximize volunteer engagement, track donations, manage programs, and organize fundraising events—all while maintaining transparency.",
    highlightedFeature: {
      icon: Heart,
      title: "Volunteer Coordination",
      description: "Efficiently manage volunteer schedules, skills, and contributions with automated matching"
    },
    features: [
      "Volunteer coordination",
      "Donation tracking",
      "Program management",
      "Fundraising event planning",
      "Impact measurement & reporting",
      "Beneficiary management"
    ],
    image: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjB2b2x1bnRlZXIlMjBjaGFyaXR5JTIwb3JnYW5pemF0aW9uJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzcxOTEzMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    contentAlign: "left"
  }
];

export function YounitedCommunitiesPage() {
  const [activeTab, setActiveTab] = useState(coreFeatures[0].id);

  const activeFeature = coreFeatures.find(f => f.id === activeTab) || coreFeatures[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-8"
            >
              <Building2 className="text-[#f1592a]" size={18} />
              <span className="text-sm font-medium text-gray-700">
                Community Management Platform
              </span>
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Younited Communities
              </span>
              <br />
              Simplify. Engage. Scale.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            >
              A complete community and association management platform designed to streamline member 
              management, event coordination, and approval workflows—so you can focus on building 
              stronger, more engaged communities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
              >
                <span className="font-semibold">Request a Demo</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg"
              >
                <span className="font-semibold">Explore Features</span>
              </motion.a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-12 h-12 mx-auto mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                      <stat.icon className="text-[#364153]" size={24} strokeWidth={2} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#364153] mb-2">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      prefix={stat.prefix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Features - Tab Layout */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Core <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your community efficiently, from member profiles 
              to event coordination and approval workflows.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {coreFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 transition-all ${
                  activeTab === feature.id
                    ? "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] border-transparent text-white shadow-lg shadow-[#f1592a]/30"
                    : "bg-white border-gray-200 text-gray-700 hover:border-[#f1592a]/30 hover:bg-gray-50"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  activeTab === feature.id
                    ? "bg-white/20"
                    : "bg-gray-100"
                }`}>
                  <feature.icon 
                    className={activeTab === feature.id ? "text-white" : "text-gray-700"} 
                    size={20} 
                    strokeWidth={2} 
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold">{feature.title}</div>
                  <div className={`text-sm ${activeTab === feature.id ? "text-white/80" : "text-gray-500"}`}>
                    {feature.description}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <ImageWithFallback
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-6">
                <activeFeature.icon className="text-[#f1592a]" size={18} />
                <span className="text-sm font-semibold text-[#f1592a]">
                  {activeFeature.title}
                </span>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {activeFeature.longDescription}
              </p>

              <div className="space-y-4">
                {activeFeature.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#f1592a]/10 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="text-[#f1592a]" size={14} strokeWidth={2.5} />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Perfect For <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">Every Community</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're managing a Samaj, professional association, or non-profit organization—Younited Communities adapts to your unique needs.
            </p>
          </motion.div>

          {/* Use Case Items */}
          <div className="space-y-32">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.type}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  useCase.contentAlign === "right" ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content Side */}
                <div className={useCase.contentAlign === "right" ? "lg:col-start-2" : ""}>
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-6"
                  >
                    <useCase.icon className="text-[#f1592a]" size={16} />
                    <span className="text-sm font-medium text-[#f1592a] uppercase tracking-wide">
                      {useCase.type}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                  >
                    {useCase.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 leading-relaxed mb-8"
                  >
                    {useCase.description}
                  </motion.p>

                  {/* Highlighted Feature Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-2xl p-6 mb-8 border border-[#f1592a]/20"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-[#f1592a]/30 shadow-sm">
                        <useCase.highlightedFeature.icon className="text-[#f1592a]" size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          {useCase.highlightedFeature.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {useCase.highlightedFeature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Features List - Two Columns */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="grid sm:grid-cols-2 gap-x-6 gap-y-3"
                  >
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-[#f1592a] flex-shrink-0" size={16} strokeWidth={2} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Image Side */}
                <div className={useCase.contentAlign === "right" ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    {/* Decorative Blob Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/5 rounded-[3rem] blur-3xl scale-105 -z-10" />
                    
                    {/* Image Container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                      <ImageWithFallback
                        src={useCase.image}
                        alt={useCase.type}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">Younited Communities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built for modern communities that demand efficiency, transparency, and scalability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all"
              >
                <div className="relative w-14 h-14 mb-6">
                  <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#f1592a]/10 transition-all">
                    <benefit.icon className="text-gray-700 group-hover:text-[#f1592a] transition-colors" size={28} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Additional <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit designed to address every aspect of community management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all">
                    <capability.icon className="text-gray-700 group-hover:text-[#f1592a] transition-colors" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Sparkles className="text-[#f1592a]" size={18} />
              <span className="text-sm font-medium text-white">
                Ready to Transform Your Community?
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">Free Demo</span> Today
            </h2>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              See how Younited Communities can streamline your operations, boost engagement, 
              and help your community thrive. Schedule a personalized demo with our team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
              >
                <span className="font-semibold">Schedule Demo</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all"
              >
                <span className="font-semibold">Contact Sales</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon imports
import { Briefcase, Heart } from "lucide-react";