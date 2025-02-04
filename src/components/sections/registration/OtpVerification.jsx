import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
const OtpVerification = ({ setStep, setEmailVerified }) => { 
  const inputRefs = [useRef(null), useRef(null), useRef(null), 
                    useRef(null), useRef(null), useRef(null)];
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email] = useState("user@example.com"); 

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerifyClick = () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      setStep(2);
    } else {
      alert("Please enter all digits of the OTP");
    }
  };

  const handleResendClick = () => {
    alert("OTP resent successfully!");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-md w-full mx-auto"
    >
      <div className="text-center mb-8">
        <div className="bg-muted-violet w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Mail className="w-8 h-8 text-indigo-500" />
        </div>
        <h2 className="text-3xl font-bold text-center text-indigo-300">Verify your email</h2>
        <p className="text-gray-400 text-sm">
          We've sent a verification code to<br />
          <span className="font-medium text-white">{email}</span>
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center space-x-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-indigo-500 text-center text-lg font-semibold border-1 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-deep-gray border-muted-indigo-500"
            />
          ))}
        </div>

        <button
          onClick={handleVerifyClick}
          className="w-full bg-indigo-500 p-3 rounded-lg hover:bg-dark-purple transition-colors font-medium"
        >
          Verify Email
        </button>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Didn't receive the code?{' '}
            <button
              onClick={handleResendClick}
              className="text-indigo-500 hover:text-indigo-700 font-medium"
            >
              Resend
            </button>
          </p>
        </div>
        <button
          onClick={() => {
            setStep(1); 
            setEmailVerified(false); 
          }}
          className="w-full flex items-center justify-center space-x-2 text-gray-400 hover:text-white"
        >
          <ArrowLeft size={16} />
          <span>Back to registration</span>
        </button>

      </div>
    </motion.div>
  );
};

export default OtpVerification;
