import React from 'react';

const WanderlustSection = () => {
  return (
    <div className="container px-4 md:px-6 py-16 w-full mx-auto">
      <div className="text-center mb-16 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
        </div>
        
        {/* Floating accent elements */}
        <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-12 w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-4 left-16 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-700"></div>
        
        {/* Main content */}
        <div className="relative z-10">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              ✈️ Trusted by 50,000+ travelers
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)]">
              Wanderlust?
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </span>
          </h2>
          
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Transform your travel dreams into extraordinary adventures with our 
            <span className="font-semibold text-gray-800"> award-winning service</span> and 
            <span className="font-semibold text-gray-800"> local expertise</span> spanning 
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-semibold"> 150+ destinations worldwide</span>
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                4.9★
              </div>
              <div className="text-sm text-gray-500 font-medium">Customer Rating</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                24/7
              </div>
              <div className="text-sm text-gray-500 font-medium">Support</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                15+
              </div>
              <div className="text-sm text-gray-500 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WanderlustSection;