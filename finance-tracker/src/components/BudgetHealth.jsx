import React from 'react';

const BudgetHealth = () => {
  const budgetCategories = [
    { name: 'Housing', spent: 1200, budget: 1500, percentage: 80 },
    { name: 'Food', spent: 450, budget: 600, percentage: 75 },
    { name: 'Transportation', spent: 280, budget: 400, percentage: 70 },
    { name: 'Entertainment', spent: 180, budget: 200, percentage: 90 },
    { name: 'Utilities', spent: 150, budget: 250, percentage: 60 }
  ];

  const getHealthColor = (percentage) => {
    if (percentage <= 70) return 'green';
    if (percentage <= 85) return 'yellow';
    return 'red';
  };

  const getHealthText = (percentage) => {
    if (percentage <= 70) return 'Good';
    if (percentage <= 85) return 'Warning';
    return 'Over Budget';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Budget Health</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Good</span>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Warning</span>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Over</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {budgetCategories.map((category, index) => {
          const healthColor = getHealthColor(category.percentage);
          const healthText = getHealthText(category.percentage);
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
                <span className="text-xs text-gray-600">
                  ${category.spent} / ${category.budget}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-${healthColor}-500 h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${Math.min(category.percentage, 100)}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{category.percentage}% used</span>
                <span className={`text-xs font-medium text-${healthColor}-600`}>
                  {healthText}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">Overall Budget Health</span>
          <span className="text-sm font-medium text-yellow-600">Warning</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetHealth;
