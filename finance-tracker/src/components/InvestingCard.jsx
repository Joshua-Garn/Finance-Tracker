import React from 'react';

const InvestingCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-8 text-white">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">Start Investing Today</h3>
          <p className="text-blue-100 mb-6 max-w-2xl">
            Grow your wealth with our smart investment tools. Get personalized recommendations 
            and track your portfolio performance in real-time.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
            <button className="text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="hidden lg:block ml-8">
          <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-blue-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">12.5%</div>
            <div className="text-blue-100 text-sm">Average Annual Return</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">$2.5M+</div>
            <div className="text-blue-100 text-sm">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">50K+</div>
            <div className="text-blue-100 text-sm">Active Investors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestingCard;
