import React, { useState } from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { DateRange } from '../types';

const HeroGallery: React.FC = () => {
  const [bookingData, setBookingData] = useState<DateRange>({
    startDate: '',
    endDate: '',
    guests: 2
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checking availability for:', bookingData);
    alert('Checking availability... (This is a demo)');
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full hotel-hero">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=1" 
          alt="Lobby Interior" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <span className="text-gold-400 tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in-up">Welcome to The Obsidian</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight animate-fade-in-up delay-100">
          Experience <br/> <span className="italic font-light">Elegance</span>
        </h1>
        <p className="text-gray-200 max-w-lg mb-12 font-light tracking-wide text-lg animate-fade-in-up delay-200">
          A sanctuary of calm in the heart of the city. Unmatched luxury, timeless design.
        </p>

        {/* Booking Widget */}
        <div className="w-full max-w-4xl bg-white rounded-sm shadow-2xl p-6 md:p-8 animate-fade-in-up delay-300">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            {/* Check In */}
            <div className="w-full md:w-1/4 flex flex-col items-start pt-4 md:pt-0">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                <Calendar className="w-3 h-3 mr-1" /> Check In
              </label>
              <input 
                type="date" 
                name="startDate"
                className="w-full text-obsidian-900 font-serif text-lg focus:outline-none bg-transparent"
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Check Out */}
            <div className="w-full md:w-1/4 flex flex-col items-start pl-0 md:pl-8 pt-4 md:pt-0">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                <Calendar className="w-3 h-3 mr-1" /> Check Out
              </label>
              <input 
                type="date" 
                name="endDate"
                className="w-full text-obsidian-900 font-serif text-lg focus:outline-none bg-transparent"
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Guests */}
            <div className="w-full md:w-1/4 flex flex-col items-start pl-0 md:pl-8 pt-4 md:pt-0">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                <Users className="w-3 h-3 mr-1" /> Guests
              </label>
              <select 
                name="guests"
                className="w-full text-obsidian-900 font-serif text-lg focus:outline-none bg-transparent border-none appearance-none cursor-pointer"
                onChange={handleInputChange}
                defaultValue={2}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} Guests</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="w-full md:w-auto pl-0 md:pl-8 pt-4 md:pt-0">
              <button 
                type="submit"
                className="w-full md:w-auto bg-obsidian-900 hover:bg-gold-600 text-white px-8 py-4 uppercase tracking-widest text-xs font-bold transition-all duration-300 flex items-center justify-center whitespace-nowrap"
              >
                Check Availability
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;