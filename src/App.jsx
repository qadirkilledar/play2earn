// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ChatBot from './components/ChatBot';
import './App.css';
import Login from './components/Login';
import HelpAndSupport from './components/helpAndSupport'
import Earn from './components/Earn';
import ReferralsPage from './components/ReferralsPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/referrals" element={<ReferralsPage />} />
          <Route path="/earn" element={<Earn />} />
          {/* Add other routes here */}

          {/* foorter routes */}
          <Route path="/help-and-support" element={<HelpAndSupport />} />
          <Route path="/privacy" element={<PrivacyPolicy />} /> 
          <Route path="/terms" element={<TermsAndConditions />} />
         
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
