import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureDetail from './components/FeatureDetail';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-coffee-50 selection:bg-coffee-200 selection:text-coffee-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        <FeatureDetail 
          subtitle="The Material"
          title="Crafted from volcanic clay."
          description="Sourced from the mineral-rich soils of the Andes, our clay is fired at 2,400°F to create a stone-like density that holds heat longer than standard porcelain."
          imageSrc="https://picsum.photos/seed/clay/1000/1000"
          points={[
            "Ethically sourced materials",
            "Non-porous surface prevents bacterial growth",
            "Microwave and dishwasher safe",
            "Unique texture on every cup"
          ]}
        />
        
        <FeatureDetail 
          subtitle="The Design"
          title="A lip designed for flavor."
          description="The tapered rim directs coffee to the front of your palate, enhancing sweetness and acidity while cooling the liquid to the perfect drinking temperature."
          imageSrc="https://picsum.photos/seed/lip/1000/1000"
          points={[
            "Tapered rim for optimal flow",
            "Thick walls for insulation",
            "Wide base for stability",
            "Designed by world champion baristas"
          ]}
          reversed={true}
        />
      </main>

      <Footer />
    </div>
  );
}
