import React, { useState } from 'react';
import TransactionModal from './TransactionModal';

const FinancialOverview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Financial Overview</h1>
          <button 
            onClick={openModal}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Transaction</span>
          </button>
        </div>
      </div>
      <TransactionModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default FinancialOverview;
