import React from 'react';

const CashFlowCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Cash Flow</h3>
        <select className="px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
        </select>
      </div>
      
      {/* Simple cash flow chart representation */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Income</span>
          <span className="text-sm font-medium text-green-600">+$5,850</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Expenses</span>
          <span className="text-sm font-medium text-red-600">-$3,240</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-red-600 h-2 rounded-full" style={{ width: '45%' }}></div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">Net Cash Flow</span>
            <span className="text-lg font-bold text-green-600">+$2,610</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashFlowCard;
