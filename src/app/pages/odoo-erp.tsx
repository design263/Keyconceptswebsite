import { motion } from "motion/react";
import { 
  Settings, 
  Puzzle, 
  Link2, 
  RefreshCw, 
  Headphones, 
  Factory,
  ShoppingCart,
  Building2,
  Hospital,
  GraduationCap,
  Package,
  Truck,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Services data
const services = [
  {
    icon: Settings,
    title: "Odoo Implementation & Configuration",
    description: "Odoo implementation and configuration across modules—tailored to your business needs and ensuring seamless integration with existing workflows.",
    features: [
      "Odoo implementation and configuration across modules",
      "Custom module development for industry-specific workflows",
      "Integration with finance systems, reporting tools, and internal platforms",
      "Data migration from legacy ERP or Excel-based operations",
      "User training, documentation, and go-live support",
      "Ongoing upgrades, version migrations, and long-term support"
    ],
    image: "https://images.unsplash.com/photo-1621036579842-9080c7119f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBpbXBsZW1lbnRhdGlvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTg0Njg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imagePosition: "left"
  },
  {
    icon: Puzzle,
    title: "Custom Modules",
    description: "Custom module development for industry-specific workflows—extending Odoo's functionality to meet your unique business requirements.",
    features: [
      "Custom module development",
      "Workflow automation design",
      "Third-party integrations",
      "UI/UX customization",
      "Performance optimization"
    ],
    image: "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwbW9kdWxlc3xlbnwxfHx8fDE3NzE4NDY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imagePosition: "right"
  },
  {
    icon: Link2,
    title: "Integrations",
    description: "Integration with finance systems, reporting tools, and internal platforms—connecting Odoo seamlessly with your entire business stack.",
    features: [
      "API development & integration",
      "Payment gateway integration",
      "E-commerce platform connectivity",
      "CRM & marketing tool sync",
      "Accounting software integration"
    ],
    image: "https://images.unsplash.com/photo-1749006590475-4592a5dbf99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW50ZWdyYXRpb24lMjBuZXR3b3JrJTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NzE4NDY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imagePosition: "left"
  },
  {
    icon: RefreshCw,
    title: "Data Migration",
    description: "Data migration from legacy ERP or Excel-based operations—smooth and secure, with full validation before go-live.",
    features: [
      "Legacy system data extraction",
      "Version upgrade migration",
      "Data mapping & transformation",
      "Testing & validation",
      "Zero-downtime migration strategy"
    ],
    image: "https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbWlncmF0aW9uJTIwZGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc3MTg0Njg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imagePosition: "right"
  },
  {
    icon: Headphones,
    title: "Long-Term Support & Upgrades",
    description: "Ongoing upgrades, version migrations, and long-term support to keep your Odoo system running at its best.",
    features: [
      "Ongoing upgrades and version migrations",
      "Bug fixes & troubleshooting",
      "Regular system updates",
      "Performance monitoring",
      "Security patches & compliance"
    ],
    image: "https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWNobmljYWwlMjBhc3Npc3RhbmNlfGVufDF8fHx8MTc3MTg0Njg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imagePosition: "left"
  }
];

// Industries data
const industries = [
  {
    icon: Factory,
    name: "Pharma & Chemicals",
    description: "Anupam Rasayan—regulated manufacturing workflows and compliance tracking"
  },
  {
    icon: ShoppingCart,
    name: "Solar & Manufacturing",
    description: "Goldi Solar—production planning, inventory management, and quality control"
  },
  {
    icon: Building2,
    name: "Insurance Operations",
    description: "Puri Crawford—policy management, claims processing, and operational reporting"
  },
  {
    icon: Hospital,
    name: "Accounting & Finance",
    description: "Full module implementation: Accounting, Invoicing, and financial reporting"
  },
  {
    icon: Package,
    name: "Inventory & Warehouse",
    description: "Inventory, Purchase, and Manufacturing module deployments"
  },
  {
    icon: Truck,
    name: "Sales & CRM",
    description: "Sales, CRM, and eCommerce implementations for customer-facing operations"
  },
  {
    icon: GraduationCap,
    name: "HR & Payroll",
    description: "HR, Payroll, and Project module configurations for people operations"
  },
  {
    icon: Building2,
    name: "Field Service",
    description: "Field Service module deployments for distributed operations teams"
  }
];

export function OdooERPPage() {
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
                Official Odoo Partner
              </span>
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Odoo ERP,{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                done properly.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            >
              From initial implementation to custom workflows, third-party integrations, and ongoing maintenance—we deliver Odoo as a long-term operational system, not a one-time install.
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
                <span className="font-semibold">Start a Conversation</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg"
              >
                <span className="font-semibold">Explore Services</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
            >
              Our Odoo Services
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Deliver
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end Odoo solutions designed to streamline operations, boost productivity, and drive business growth
            </p>
          </motion.div>

          {/* Services List - Alternating Layout */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-[120px] items-center ${
                  service.imagePosition === "right" ? "lg:grid-flow-dense" : ""
                }`}>
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative ${service.imagePosition === "right" ? "lg:col-start-2" : ""}`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[#f1592a]/20 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#f1592a]/10 rounded-full blur-2xl" />
                  </motion.div>

                  {/* Content */}
                  <div className={service.imagePosition === "right" ? "lg:col-start-1 lg:row-start-1" : ""}>
                    {/* Icon */}
                    <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all shadow-lg">
                        <service.icon className="text-gray-700" size={32} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="text-[#f1592a] flex-shrink-0 mt-1" size={20} strokeWidth={2} />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
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
              Industry Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Clients & Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven Odoo ERP implementations across diverse industries, delivering tailored solutions for unique business challenges. Modules: Accounting · Inventory · Manufacturing · Purchase · Sales · HR &amp; Payroll · Project · Field Service · CRM · Website &amp; eCommerce
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full text-center">
                  {/* Icon */}
                  <div className="relative w-14 h-14 mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all">
                      <industry.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Key Concepts for{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Odoo ERP?
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Odoo implementations fail most often at the configuration and adoption stage—not at installation. We invest heavily in requirement clarity, change management, and post-go-live stabilization to make sure the system actually gets used.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Experts",
                description: "Our team of Odoo-certified consultants brings years of implementation experience"
              },
              {
                title: "Industry Knowledge",
                description: "Deep understanding of industry-specific requirements and best practices"
              },
              {
                title: "Agile Methodology",
                description: "Rapid deployment with iterative approach ensuring quick ROI"
              },
              {
                title: "End-to-End Support",
                description: "From initial consultation to post-implementation maintenance and support"
              },
              {
                title: "Custom Solutions",
                description: "Tailored modules and workflows designed for your unique business needs"
              },
              {
                title: "Transparent Pricing",
                description: "Clear, upfront pricing with no hidden costs or surprises"
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
                    <CheckCircle className="text-white" size={24} strokeWidth={2} />
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
              <span className="text-white font-medium">Ready to Get Started?</span>
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discuss your Odoo requirements
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Schedule a free consultation with our Odoo experts and discover how we can
              streamline your operations and accelerate growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Start a Conversation</span>
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