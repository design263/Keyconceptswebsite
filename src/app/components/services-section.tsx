import { motion } from "motion/react";
import { 
  TrendingUp, 
  Database, 
  Smartphone, 
  Plug, 
  Search,
  Shield,
  Brain,
  Cloud,
  Layers,
  Rocket,
  Settings,
  Wrench
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Layers,
    title: "Product Engineering",
    description: "We design, build, and evolve enterprise-grade web platforms, internal systems, and workflow automation—engineered for real operational load, not just demonstrations.",
    image: "https://images.unsplash.com/photo-1765445666407-c8535808a4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGV2ZWxvcG1lbnQlMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NzE4MzUxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-600 to-gray-800",
    span: "row-span-2",
    link: "/product-development"
  },
  {
    icon: Rocket,
    title: "MVP Studio",
    description: "Launch your product fast—without sacrificing architecture. We build MVPs with strong foundations so you can iterate to v1 and beyond without rebuilding from scratch.",
    image: "https://images.unsplash.com/photo-1769541607705-3b3c5095679b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsaXplZCUyMHBsYXRmb3JtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE4MzUxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#f1592a] to-[#ff7a45]",
    span: "col-span-2",
    link: "/mvp-studio"
  },
  {
    icon: Database,
    title: "Odoo ERP",
    description: "Full-cycle Odoo delivery—from implementation and custom module development to integrations, upgrades, and long-term maintenance across finance, operations, and HR.",
    image: "https://images.unsplash.com/photo-1587822766378-e47b139c56ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwcmVzb3VyY2UlMjBwbGFubmluZyUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MTgzNTEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-700 to-gray-900",
    span: "col-span-2",
    link: "/odoo-erp"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Field apps, enterprise mobility, and distributed team tools. We build for real-world usage conditions—offline-first capability, role control, and integration with core systems.",
    image: "https://images.unsplash.com/photo-1592660681825-70364e4dd0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdnAlMjBtaW5pbXVtJTIwdmlhYmxlJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzE4MzUxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-600 to-gray-800",
    span: "col-span-2",
    link: "/mobile-development"
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description: "SLA-based production support, incident handling, continuous enhancement, and roadmap execution. We stay accountable after go-live, not just until it.",
    image: "https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzcxODM1MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#f1592a] to-[#ff7a45]",
    link: "/support-maintenance"
  },
];

const trendingServices = [
  {
    icon: Layers,
    title: "Product Engineering",
    description: "We design, build, and evolve enterprise-grade web platforms and internal systems engineered for real operational load.",
    gradient: "from-[#f1592a] to-[#d94d24]",
    link: "/product-development"
  },
  {
    icon: Rocket,
    title: "MVP Studio",
    description: "Launch fast without sacrificing architecture. We build MVPs with production-grade foundations so you can scale without rebuilding.",
    gradient: "from-[#f1592a] to-[#d94d24]",
    link: "/mvp-studio"
  },
  {
    icon: Database,
    title: "Odoo ERP",
    description: "Full-cycle Odoo delivery—from implementation and custom modules to integrations, upgrades, and long-term support.",
    gradient: "from-[#f1592a] to-[#d94d24]",
    link: "/odoo-erp"
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trending IT Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
            >
              What We Do
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end product engineering across platforms, industries, and scale stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-visible"
              >
                <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="relative w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                        <service.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl shadow-lg`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Services - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-cyan-500/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
            >
              Our Services
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services designed for operational reality
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't build software for demos. We engineer systems for the way your business actually runs—under load, under audits, and over time.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-3xl ${service.span}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform origin-left">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <service.icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`absolute inset-0 ${service.color} blur-xl`} style={{ transform: "translateY(50%)" }} />
                  </div>
                </div>

                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-[#f1592a]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}