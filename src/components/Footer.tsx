export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-coffee-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-coffee-100 rounded-full flex items-center justify-center text-coffee-900 font-serif font-bold text-xl">
            C
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-white">Ceramic</span>
        </div>
        
        <div className="flex gap-8 text-sm text-coffee-300">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-sm text-coffee-400">
          © 2026 Ceramic Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
