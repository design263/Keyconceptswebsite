import { motion } from "motion/react";
import { 
  Rocket,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Shield,
  Layers,
  Code,
  Palette,
  GitBranch,
  TestTube2,
  Upload,
  FileText,
  Lightbulb,
  ChevronDown,
  BarChart3,
  MessageSquare,
  Database,
  Smartphone
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

// What's Included - Main Services
const includedServices = [
  {
    id: "discovery",
    icon: Lightbulb,
    title: "Stakeholder Discovery & Scope",
    description: "Stakeholder discovery and scope definition",
    longDescription: "We start with a deep-dive discovery session to understand your business goals, target users, and market positioning. Our team helps you prioritize features, define user stories, and create a clear product roadmap that maximizes ROI.",
    features: [
      "Stakeholder discovery and scope definition",
      "Architecture decisions documented (not assumed)",
      "Core feature delivery in sprint cycles",
      "QA coverage and staging environment",
      "UAT support and go-live preparation",
      "Version roadmap: MVP → v1 → v2 planning"
    ],
    image: "https://images.unsplash.com/photo-1695634621145-9133286e0247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwTVZQJTIwbGF1bmNoJTIwcHJvdG90eXBlfGVufDF8fHx8MTc3MTg1MTI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-friendly interfaces",
    longDescription: "Our designers craft intuitive, modern interfaces that users love. From wireframes to high-fidelity prototypes, we ensure every interaction is seamless and every screen is pixel-perfect before a single line of code is written.",
    features: [
      "Wireframes & user flows",
      "High-fidelity UI designs",
      "Interactive clickable prototypes",
      "Mobile-first responsive design",
      "Brand identity integration",
      "Design system & component library"
    ],
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3MTgyOTc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "development",
    icon: Code,
    title: "Development",
    description: "Clean, scalable code built to grow",
    longDescription: "Our engineers build production-ready MVPs using modern frameworks and best practices. Every feature is built with scalability in mind, ensuring your product can grow from 100 to 100,000 users without a complete rebuild.",
    features: [
      "Frontend & backend development",
      "RESTful API architecture",
      "Database design & optimization",
      "Third-party integrations",
      "Authentication & authorization",
      "Cloud-native infrastructure"
    ],
    image: "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRldmVsb3BtZW50JTIwbW9kZXJufGVufDF8fHx8MTc3MTg0NzI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "qa",
    icon: TestTube2,
    title: "Quality Assurance",
    description: "Rigorous testing for a bug-free launch",
    longDescription: "Quality is non-negotiable. Our QA team performs comprehensive testing across devices, browsers, and scenarios to ensure your MVP works flawlessly. We catch bugs before your users do, so you launch with confidence.",
    features: [
      "Manual & automated testing",
      "Cross-browser compatibility",
      "Mobile responsiveness testing",
      "Performance & load testing",
      "Security vulnerability scanning",
      "User acceptance testing (UAT)"
    ],
    image: "https://images.unsplash.com/photo-1621036579842-9080c7119f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHF1YWxpdHklMjB0ZXN0aW5nJTIwZGVwbG95bWVudHxlbnwxfHx8fDE3NzE4NTEyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "deployment",
    icon: Upload,
    title: "Deployment & Launch",
    description: "Seamless go-live with zero downtime",
    longDescription: "We handle the entire deployment process — from setting up production environments to configuring CI/CD pipelines. Your MVP goes live smoothly, with monitoring, analytics, and post-launch support to ensure success.",
    features: [
      "Production environment setup",
      "CI/CD pipeline configuration",
      "Domain & SSL configuration",
      "Performance monitoring setup",
      "Analytics integration (GA4)",
      "Post-launch support (30 days)"
    ],
    image: "https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHNwcmludCUyMHBsYW5uaW5nJTIwdGVhbXxlbnwxfHx8fDE3NzE4NTEyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

// Timeline Phases
const timelinePhases = [
  {
    week: "Week 1-2",
    phase: "Discovery & Design",
    tasks: [
      "Kick-off & requirements gathering",
      "User research & personas",
      "Wireframes & user flows",
      "UI design & prototype"
    ]
  },
  {
    week: "Week 3-7",
    phase: "Development Sprint",
    tasks: [
      "Backend API development",
      "Frontend implementation",
      "Database setup & integration",
      "Core feature development"
    ]
  },
  {
    week: "Week 8-9",
    phase: "Testing & Refinement",
    tasks: [
      "QA testing & bug fixes",
      "Performance optimization",
      "User acceptance testing",
      "Final polish & tweaks"
    ]
  },
  {
    week: "Week 10",
    phase: "Launch & Handoff",
    tasks: [
      "Production deployment",
      "Team training & documentation",
      "Analytics setup",
      "Post-launch monitoring"
    ]
  }
];

// What We Need From You
const clientRequirements = [
  {
    icon: FileText,
    title: "Clear Product Vision",
    description: "A brief document outlining your idea, target users, and key goals"
  },
  {
    icon: MessageSquare,
    title: "Active Communication",
    description: "Regular feedback sessions and quick responses during sprints"
  },
  {
    icon: Users,
    title: "Decision Maker Access",
    description: "A point of contact who can approve designs and features"
  },
  {
    icon: Database,
    title: "Content & Assets",
    description: "Logo, brand guidelines, and any existing content/data"
  }
];

// Success Metrics
const successMetrics = [
  { value: "6-10", label: "Weeks Timeline", icon: Clock },
  { value: "50+", label: "MVPs Launched", icon: Rocket },
  { value: "95%", label: "On-Time Delivery", icon: Target },
  { value: "100%", label: "Code Ownership", icon: Shield }
];

export function MVPStudioPage() {
  const [selectedService, setSelectedService] = useState<string | null>("discovery");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gray-300/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-8"
            >
              <Sparkles className="text-[#f1592a]" size={18} />
              <span className="text-sm font-medium text-gray-700">
                MVP Studio
              </span>
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              MVP that grows.{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Not one you'll rebuild.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Most MVPs are built to ship, not to scale. We build MVPs with the architectural foundations that support real growth—so version 1 is an upgrade, not a rewrite.
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
                <span className="font-semibold">Start the Conversation</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="#timeline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg"
              >
                <span className="font-semibold">See Timeline</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-12 h-12 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
                    <metric.icon className="text-white" size={24} strokeWidth={2} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who This Is For
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Speed matters. But architecture shortcuts taken at the MVP stage compound into technical debt that can cost more to fix than the original build. We balance velocity with the fundamentals that let you move fast later.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Founders validating a product idea",
                description: "Founders validating a product idea with real users."
              },
              {
                icon: Shield,
                title: "Enterprise teams launching internal tools",
                description: "Enterprise teams launching internal tools."
              },
              {
                icon: Users,
                title: "Organizations replacing manual processes",
                description: "Organizations replacing a manual process with a governed system."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="relative w-14 h-14 mx-auto mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
                    <item.icon className="text-white" size={28} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section - Tab Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
            >
              What's Included
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              End-to-End MVP Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Everything you need to launch a successful MVP — from discovery to deployment
            </p>

            {/* Tab Navigation */}
            
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {includedServices.map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                    selectedService === service.id
                      ? "bg-white border-[#f1592a] text-[#f1592a] shadow-lg"
                      : "bg-white/60 border-gray-200 text-gray-700 hover:border-[#f1592a]/50 hover:bg-white"
                  }`}
                >
                  {service.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          {selectedService && (
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              {includedServices
                .filter((service) => service.id === selectedService)
                .map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left Content */}
                      <div>
                        {/* Icon */}
                        <div className="relative w-20 h-20 mb-6">
                          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
                            <service.icon className="text-gray-700" size={40} strokeWidth={1.5} />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-[#f1592a] rounded-full border-2 border-white" />
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          {service.longDescription}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle
                                className="text-[#f1592a] flex-shrink-0 mt-1"
                                size={20}
                                strokeWidth={2}
                              />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <motion.a
                          href="/contact"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
                        >
                          <span>Get Started</span>
                          <ArrowRight size={20} />
                        </motion.a>
                      </div>

                      {/* Right Image */}
                      <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                          <ImageWithFallback
                            src={service.image}
                            alt={service.title}
                            className="w-full h-[400px] md:h-[500px] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
            >
              Timeline
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              6-10 Week Launch Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven process that takes you from idea to launch in record time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {timelinePhases.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="inline-block px-3 py-1 bg-[#f1592a] text-white text-sm font-bold rounded-full mb-4">
                    {phase.week}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="text-[#f1592a] flex-shrink-0 mt-0.5" size={16} strokeWidth={2} />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < timelinePhases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="text-[#f1592a]/30" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Timeline Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#f1592a]/5 via-gray-50 to-[#f1592a]/5 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="text-[#f1592a]" size={28} />
                  <div>
                    <div className="font-bold text-xl">Total Timeline</div>
                    <div className="text-gray-600">6-10 weeks from kickoff to launch</div>
                  </div>
                </div>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-[#f1592a]/50 transition-all font-semibold"
                >
                  Start Your MVP
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Need From You */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
            >
              What We Need
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How You Can Help Us Succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building a great MVP is a partnership. Here's what we need from you to make it happen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clientRequirements.map((requirement, index) => (
              <motion.div
                key={requirement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full text-center">
                  <div className="relative w-14 h-14 mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all">
                      <requirement.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{requirement.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MVP Studio */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Our MVP Studio?
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've launched 50+ MVPs for startups, founders, and enterprises. Here's what makes us different.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Startup-Ready Process",
                description: "Built for speed. We understand the urgency of getting to market first."
              },
              {
                icon: BarChart3,
                title: "Product-First Thinking",
                description: "We don't just code features — we help you validate and prioritize for ROI."
              },
              {
                icon: Layers,
                title: "Scalable Architecture",
                description: "Your MVP foundation is built to scale to millions of users without rewrites."
              },
              {
                icon: GitBranch,
                title: "Full Transparency",
                description: "Weekly demos, daily standups, and real-time access to your codebase."
              },
              {
                icon: Shield,
                title: "No Lock-In",
                description: "100% code ownership from day one. Take it in-house anytime."
              },
              {
                icon: Users,
                title: "Post-Launch Support",
                description: "30 days of included support plus ongoing maintenance options."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="relative w-12 h-12 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
                    <item.icon className="text-white" size={24} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
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
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8"
            >
              <Sparkles className="text-white" size={20} />
              <span className="text-white font-medium">Ready to Launch?</span>
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's scope your MVP together
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Book a free 30-minute consultation. We'll review your idea, discuss technical requirements,
              and provide a detailed proposal with timeline and pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Start the Conversation</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/40 hover:bg-white/20 transition-all shadow-lg font-semibold"
              >
                Call: +123 456 7890
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Full code ownership</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>30-day post-launch support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
