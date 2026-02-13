import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import ExpensesPage from './pages/ExpensesPage';
import IncomePage from './pages/IncomePage';
import SavingsProgressPage from './pages/SavingsProgressPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <Dashboard />
            <Footer />
          </div>
        } />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/savings" element={<SavingsProgressPage />} />
      </Routes>
    </Router>
  );
}

export default App;
