import React from 'react';
import { Wifi, Tv, Coffee, Wind, Maximize, ArrowRight } from 'lucide-react';

const rooms = [
  {
    id: 'deluxe-king',
    name: 'Deluxe King Suite',
    description: 'A spacious retreat featuring floor-to-ceiling windows with panoramic city views, a king-sized bed, and an artisan marble bathroom.',
    price: 450,
    currency: '$',
    capacity: 2,
    size: '45m²',
    imageUrl: 'https://picsum.photos/id/42/800/600',
    amenities: ['Wifi', 'AC', 'Breakfast', 'TV']
  },
  {
    id: 'executive-studio',
    name: 'Executive Studio',
    description: 'Designed for the modern traveler, this studio offers a dedicated workspace, lounge area, and premium minibar access.',
    price: 620,
    currency: '$',
    capacity: 3,
    size: '60m²',
    imageUrl: 'https://picsum.photos/id/164/800/600',
    amenities: ['Wifi', 'AC', 'Workspace', 'Coffee']
  },
  {
    id: 'royal-penthouse',
    name: 'The Obsidian Penthouse',
    description: 'The pinnacle of luxury. Private terrace, jacuzzi, master suite with walk-in closet, and 24/7 butler service.',
    price: 1200,
    currency: '$',
    capacity: 4,
    size: '120m²',
    imageUrl: 'https://picsum.photos/id/129/800/600',
    amenities: ['Wifi', 'Pool', 'Butler', 'Bar']
  }
];

const RoomSuiteGrid = () => {
  return (
    <section id="suites" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-600 uppercase tracking-widest text-sm font-semibold">Accommodations</span>
          <h2 className="text-4xl md:text-5xl font-serif text-obsidian-900 mt-3 mb-6">Suites & Rooms</h2>
          <div className="w-24 h-0.5 bg-gold-400 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-600 font-light leading-relaxed">
            Each room at The Obsidian Heights is a masterpiece of design, blending contemporary comfort with classical elegance to ensure your stay is unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div key={room.id} className="room-card group bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 w-full">
                <img 
                  src={room.imageUrl} 
                  alt={room.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 text-xs font-bold tracking-wider uppercase">
                  {room.size}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-serif text-obsidian-900">{room.name}</h3>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light flex-grow">
                  {room.description}
                </p>

                {/* Mini Amenities */}
                <div className="flex gap-4 mb-6 text-gray-400">
                  <Wifi className="w-5 h-5" />
                  <Wind className="w-5 h-5" />
                  <Tv className="w-5 h-5" />
                  <Coffee className="w-5 h-5" />
                </div>

                <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">Starting from</span>
                    <span className="text-2xl font-serif text-obsidian-900">
                      {room.currency}{room.price} <span className="text-sm text-gray-400 font-sans">/ night</span>
                    </span>
                  </div>
                  <button className="text-gold-600 hover:text-obsidian-900 font-medium text-sm uppercase tracking-wider flex items-center gap-2 transition-colors">
                    Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomSuiteGrid;
