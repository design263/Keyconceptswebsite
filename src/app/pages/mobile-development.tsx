import { motion } from "motion/react";
import { Smartphone, Apple, Bot, Fingerprint, Shield, Zap, Layers, CheckCircle, ArrowRight, Rocket, Globe, Lock, Code2, Users, TrendingUp, Eye, Workflow } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const mobileServices = [
  {
    icon: Bot,
    title: "What We Build",
    description: "Enterprise mobile applications for field operations, distributed teams, and internal workflows",
    features: [
      "Field operations and data collection apps",
      "Workflow and approval apps for distributed teams",
      "Inspection, audit, and compliance tracking apps",
      "Internal enterprise tools for operations teams"
    ],
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    icon: Apple,
    title: "ERP & System Integration",
    description: "Apps integrated with ERP, CRM, and backend systems for seamless data flow",
    features: [
      "Apps integrated with ERP, CRM, and backend systems",
      "Integration with REST APIs, Odoo, and custom backends",
      "Real-time data sync",
      "Multi-system connectivity"
    ],
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Globe,
    title: "Technical Capabilities",
    description: "Cross-platform and native mobile development with enterprise-grade architecture",
    features: [
      "Cross-platform (React Native) and native mobile",
      "Offline-first architecture with sync mechanisms",
      "RBAC and user role management",
      "Push notifications and real-time updates"
    ],
    color: "from-gray-600 to-gray-800"
  },
  {
    icon: Fingerprint,
    title: "Security & Access",
    description: "Role-based controls and enterprise-grade security for your mobile workforce",
    features: [
      "RBAC and user role management",
      "Offline-first architecture with sync mechanisms",
      "Secure Enclave",
      "End-to-end Encryption"
    ],
    color: "from-gray-500 to-gray-700"
  },
];

const processTimeline = [
  {
    phase: "Wireframing",
    icon: Layers,
    description: "Sketching user flows and interface layouts",
    duration: "1-2 weeks",
    deliverables: ["User Flow Diagrams", "Low-fidelity Mockups", "Feature Specification"]
  },
  {
    phase: "UI/UX Design",
    icon: Workflow,
    description: "Creating high-fidelity designs and prototypes",
    duration: "2-3 weeks",
    deliverables: ["Design System", "Interactive Prototypes", "Style Guide"]
  },
  {
    phase: "Development",
    icon: Code2,
    description: "Building native apps with clean, maintainable code",
    duration: "8-12 weeks",
    deliverables: ["Alpha Build", "Beta Release", "Code Documentation"]
  },
  {
    phase: "Testing",
    icon: Shield,
    description: "Comprehensive QA testing across devices",
    duration: "2-3 weeks",
    deliverables: ["Test Reports", "Bug Fixes", "Performance Optimization"]
  },
  {
    phase: "App Store Launch",
    icon: Rocket,
    description: "Publishing to App Store and Play Store",
    duration: "1 week",
    deliverables: ["App Submission", "Store Optimization", "Launch Support"]
  },
];

const appFeatures = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed and battery efficiency"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security and data protection"
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Intuitive interfaces that users love"
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "Built to grow with your business needs"
  },
];

export function MobileDevelopmentPage() {
  const [activePhone, setActivePhone] = useState<'ios' | 'android'>('ios');

  return (
    <div className="min-h-screen bg-white">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      {/* Hero Section with Phone Mockups */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#f1592a]/5 backdrop-blur-sm rounded-full border border-[#f1592a]/10 mb-8"
                >
                  <Smartphone className="text-[#f1592a]" size={20} strokeWidth={1.5} />
                  <span className="text-sm font-semibold tracking-wider text-[#f1592a]">MOBILE DEVELOPMENT</span>
                </motion.div>

                <h1 className="text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                  Mobile apps built for
                  <span className="block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    field reality.
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                  Enterprise mobile for distributed teams, field operations, and internal workflows. We build for how your people actually work—with offline capability, role-based controls, and full integration with your core systems.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                    <div className="w-2 h-2 bg-[#f1592a] rounded-full animate-pulse" />
                    <span className="text-sm text-gray-700">Native Performance</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                    <Shield className="text-gray-600" size={16} />
                    <span className="text-sm text-gray-700">Biometric Security</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                    <Apple className="text-gray-600" size={16} />
                    <Bot className="text-gray-600" size={16} />
                    <span className="text-sm text-gray-700">iOS & Android</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center space-x-2"
                    >
                      <span className="font-semibold">Start Your App</span>
                      <Rocket className="group-hover:translate-x-1 transition-transform" size={20} />
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:border-[#f1592a]/30 hover:bg-gray-50 transition-all"
                  >
                    View Portfolio
                  </motion.button>
                </div>
              </motion.div>

              {/* Phone Mockups */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="relative flex items-center justify-center gap-8">
                  {/* iOS Phone Mockup */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, rotate: -5 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      rotate: activePhone === 'ios' ? 0 : -5,
                      scale: activePhone === 'ios' ? 1.05 : 1,
                      zIndex: activePhone === 'ios' ? 20 : 10
                    }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => setActivePhone('ios')}
                    className="relative cursor-pointer"
                    style={{ transformOrigin: 'center' }}
                  >
                    {/* iPhone Frame */}
                    <div className="w-[280px] h-[570px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10" />
                      
                      {/* Screen with Glassmorphism */}
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-[2.5rem] overflow-hidden">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 px-8 pt-3 pb-2 flex items-center justify-between text-xs font-semibold text-gray-900 z-20">
                          <span>9:41</span>
                          <div className="flex items-center space-x-1">
                            <div className="w-4 h-3 bg-gray-900 rounded-sm" />
                            <div className="w-4 h-3 bg-gray-900 rounded-sm" />
                            <div className="w-4 h-3 bg-gray-900 rounded-sm" />
                          </div>
                        </div>

                        {/* App Content with Glassmorphism */}
                        <div className="absolute inset-0 p-6 pt-14">
                          {/* Glassmorphic Header Card */}
                          <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 mb-4 border border-white/50 shadow-xl"
                          >
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-2xl flex items-center justify-center shadow-lg">
                                <Apple className="text-white" size={32} strokeWidth={1.5} />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-gray-900">iOS App</h3>
                                <p className="text-sm text-gray-600">Swift & SwiftUI</p>
                              </div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '85%' }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="h-full bg-gradient-to-r from-[#f1592a] to-[#ff7a45]"
                              />
                            </div>
                          </motion.div>

                          {/* Feature Cards */}
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { icon: Shield, label: "Secure", color: "from-[#f1592a] to-[#ff7a45]" },
                              { icon: Zap, label: "Fast", color: "from-gray-600 to-gray-800" },
                              { icon: Globe, label: "Cloud", color: "from-gray-500 to-gray-700" },
                              { icon: Fingerprint, label: "Biometric", color: "from-gray-700 to-gray-900" }
                            ].map((item, i) => {
                              const Icon = item.icon;
                              return (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.4 + i * 0.1 }}
                                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-4 border border-white/50 shadow-lg"
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-2 shadow-md`}>
                                    <Icon className="text-white" size={20} strokeWidth={1.5} />
                                  </div>
                                  <p className="text-xs font-semibold text-gray-900">{item.label}</p>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Bottom Action Button */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-6 left-6 right-6"
                          >
                            <div className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] rounded-2xl p-4 shadow-2xl">
                              <p className="text-white font-semibold text-center text-sm">Get Started</p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* iOS Label */}
                    <motion.div
                      animate={{ opacity: activePhone === 'ios' ? 1 : 0.5 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200"
                    >
                      <p className="text-xs font-semibold text-gray-900 flex items-center space-x-2">
                        <Apple size={14} />
                        <span>iOS</span>
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Android Phone Mockup */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      rotate: activePhone === 'android' ? 0 : 5,
                      scale: activePhone === 'android' ? 1.05 : 1,
                      zIndex: activePhone === 'android' ? 20 : 10
                    }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => setActivePhone('android')}
                    className="relative cursor-pointer"
                    style={{ transformOrigin: 'center' }}
                  >
                    {/* Android Frame */}
                    <div className="w-[280px] h-[570px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border-4 border-gray-800">
                      {/* Screen with Glassmorphism */}
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-[2.2rem] overflow-hidden">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 px-6 pt-2 pb-2 flex items-center justify-between text-xs font-semibold text-gray-900 z-20 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm">
                          <span>9:41</span>
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-gray-900 rounded-full" />
                            <div className="w-3 h-3 bg-gray-900 rounded-full" />
                            <div className="w-3 h-3 bg-gray-900 rounded-full" />
                          </div>
                        </div>

                        {/* App Content with Glassmorphism */}
                        <div className="absolute inset-0 p-6 pt-12">
                          {/* Glassmorphic Header Card */}
                          <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 mb-4 border border-white/50 shadow-xl"
                          >
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                                <Bot className="text-white" size={32} strokeWidth={1.5} />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-gray-900">Android App</h3>
                                <p className="text-sm text-gray-600">Kotlin & Compose</p>
                              </div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '90%' }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="h-full bg-gradient-to-r from-gray-700 to-gray-900"
                              />
                            </div>
                          </motion.div>

                          {/* Feature Cards */}
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { icon: Lock, label: "Encrypted", color: "from-gray-700 to-gray-900" },
                              { icon: Zap, label: "Optimized", color: "from-[#f1592a] to-[#ff7a45]" },
                              { icon: Globe, label: "API", color: "from-gray-600 to-gray-800" },
                              { icon: Fingerprint, label: "Touch ID", color: "from-gray-500 to-gray-700" }
                            ].map((item, i) => {
                              const Icon = item.icon;
                              return (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.4 + i * 0.1 }}
                                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-4 border border-white/50 shadow-lg"
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-2 shadow-md`}>
                                    <Icon className="text-white" size={20} strokeWidth={1.5} />
                                  </div>
                                  <p className="text-xs font-semibold text-gray-900">{item.label}</p>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Bottom Action Button */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-6 left-6 right-6"
                          >
                            <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl p-4 shadow-2xl">
                              <p className="text-white font-semibold text-center text-sm">Launch App</p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Android Label */}
                    <motion.div
                      animate={{ opacity: activePhone === 'android' ? 1 : 0.5 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200"
                    >
                      <p className="text-xs font-semibold text-gray-900 flex items-center space-x-2">
                        <Bot size={14} />
                        <span>Android</span>
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f1592a]/5 to-[#ff7a45]/5 rounded-full blur-3xl"
        />
      </section>

      {/* Mobile Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Mobile
              <span className="block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Comprehensive mobile development services for iOS and Android platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {mobileServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/50 hover:border-[#f1592a]/30 hover:shadow-2xl transition-all"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {(() => {
                      const IconComponent = service.icon;
                      return <IconComponent className="text-white" size={32} strokeWidth={1.5} />;
                    })()}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
                        <CheckCircle className="text-[#f1592a] flex-shrink-0" size={14} strokeWidth={2.5} />
                        <span className="text-xs text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 rounded-3xl transition-all pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Development
              <span className="block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              From wireframing to App Store launch, our proven process ensures success.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f1592a] to-[#ff7a45] -translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-16">
                {processTimeline.map((phase, index) => {
                  const Icon = phase.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                    >
                      {/* Content Card */}
                      <div className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all group">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-[0.02] rounded-3xl" style={{
                            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                          }} />

                          <div className="relative z-10">
                            <div className={`flex items-center ${isEven ? 'lg:justify-end' : 'justify-start'} mb-4`}>
                              <div className="w-14 h-14 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Icon className="text-white" size={28} strokeWidth={1.5} />
                              </div>
                            </div>

                            <div className="mb-2">
                              <span className="inline-block px-4 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-xs font-semibold mb-3">
                                {phase.duration}
                              </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-gray-900">{phase.phase}</h3>
                            <p className="text-gray-600 mb-6 font-light">{phase.description}</p>

                            {/* Deliverables */}
                            <div className={`space-y-2 ${isEven ? 'lg:items-end' : 'items-start'}`}>
                              <p className="text-sm font-semibold text-gray-700 mb-3">Deliverables:</p>
                              <div className="space-y-2">
                                {phase.deliverables.map((deliverable, i) => (
                                  <div key={i} className={`flex items-center space-x-2 ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                                    <CheckCircle className="text-[#f1592a] flex-shrink-0" size={16} strokeWidth={2.5} />
                                    <span className="text-sm text-gray-700">{deliverable}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Hover Glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 rounded-3xl transition-all pointer-events-none" />
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="w-8 h-8 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full border-4 border-white shadow-xl"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Why Choose
              <span className="block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Our Apps
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Built with performance, security, and user experience at the core.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#f1592a]/30 hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f1592a] transition-all">
                  <feature.icon className="text-gray-700 group-hover:text-white transition-colors" size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>

                <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 rounded-3xl transition-all pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
              >
                <Smartphone className="text-white" size={40} strokeWidth={1.5} />
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Tell us about your mobile requirements
              </h2>
              <p className="text-xl text-white/90 mb-8 font-light">
                Transform your idea into a powerful mobile application. Get started with a
                free consultation and bring your vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-[#f1592a] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
                  >
                    Start a Conversation
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all font-semibold"
                >
                  View Case Studies
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
