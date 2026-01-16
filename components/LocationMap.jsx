import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const LocationMap = () => {
  return (
    <section id="location" className="w-full bg-obsidian-900 text-white">
      <div className="flex flex-col lg:flex-row h-full lg:h-[600px]">
        
        {/* Info Panel */}
        <div className="w-full lg:w-1/3 p-12 lg:p-24 flex flex-col justify-center bg-obsidian-800 relative z-10">
          <span className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-4">Location</span>
          <h2 className="text-4xl font-serif mb-8">Visit Us</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-gold-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-serif text-lg mb-2">Address</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  128 Obsidian Avenue<br />
                  Metropolis District, NY 10012<br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-gold-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-serif text-lg mb-2">Concierge</h4>
                <p className="text-gray-400 font-light">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 text-gold-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-serif text-lg mb-2">Inquiries</h4>
                <p className="text-gray-400 font-light">
                  reservations@obsidian-heights.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full lg:w-2/3 h-[400px] lg:h-auto bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sNew%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Hotel Location"
                className="absolute inset-0 w-full h-full object-cover"
            ></iframe>
        </div>

      </div>
    </section>
  );
};

export default LocationMap;
