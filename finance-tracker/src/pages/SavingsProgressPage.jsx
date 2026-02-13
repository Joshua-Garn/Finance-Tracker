import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const SavingsProgressPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const savings = [
    { id: 1, name: 'Emergency Fund', description: '6 months of expenses saved', goal: 10000, amount: 8500 },
    { id: 2, name: 'Vacation', description: 'Summer trip to Europe', goal: 5000, amount: 2300 },
    { id: 3, name: 'New Car', description: 'Down payment for electric vehicle', goal: 15000, amount: 4500 },
    { id: 4, name: 'Home Improvement', description: 'Kitchen renovation project', goal: 3000, amount: 1200 },
    { id: 5, name: 'Retirement', description: '401k retirement account', goal: 50000, amount: 12000 },
    { id: 6, name: 'Emergency Backup', description: 'Additional emergency savings', goal: 5000, amount: 3000 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Savings Progress</h1>
            </div>
            <button 
              onClick={openModal}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>New Savings</span>
            </button>
          </div>

          {/* Savings List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-6 font-medium text-gray-700">Savings</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">Description</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">Goal</th>
                    <th className="text-right py-3 px-6 font-medium text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {savings.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-6">
                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                      </td>
                      <td className="py-3 px-6 text-gray-700">{item.description}</td>
                      <td className="py-3 px-6 text-gray-600">${item.goal.toLocaleString()}</td>
                      <td className="py-3 px-6 text-right font-medium text-blue-600">${item.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SavingsProgressPage;
