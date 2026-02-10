import React from 'react';

const RecentActivity = () => {
  const transactions = [
    { id: 1, name: 'Grocery Store', category: 'Food', amount: -85.32, date: 'Today', icon: '🛒' },
    { id: 2, name: 'Salary Deposit', category: 'Income', amount: 2925.00, date: 'Yesterday', icon: '💰' },
    { id: 3, name: 'Electric Bill', category: 'Utilities', amount: -120.50, date: '2 days ago', icon: '⚡' },
    { id: 4, name: 'Restaurant', category: 'Food', amount: -45.80, date: '3 days ago', icon: '🍽️' },
    { id: 5, name: 'Gas Station', category: 'Transport', amount: -65.00, date: '4 days ago', icon: '⛽' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{transaction.icon}</div>
              <div>
                <p className="text-sm font-medium text-gray-900">{transaction.name}</p>
                <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
              </div>
            </div>
            <div className={`text-sm font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
