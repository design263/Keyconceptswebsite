import { motion } from "motion/react";
import { Users, Target, Award, Lightbulb, Heart, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const values = [
  {
    icon: Lightbulb,
    title: "16 Years",
    description: "Years of delivery legacy"
  },
  {
    icon: Heart,
    title: "400+",
    description: "Clients worldwide"
  },
  {
    icon: Award,
    title: "10L+",
    description: "Development hours"
  },
  {
    icon: Zap,
    title: "3 Regions",
    description: "India, USA, and MENA"
  },
];

const team: { name: string; role: string; initial: string }[] = [];

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f1592a] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6"
            >
              About KCIPL
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Built for organizations where reliability matters.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              KCIPL is a product engineering company that builds and modernizes business-critical software systems. We partner with enterprises and growth-stage organizations that need systems to work under real operational load—with governance, auditability, and long-term support built in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who We Partner With
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  We partner with enterprises modernizing workflows and systems—replacing legacy processes with governed, scalable platforms. Growing businesses moving off Excel who need real systems before they outgrow manual operations. Teams requiring audit readiness where role-based access, approval trails, and traceability are not optional. Clients who need long-term ownership—not just a project handover, but continuous improvement and maintenance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f1592a]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-lg border border-white/60 hover:shadow-2xl transition-all">
                <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-[#f1592a] rounded-2xl flex items-center justify-center">
                    <Target className="text-white" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#f1592a]" />
                </div>
                <h3 className="text-3xl font-bold mb-4">What makes us different is how we run delivery.</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Most software partners focus on features. We focus on how systems actually operate—under load, under audits, under organizational change. Clean communication, governance-aware engineering, long-term ownership, and disciplined execution from day one.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all">
                <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-gray-700 rounded-2xl flex items-center justify-center">
                    <Users className="text-white" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-gray-700" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Differentiators</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  RBAC, audit trails, maker-checker, and compliance-ready patterns built in by default. Sprint discipline, QA cycles, change control, and risk tracking. Structured weekly updates, milestone visibility, and documented decisions. SLA-based support and roadmap execution, not post-launch silence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proof Points
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The numbers behind our delivery legacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                      <value.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Ready to build systems that work under real operational pressure? Let's talk.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "16+", label: "Years of Delivery" },
              { value: "400+", label: "Clients Worldwide" },
              { value: "10L+", label: "Dev Hours" },
              { value: "25+", label: "Team Members" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}