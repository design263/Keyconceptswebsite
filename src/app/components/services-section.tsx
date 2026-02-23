import { motion } from "motion/react";
import { 
  TrendingUp, 
  Database, 
  Smartphone, 
  Plug, 
  Search,
  Shield,
  Brain,
  Cloud
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your brand and reach your target audience effectively.",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MDYxNjg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#f1592a] to-[#ff7a45]",
    span: "row-span-2"
  },
  {
    icon: Database,
    title: "ERP Solutions (Odoo Partner)",
    description: "Comprehensive ERP implementation and customization as an official Odoo partner.",
    image: "https://images.unsplash.com/photo-1662027067763-770376e710f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcnAlMjBlbnRlcnByaXNlJTIwc29mdHdhcmV8ZW58MXx8fHwxNzcwNzAyNTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-700 to-gray-900",
    span: "col-span-2"
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    description: "Custom Android/iOS and web applications built with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzA1ODQ0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-600 to-gray-800",
    span: "col-span-2"
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamless integration of third-party services and custom API development.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBpbnRlZ3JhdGlvbiUyMGNvZGV8ZW58MXx8fHwxNzcwNzAyNTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-500 to-gray-700",
    span: "row-span-2"
  },
  {
    icon: Search,
    title: "SEO/SMO Services",
    description: "Optimize your online presence and dominate search engine rankings.",
    image: "https://images.unsplash.com/photo-1657812160299-6b656decd5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzcwNzAyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#f1592a] to-[#d94d24]",
    span: "col-span-2"
  },
];

const trendingServices = [
  {
    icon: Brain,
    title: "AI-Powered Odoo Implementation",
    description: "Leverage artificial intelligence to automate and optimize your Odoo ERP workflows.",
    gradient: "from-gray-600 to-gray-800"
  },
  {
    icon: Cloud,
    title: "Cloud-Native App Development",
    description: "Build scalable, resilient applications designed for the cloud from day one.",
    gradient: "from-gray-700 to-gray-900"
  },
  {
    icon: Shield,
    title: "Digital Immune Systems (Security)",
    description: "Protect your digital assets with advanced security and resilience strategies.",
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
              What's Trending
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Next-Gen IT Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead with our cutting-edge technology solutions designed for the future
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
                className="group relative overflow-hidden"
              >
                <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300">
                  <div className="relative w-14 h-14 mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                      <service.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  
                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />
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
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} blur-xl`} style={{ transform: "translateY(50%)" }} />
                  </div>
                </div>

                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}