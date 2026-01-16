import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-900 text-white border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-serif font-bold tracking-widest uppercase mb-6">
              Obsidian<span className="text-gold-400">.</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A definitive experience in luxury hospitality. Where timeless elegance meets modern comfort.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Suites</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Dining</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Wellness & Spa</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Policies</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Cancellation</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4 font-light">Subscribe for exclusive offers.</p>
            <div className="flex border-b border-gray-700 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none focus:outline-none text-white w-full placeholder-gray-600 font-light"
              />
              <button className="text-gold-400 text-xs uppercase font-bold tracking-wider hover:text-white transition-colors">
                Send
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} The Obsidian Heights. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
             <span>Facebook</span>
             <span>Instagram</span>
             <span>Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;