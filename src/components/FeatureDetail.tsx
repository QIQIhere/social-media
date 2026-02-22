import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface FeatureDetailProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  points: string[];
  reversed?: boolean;
}

export default function FeatureDetail({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  points, 
  reversed = false 
}: FeatureDetailProps) {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-coffee-900/5">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <span className="text-coffee-500 font-medium tracking-wider uppercase text-sm">{subtitle}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mt-3 mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-lg text-coffee-700 leading-relaxed">
                {description}
              </p>
            </div>

            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-coffee-800">
                  <div className="mt-1 w-5 h-5 rounded-full bg-coffee-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-coffee-800" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
