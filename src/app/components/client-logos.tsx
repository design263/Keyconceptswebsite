import { motion } from "motion/react";

const clients = [
  { name: "Puri Crawford", logo: "PC", industry: "Insurance" },
  { name: "Anupam Rasayan", logo: "AR", industry: "Pharma / Chemicals" },
  { name: "Goldi Solar", logo: "GS", industry: "Solar / Manufacturing" },
  { name: "Enterprise Client", logo: "EC", industry: "Manufacturing" },
  { name: "Enterprise Client", logo: "EC", industry: "Operations" },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Trusted by organizations across industries
          </p>
          
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="group relative"
            >
              <div className="flex items-center justify-center h-20 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-white hover:shadow-lg transition-all">
                <div className="relative">
                  {/* Logo placeholder with initials */}
                  <div className="text-2xl font-bold text-gray-400 group-hover:text-[#f1592a] transition-colors">
                    {client.logo}
                  </div>
                  {/* Orange dot accent on hover */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-[#f1592a] rounded-full"
                  />
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded whitespace-nowrap text-center">
                  <div>{client.name}</div>
                  <div className="text-gray-400">{client.industry}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        
      </div>
    </section>
  );
}
