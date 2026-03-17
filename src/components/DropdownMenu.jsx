import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const DropdownMenu = ({ label = 'Menu', items = [], mobile = false, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (!mobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!mobile) setIsOpen(false);
  };

  const handleClick = () => {
    if (mobile) setIsOpen(!isOpen);
  };

  const isAnyChildActive = (items || []).some(item => location.pathname === item.path || location.pathname.startsWith(item.path + '/'));

  return (
    <div 
      className={`relative ${mobile ? 'w-full' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className={`flex items-center justify-between w-full font-medium transition-colors duration-300 ${
          mobile ? 'py-3 text-lg border-b border-gray-100' : 'px-3 py-2 text-sm lg:text-base'
        } ${isAnyChildActive || isOpen ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: mobile ? 0 : 10, height: mobile ? 0 : 'auto' }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: mobile ? 0 : 10, height: mobile ? 0 : 'auto' }}
            transition={{ duration: 0.2 }}
            className={`${
              mobile 
                ? 'overflow-hidden pl-4 flex flex-col space-y-2 py-2' 
                : 'absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-2 z-50'
            }`}
          >
            {(items || []).map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                  if (onClose) onClose();
                }}
                className={`block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                  location.pathname === item.path ? 'text-orange-600 font-semibold bg-orange-50/50' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;