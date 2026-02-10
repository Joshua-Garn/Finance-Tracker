import React from 'react';
import FinancialOverview from './FinancialOverview';
import SummaryCards from './SummaryCards';
import CashFlowCard from './CashFlowCard';
import SavingsProgress from './SavingsProgress';
import RecentActivity from './RecentActivity';
import BudgetHealth from './BudgetHealth';
import InvestingCard from './InvestingCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1">
        {/* Financial Overview Title */}
        <FinancialOverview />
        
        {/* Summary Cards Grid */}
        <SummaryCards />
        
        {/* Cash Flow and Savings Progress Grid */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CashFlowCard />
            </div>
            <div>
              <SavingsProgress />
            </div>
          </div>
        </div>
        
        {/* Recent Activity and Budget Health Grid */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity />
            <BudgetHealth />
          </div>
        </div>
        
        {/* Investing Card */}
        <div className="px-6 pb-6">
          <InvestingCard />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
