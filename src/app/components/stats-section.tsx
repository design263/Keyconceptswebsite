import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { Award, Users, Clock, Globe } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: Award,
    value: 16,
    suffix: "+",
    label: "Years of Delivery Experience",
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    icon: Globe,
    value: 400,
    suffix: "+",
    label: "Clients Worldwide",
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    icon: Clock,
    value: 10,
    suffix: "L+",
    label: "Development Hours",
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    icon: Users,
    value: 25,
    suffix: "+",
    label: "Experienced Team Members",
    color: "from-[#f1592a] to-[#ff7a45]"
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref} className="tabular-nums">0</span>
      <span className="ml-1">{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#f1592a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl" />
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
            Our Impact
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            16 Years of Delivery Discipline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by enterprises and growth-stage organizations across India, USA, and MENA
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="relative w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:[#ffffff] transition-all">
                      <stat.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Animated Number */}
                    <div className="mb-2">
                      <div className="text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                    </div>

                    {/* Label */}
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Ready to build with a partner who stays accountable after go-live?{" "}
            <a
              href="/contact"
              className="text-[#f1592a] font-semibold hover:underline"
            >
              Start a Conversation
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}