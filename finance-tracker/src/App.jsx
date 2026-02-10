import React from 'react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
