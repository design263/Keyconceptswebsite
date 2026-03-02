import { motion } from "motion/react";
import { 
  Code,
  Smartphone,
  Server,
  Brain,
  Users,
  Building2,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Calendar,
  GitBranch,
  Layers,
  DollarSign,
  Clock,
  Target,
  Shield,
  Zap,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

// What we build data
const buildCategories = [
  {
    id: "web",
    icon: Code,
    title: "Web Applications",
    description: "Modern, scalable web apps built with cutting-edge frameworks",
    longDescription: "We craft responsive, high-performance web applications using the latest technologies. From progressive web apps to complex enterprise platforms, our solutions are built to scale with your business needs.",
    features: [
      "Progressive Web Apps (PWA)",
      "SaaS platforms & dashboards",
      "Enterprise portals",
      "E-commerce solutions"
    ],
    image: "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRldmVsb3BtZW50JTIwbW9kZXJufGVufDF8fHx8MTc3MTg0NzI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native & cross-platform mobile experiences",
    longDescription: "Build stunning mobile applications that users love. Whether you need native iOS/Android apps or cross-platform solutions, we deliver performant, user-friendly mobile experiences.",
    features: [
      "iOS & Android native apps",
      "React Native & Flutter",
      "Hybrid mobile solutions",
      "Mobile-first design"
    ],
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzE4NDg3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Systems",
    description: "Robust, secure, and scalable backend infrastructure",
    longDescription: "Power your applications with enterprise-grade backend systems. We design and build secure, scalable APIs and microservices that handle millions of requests while maintaining peak performance.",
    features: [
      "RESTful & GraphQL APIs",
      "Microservices architecture",
      "Cloud-native applications",
      "Database design & optimization"
    ],
    image: "https://images.unsplash.com/photo-1758905024964-4b4818821a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwaW5mcmFzdHJ1Y3R1cmUlMjBjbG91ZHxlbnwxfHx8fDE3NzE4NDg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Integrations",
    description: "Intelligent features powered by modern AI/ML",
    longDescription: "Integrate cutting-edge AI capabilities into your products. From ChatGPT integrations to custom machine learning models, we help you leverage AI to create smarter, more powerful applications.",
    features: [
      "OpenAI & LLM integrations",
      "Natural language processing",
      "Predictive analytics",
      "Automation & chatbots"
    ],
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTczMTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

// Who it's for data
const targetAudience = [
  {
    icon: Rocket,
    title: "Startups & Founders",
    description: "Launch your MVP quickly and iterate based on real user feedback"
  },
  {
    icon: Building2,
    title: "Enterprises",
    description: "Scale operations with custom software tailored to your unique processes"
  },
  {
    icon: TrendingUp,
    title: "Growing Businesses",
    description: "Modernize legacy systems and build new revenue streams"
  },
  {
    icon: Users,
    title: "Product Teams",
    description: "Extend your dev capacity with experienced product engineers"
  }
];

// Delivery approach
const deliverySteps = [
  {
    number: "01",
    title: "Sprint Planning",
    description: "2-week sprints with clear goals, user stories, and acceptance criteria"
  },
  {
    number: "02",
    title: "Development & QA",
    description: "Continuous integration, automated testing, and code reviews"
  },
  {
    number: "03",
    title: "Staging & Review",
    description: "Deploy to staging environment for client review and feedback"
  },
  {
    number: "04",
    title: "Production Deploy",
    description: "Seamless deployment with monitoring, rollback capability, and support"
  }
];

// Engagement models
const engagementModels = [
  {
    icon: Target,
    title: "Fixed Scope Projects",
    description: "Well-defined projects with clear deliverables and timeline",
    features: [
      "Detailed project scope & requirements",
      "Fixed budget & timeline",
      "Milestone-based payments",
      "Ideal for MVPs & defined products"
    ],
    highlight: "Best for MVPs"
  },
  {
    icon: Calendar,
    title: "Monthly Retainers",
    description: "Ongoing development partnership for continuous improvement",
    features: [
      "Dedicated team allocation",
      "Flexible sprint planning",
      "Priority support & maintenance",
      "Ideal for evolving products"
    ],
    highlight: "Best for Scale-ups"
  }
];

// Tech stack
const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  cloud: ["AWS", "Azure", "Vercel", "Docker"],
  ai: ["OpenAI", "LangChain", "TensorFlow", "Hugging Face"]
};

export function ProductDevelopmentPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("web");

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
                Custom Product Development
              </span>
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Build Products That{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Users Love
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            >
              From concept to launch, we craft scalable web & mobile applications with modern tech stacks, 
              agile methodology, and a relentless focus on user experience.
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
                <span className="font-semibold">Talk to Product Team</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="#who-its-for"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg"
              >
                <span className="font-semibold">Learn More</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who-its-for" className="py-24 bg-white">
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
              Who It's For
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Ambitious Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're launching a startup or scaling an enterprise, we're your technical partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full text-center">
                  <div className="relative w-14 h-14 mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all">
                      <audience.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{audience.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build Section - Tab Layout */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
              What We Build
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full-Stack Product Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              From frontend to backend, mobile to AI — we build complete, production-ready products
            </p>

            {/* Tab Navigation */}
           
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {buildCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                    selectedCategory === category.id
                      ? "bg-white border-[#f1592a] text-[#f1592a] shadow-lg"
                      : "bg-white/60 border-gray-200 text-gray-700 hover:border-[#f1592a]/50 hover:bg-white"
                  }`}
                >
                  {category.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          {selectedCategory && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              {buildCategories
                .filter((cat) => cat.id === selectedCategory)
                .map((category) => (
                  <div
                    key={category.id}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left Content */}
                      <div>
                        {/* Icon */}
                        <div className="relative w-14 h-14 mb-6">
                          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
                            <category.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          {category.longDescription}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 mb-8">
                          {category.features.map((feature, idx) => (
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
                          <span>Start Building</span>
                          <ArrowRight size={20} />
                        </motion.a>
                      </div>

                      {/* Right Image */}
                      <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                          <ImageWithFallback
                            src={category.image}
                            alt={category.title}
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

          {/* Default State - Show first category */}
          {!selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg mb-6">Select a category to learn more</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory("web")}
                className="px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
              >
                Explore Our Services
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Delivery Approach Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Delivery Approach
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Agile, Transparent, Iterative
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven delivery methodology ensures quality, speed, and continuous feedback
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-[#f1592a]/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < deliverySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="text-[#f1592a]/30" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Visual Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1640262014524-37583237e7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHNwcmludCUyMHBsYW5uaW5nJTIwbWV0aG9kb2xvZ3l8ZW58MXx8fHwxNzcxODQ3MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agile Development Process"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              Engagement Models
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Flexible Engagement Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the model that fits your project stage, budget, and timeline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] text-xs font-semibold rounded-full">
                      {model.highlight}
                    </span>
                  </div>

                  <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all">
                      <model.icon className="text-gray-700" size={32} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {model.description}
                  </p>

                  <ul className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="text-[#f1592a] flex-shrink-0 mt-0.5" size={18} strokeWidth={2} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Tech Stack
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Modern, Battle-Tested Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use proven frameworks and tools that scale with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold mb-4 capitalize text-center">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {technologies.map((tech) => (
                      <li key={tech} className="text-center">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg group-hover:bg-[#f1592a]/10 group-hover:text-[#f1592a] transition-all">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707758967860-19106a5e9ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhY2slMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzE4NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Tech Stack"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                Key Concepts?
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              16+ years of experience building products that scale, backed by a team that cares
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast Time-to-Market",
                description: "Launch MVPs in weeks, not months, with our proven process"
              },
              {
                icon: Shield,
                title: "Enterprise-Grade Quality",
                description: "Code reviews, testing, and security baked into every sprint"
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description: "Work with the same engineers throughout your project"
              },
              {
                icon: Target,
                title: "Product-First Mindset",
                description: "We think beyond code — UX, scalability, and business goals"
              },
              {
                icon: GitBranch,
                title: "Full Transparency",
                description: "Daily standups, sprint reviews, and direct Slack access"
              },
              {
                icon: Layers,
                title: "Scalable Architecture",
                description: "Build once, scale forever with cloud-native design"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-12 h-12 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
                    <item.icon className="text-white" size={24} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              <span className="text-white font-medium">Ready to Build?</span>
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Turn Your Idea into Reality
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Schedule a free consultation with our product team. We'll discuss your vision, 
              tech requirements, timeline, and provide a custom proposal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Talk to Product Team</span>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}