import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OtpVerification from './sections/registration/OtpVerification';
import OrganizationSetup from './sections/setup/OrganizationSetup';
import { FaGoogle } from 'react-icons/fa';
import IntegrationStep from './sections/integration/IntegrationStep';
import { Check } from 'lucide-react';

const UserRegistration = () => {
  const [step, setStep] = useState(1);
  const [emailVerified, setEmailVerified] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const StepIndicator = ({ currentStep }) => (
    <div className="flex justify-center items-center space-x-4 mb-8">
      {[1, 2, 3].map((num) => (
        <div key={num} className="flex items-center">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: num === currentStep ? 1.1 : 1 }}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-all 
              ${num === currentStep ? 'bg-indigo-700' : num < currentStep ? 'bg-indigo-500' : 'bg-gray-600'}`}
          >
            {num < currentStep ? <Check size={18} /> : num}
          </motion.div>
          {num < 3 && <div className="w-12 h-1 bg-gray-400"></div>}
        </div>
      ))}
    </div>
  );

  const RegistrationForm = () => (
    <motion.div {...fadeIn} className="max-w-md w-full mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-300">Create Your Account</h2>
      <p className="text-gray-400 text-center mb-6">Join us to get started</p>
      
      <div className="space-y-4">
        <input type="text" className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Full Name" />
        <input type="email" className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Email ID" />
        <input type="password" className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Password" />
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-indigo-500 text-white py-3 rounded-lg font-bold hover:bg-indigo-600 transition-all"
          onClick={() => setEmailVerified(true)}
        >
          Create Account
        </motion.button>
        
        <div className="flex items-center my-6">
          <div className="w-full border-t border-gray-500"></div>
          <span className="px-4 text-gray-400">Or</span>
          <div className="w-full border-t border-gray-500"></div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white py-3 rounded-lg border border-gray-600 hover:bg-gray-900"
        >
          <FaGoogle className="w-5 h-5" /> <span>Sign in with Google</span>
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-700 text-white flex flex-col items-center justify-center p-6">
      <StepIndicator currentStep={step} />
      <motion.div className="w-full max-w-lg p-6 bg-gray-800 rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          {step === 1 && !emailVerified && <RegistrationForm key="register" />}
          {step === 1 && emailVerified && <OtpVerification setStep={setStep} setEmailVerified={setEmailVerified} key="otp" />}
          {step === 2 && <OrganizationSetup setStep={setStep} key="org" />}
          {step === 3 && <IntegrationStep key="integration" />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default UserRegistration;
