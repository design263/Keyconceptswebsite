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
    title: "Product Development",
    description: "End-to-end product development from ideation to launch, building scalable and innovative solutions.",
    image: "https://images.unsplash.com/photo-1765445666407-c8535808a4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGV2ZWxvcG1lbnQlMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NzE4MzUxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-600 to-gray-800",
    span: "row-span-2"
  },
  {
    icon: Rocket,
    title: "Specialized Platforms",
    description: "Custom-built platforms including Visitorz, Younited Communities, and Election Mobilization solutions.",
    image: "https://images.unsplash.com/photo-1769541607705-3b3c5095679b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsaXplZCUyMHBsYXRmb3JtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE4MzUxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#f1592a] to-[#ff7a45]",
    span: "col-span-2"
  },
  {
    icon: Database,
    title: "Odoo Development",
    description: "Expert Odoo ERP implementation, customization, and integration tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1587822766378-e47b139c56ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwcmVzb3VyY2UlMjBwbGFubmluZyUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MTgzNTEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-700 to-gray-900",
    span: "col-span-2"
  },
  {
    icon: Settings,
    title: "MVP Development",
    description: "Rapidly build and validate your minimum viable product with our agile development approach.",
    image: "https://images.unsplash.com/photo-1592660681825-70364e4dd0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdnAlMjBtaW5pbXVtJTIwdmlhYmxlJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzE4MzUxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-600 to-gray-800",
    span: "col-span-2"
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description: "24/7 technical support and ongoing maintenance to keep your systems running smoothly.",
    image: "https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzcxODM1MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#f1592a] to-[#ff7a45]",
    
  },
  
];

const trendingServices = [
  {
    icon: Layers,
    title: "Product Development",
    description: "Transform your ideas into scalable, market-ready products with our end-to-end development expertise.",
    gradient: "from-[#f1592a] to-[#d94d24]"
  },
  {
    icon: Rocket,
    title: "MVP Studio",
    description: "Rapidly build, test, and launch your minimum viable product to validate your business concept.",
    gradient: "from-[#f1592a] to-[#d94d24]"
  },
  {
    icon: Database,
    title: "Odoo Development",
    description: "Streamline your business operations with our expert Odoo development and customization services.",
    gradient: "from-[#f1592a] to-[#d94d24]"
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
              What we do
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering businesses with innovative solutions across product development, rapid MVP creation, and enterprise ERP systems
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
              Comprehensive IT Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we deliver excellence in every aspect of digital transformation
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