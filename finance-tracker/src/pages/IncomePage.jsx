import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import IncomeModal from '../components/IncomeModal';

const IncomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSource, setSelectedSource] = useState('All');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sources = ['All', 'Salary', 'Freelance', 'Investment', 'Other'];

  const income = [
    { id: 1, source: 'Salary', icon: '💰', description: 'Monthly Salary', date: 'Feb 1, 2024', amount: 2925.00 },
    { id: 2, source: 'Freelance', icon: '💻', description: 'Web Development Project', date: 'Feb 5, 2024', amount: 850.00 },
    { id: 3, source: 'Investment', icon: '📈', description: 'Dividend Payment', date: 'Feb 8, 2024', amount: 125.50 },
    { id: 4, source: 'Salary', icon: '💰', description: 'Bonus Payment', date: 'Feb 10, 2024', amount: 500.00 },
    { id: 5, source: 'Freelance', icon: '💻', description: 'Consulting Work', date: 'Feb 12, 2024', amount: 320.00 },
    { id: 6, source: 'Other', icon: '💵', description: 'Cash Back Rewards', date: 'Feb 14, 2024', amount: 45.00 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Recent Income</h1>
              <p className="text-green-600 mt-1">You've earned $5,850.00 this month</p>
            </div>
            <button 
              onClick={openModal}
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Income</span>
            </button>
          </div>

          {/* Filter Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {sources.map((source) => (
                  <button
                    key={source}
                    onClick={() => setSelectedSource(source)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedSource === source
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {source}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search income..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Income List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-6 font-medium text-gray-700">Source</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">Description</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">Date</th>
                    <th className="text-right py-3 px-6 font-medium text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {income.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-6">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm font-medium text-gray-900">{item.source}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-gray-700">{item.description}</td>
                      <td className="py-3 px-6 text-gray-600">{item.date}</td>
                      <td className="py-3 px-6 text-right font-medium text-green-600">+${item.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">Showing 6 of 45 transactions</span>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <IncomeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default IncomePage;
