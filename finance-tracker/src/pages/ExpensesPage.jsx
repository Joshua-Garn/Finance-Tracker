import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TransactionModal from '../components/TransactionModal';

const ExpensesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const categories = ['All', 'Food', 'Transport', 'Shopping', 'Bills', 'Other'];

  const expenses = [
    { id: 1, category: 'Food', icon: '🛒', description: 'Grocery Store', date: 'Feb 10, 2024', amount: 85.32 },
    { id: 2, category: 'Transport', icon: '🚗', description: 'Gas Station', date: 'Feb 9, 2024', amount: 65.00 },
    { id: 3, category: 'Shopping', icon: '🛍️', description: 'Amazon Purchase', date: 'Feb 8, 2024', amount: 124.99 },
    { id: 4, category: 'Bills', icon: '📄', description: 'Electric Bill', date: 'Feb 7, 2024', amount: 120.50 },
    { id: 5, category: 'Food', icon: '🛒', description: 'Restaurant', date: 'Feb 6, 2024', amount: 45.80 },
    { id: 6, category: 'Other', icon: '📌', description: 'Subscription', date: 'Feb 5, 2024', amount: 29.99 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Recent Expenses</h1>
              <p className="text-gray-600 mt-1">You've spent $1,000.00 this month</p>
            </div>
            <button 
              onClick={openModal}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Expenses</span>
            </button>
          </div>

          {/* Filter Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search expenses..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Expense List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-6 font-medium text-gray-700">Category</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">Description</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">Date</th>
                    <th className="text-right py-3 px-6 font-medium text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense) => (
                    <tr key={expense.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-6">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">{expense.icon}</span>
                          <span className="text-sm font-medium text-gray-900">{expense.category}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-gray-700">{expense.description}</td>
                      <td className="py-3 px-6 text-gray-600">{expense.date}</td>
                      <td className="py-3 px-6 text-right font-medium text-red-600">-${expense.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">Showing 6 of 124 transactions</span>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <TransactionModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ExpensesPage;
