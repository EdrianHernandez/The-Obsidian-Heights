import React from 'react';
import { 
  Wifi, 
  Utensils, 
  Waves, 
  Dumbbell, 
  Car, 
  Martini, 
  Flower2, 
  Clock 
} from 'lucide-react';

const amenitiesList = [
  { icon: Waves, title: "Infinity Pool", desc: "Heated rooftop pool with city views." },
  { icon: Flower2, title: "Luxury Spa", desc: "Full-service treatments and sauna." },
  { icon: Utensils, title: "Fine Dining", desc: "Michelin-starred gastronomy." },
  { icon: Martini, title: "Lounge Bar", desc: "Craft cocktails & vintage wines." },
  { icon: Wifi, title: "High-Speed Wifi", desc: "Fiber connection throughout." },
  { icon: Dumbbell, title: "Fitness Center", desc: "24/7 access to modern equipment." },
  { icon: Car, title: "Valet Parking", desc: "Secure underground parking." },
  { icon: Clock, title: "24h Concierge", desc: "At your service, day or night." },
];

const AmenitiesIcons = () => {
  return (
    <section id="amenities" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-stone-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-gold-600 uppercase tracking-widest text-sm font-semibold">Services</span>
            <h2 className="text-4xl md:text-5xl font-serif text-obsidian-900 mt-3">Curated Amenities</h2>
          </div>
          <div className="hidden md:block">
            <button className="px-6 py-3 border border-obsidian-900 text-obsidian-900 hover:bg-obsidian-900 hover:text-white transition-all uppercase tracking-widest text-xs font-bold">
              View All Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {amenitiesList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="amenity-item flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-6 group-hover:bg-gold-400 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7 stroke-1" />
                </div>
                <h3 className="text-lg font-serif text-obsidian-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[150px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 md:hidden text-center">
            <button className="px-6 py-3 border border-obsidian-900 text-obsidian-900 uppercase tracking-widest text-xs font-bold">
              View All Services
            </button>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesIcons;
