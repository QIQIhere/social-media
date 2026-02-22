import { motion } from 'motion/react';
import { Thermometer, Hand, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Thermometer,
    title: "Heat Retention",
    description: "Double-walled ceramic core keeps your brew hot for 4 hours without burning your hands."
  },
  {
    icon: Hand,
    title: "Ergonomic Grip",
    description: "Sculpted by artisans to fit naturally in your palm, making every sip effortless."
  },
  {
    icon: Sparkles,
    title: "Stain Resistant",
    description: "Our proprietary glaze repels coffee oils and tannins, keeping your cup pristine forever."
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    description: "We stand by our craft. If it chips, cracks, or fades, we replace it. No questions asked."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-coffee-900 mb-4">
            Why Ceramic?
          </h2>
          <p className="text-coffee-600 max-w-2xl mx-auto">
            We didn't just make a cup. We reinvented the vessel for your most important daily ritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-coffee-50 border border-coffee-100 hover:border-coffee-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-coffee-600 group-hover:text-coffee-800 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium text-coffee-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-coffee-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
