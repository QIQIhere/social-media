import { motion } from 'motion/react';
import { ArrowRight, Coffee } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(230,220,201,0.4),transparent_70%)]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-sm font-medium mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coffee-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-coffee-500"></span>
          </span>
          Launching Fall 2026
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] tracking-tight text-coffee-900">
          The cup your coffee <br />
          <span className="italic text-coffee-600">deserves.</span>
        </h1>

        <p className="text-lg md:text-xl text-coffee-700 max-w-2xl mx-auto leading-relaxed">
          Engineered for the perfect sip. Ceramic retains heat longer, fits perfectly in your hand, and elevates your daily ritual.
        </p>

        <div className="w-full max-w-md mx-auto mt-8">
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 bg-green-50 text-green-800 rounded-xl border border-green-100 flex items-center justify-center gap-2"
            >
              <Coffee className="w-5 h-5" />
              <span className="font-medium">Thanks! We'll keep you brewed.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full bg-white border border-coffee-200 focus:outline-none focus:ring-2 focus:ring-coffee-400 text-coffee-900 placeholder:text-coffee-300 shadow-sm"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-full bg-coffee-900 text-white font-medium hover:bg-coffee-800 transition-colors shadow-lg shadow-coffee-900/10 flex items-center justify-center gap-2 group"
              >
                <span>Notify Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
          <p className="text-xs text-coffee-500 mt-4">
            Join 2,000+ coffee lovers waiting for the drop. No spam, ever.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-16 relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-coffee-900/10"
      >
        <img 
          src="https://picsum.photos/seed/coffeehero/1600/900" 
          alt="Ceramic Cup Lifestyle" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 to-transparent" />
      </motion.div>
    </section>
  );
}
