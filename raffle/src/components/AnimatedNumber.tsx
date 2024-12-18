import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedNumberProps {
  targetNumber: number;
  duration: number; // Animation duration in seconds
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ targetNumber, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prev) => (prev + 1) % 10); // Cycle through numbers 0-9
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setCurrentNumber(targetNumber);
    }, duration * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [targetNumber, duration]);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        fontSize: '3rem',
        textAlign: 'center',
        margin: '1rem',
      }}
    >
      <div className='digit'>
      {currentNumber}
      </div>
    </motion.div>
  );
};

export default AnimatedNumber;
