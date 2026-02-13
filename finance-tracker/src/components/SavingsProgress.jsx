import React from 'react';
import { useNavigate } from 'react-router-dom';

const SavingsProgress = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/savings');
  };

  const savingsGoals = [
    { name: 'Emergency Fund', current: 8500, target: 10000, color: 'blue' },
    { name: 'Vacation', current: 2300, target: 5000, color: 'green' },
    { name: 'New Car', current: 4500, target: 15000, color: 'purple' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Savings Progress</h3>
        <button 
          onClick={handleViewAll}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {savingsGoals.map((goal, index) => {
          const percentage = (goal.current / goal.target) * 100;
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{goal.name}</span>
                <span className="text-sm text-gray-600">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-${goal.color}-600 h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 text-right">
                {percentage.toFixed(1)}% complete
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">Total Saved</span>
          <span className="text-lg font-bold text-gray-900">$15,300</span>
        </div>
      </div>
    </div>
  );
};

export default SavingsProgress;
