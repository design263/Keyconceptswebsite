import { motion } from "motion/react";
import { 
  Search, 
  Target, 
  Palette, 
  Code, 
  Rocket, 
  Settings 
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Alignment before action",
    description: "We run structured stakeholder workshops to map goals, scope boundaries, dependencies, and success metrics. Risk is identified early—not discovered mid-build.",
    icon: Search,
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Clarity before code",
    description: "Module breakdown, milestone planning, architecture outline, effort estimates, and a change control mechanism. You know exactly what's being built and when.",
    icon: Target,
    color: "from-gray-600 to-gray-800"
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Adoption-first UX",
    description: "User flows, wireframes, and prototypes focused on operational adoption. We design for the person using the system every day, not just for the demo.",
    icon: Palette,
    color: "from-gray-700 to-gray-900"
  },
  {
    number: "04",
    title: "Develop",
    subtitle: "Disciplined execution",
    description: "Sprint-based development with code review discipline, structured QA cycles, defect triage, and staging environments. Progress is visible; surprises are minimised.",
    icon: Code,
    color: "from-gray-600 to-gray-800"
  },
  {
    number: "05",
    title: "Deploy",
    subtitle: "Controlled go-live",
    description: "UAT support, sign-off readiness, training documentation, and go-live planning. We don't hand over and disappear—we stabilise before we step back.",
    icon: Rocket,
    color: "from-[#f1592a] to-[#d94d24]"
  },
  {
    number: "06",
    title: "Operate & Improve",
    subtitle: "Long-term ownership",
    description: "SLA-based support, continuous improvement cycles, roadmap execution, and monitoring. We treat your product as an evolving system, not a closed project.",
    icon: Settings,
    color: "from-gray-700 to-gray-900"
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
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
            Our Process
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We Deliver
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A six-step system built for predictable results and stakeholder alignment—from first conversation to long-term ownership.
          </p>
        </motion.div>

        {/* Process Steps - Timeline Layout */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-[100px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-8 lg:gap-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Card */}
                <div className="group relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300">
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute -top-[38px] left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-100 items-center justify-center z-10 group-hover:border-[#f1592a]/20 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{step.number}</span>
                    </div>
                  </div>

                  {/* Number Badge (Mobile) */}
                  <div className="lg:hidden mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white text-xs font-bold rounded-full">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="relative w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all">
                        <step.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-[#f1592a] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#f1592a] italic mb-2">{step.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none`} />

                  {/* Arrow Connector (Desktop) - Only for steps 1, 2, 4, 5 (not last in row) */}
                  {((index % 3 !== 2) && index < processSteps.length - 1) && (
                    <div className="hidden lg:block absolute top-[100px] -right-4 w-8 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-[#f1592a] rotate-45 -mr-1" />
                    </div>
                  )}
                </div>

                {/* Mobile Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <div className="w-1 h-16 bg-gradient-to-b from-[#f1592a] to-[#ff7a45] relative">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 border-l-2 border-b-2 border-[#f1592a] rotate-45 -mb-1" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Want to understand how we'd run your engagement?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#f1592a]/30 transition-all font-semibold"
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}