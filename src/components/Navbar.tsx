import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Focus the email input if possible
    setTimeout(() => {
      document.getElementById('email-input')?.focus();
    }, 500);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-coffee-50/80 backdrop-blur-md border-b border-coffee-200/50"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-coffee-800 rounded-full flex items-center justify-center text-coffee-50 font-serif font-bold text-xl">
          C
        </div>
        <span className="font-serif font-bold text-xl tracking-tight text-coffee-900">Ceramic</span>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={scrollToHero}
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-coffee-900 text-coffee-50 rounded-full font-medium text-sm hover:bg-coffee-800 transition-colors"
        >
          <span>Join the Waitlist</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.nav>
  );
}
