import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import DropdownMenu from '@/components/DropdownMenu';
import { motion } from 'framer-motion';

const Navigation = ({ mobile = false, onClose }) => {
  const { t = {} } = useLanguage() || {};
  const location = useLocation();

  const nav = t?.nav || {};
  const subP = nav?.subProducts || {};
  const subS = nav?.subSolutions || {};
  const subR = nav?.subResources || {};

  const productsItems = [
    { label: subP?.all || 'All Products', path: '/products' },
    { label: subP?.radiant || 'Radiant Heating', path: '/products/radiant-heating' },
    { label: subP?.infrared || 'Infrared Heating', path: '/products/infrared-heating' },
    { label: subP?.moisture || 'Moisture Elimination', path: '/products/moisture-elimination' },
    { label: subP?.coating || 'Thermal Coating', path: '/products/thermal-coating' },
    { label: subP?.eco || 'Eco Fireplaces', path: '/products/eco-fireplaces' },
    { label: subP?.water || 'Electric Water Heaters', path: '/products/water-heaters' }
  ];

  const solutionsItems = [
    { label: subS?.all || 'All Solutions', path: '/solutions' },
    { label: subS?.moisture || 'Eliminate Moisture', path: '/solutions/eliminate-moisture' },
    { label: subS?.costs || 'Reduce Costs', path: '/solutions/reduce-heating-costs' },
    { label: subS?.outdoor || 'Outdoor Comfort', path: '/solutions/outdoor-comfort' },
    { label: subS?.business || 'Sustainable Business', path: '/solutions/sustainable-business' },
    { label: subS?.construction || 'Construction', path: '/solutions/construction-rehabilitation' }
  ];

  const resourcesItems = [
    { label: subR?.caseStudies || 'Case Studies', path: '/case-studies' },
    { label: subR?.learnHub || 'Learning Center', path: '/learn-hub' }
  ];

  const singleLinks = [
    { label: nav?.about || 'About', path: '/about' },
    { label: nav?.contact || 'Contact', path: '/contact' }
  ];

  const linkClass = (path) => `
    ${mobile ? 'block py-3 text-lg border-b border-gray-100' : 'px-3 py-2 text-sm lg:text-base'}
    font-medium transition-all duration-300 whitespace-nowrap
    ${location.pathname === path 
      ? 'text-orange-600' 
      : 'text-gray-700 hover:text-orange-600'
    }
  `;

  const handleClick = () => {
    if (mobile && onClose) onClose();
  };

  return (
    <nav className={mobile ? 'flex flex-col w-full' : 'hidden lg:flex items-center space-x-2 xl:space-x-4'}>
      <motion.div initial={mobile ? { opacity: 0, x: -20 } : {}} animate={mobile ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}>
        <DropdownMenu label={nav?.products || 'Products'} items={productsItems} mobile={mobile} onClose={onClose} />
      </motion.div>
      
      <motion.div initial={mobile ? { opacity: 0, x: -20 } : {}} animate={mobile ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
        <DropdownMenu label={nav?.solutions || 'Solutions'} items={solutionsItems} mobile={mobile} onClose={onClose} />
      </motion.div>

      <motion.div initial={mobile ? { opacity: 0, x: -20 } : {}} animate={mobile ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
        <DropdownMenu label={nav?.resources || 'Resources'} items={resourcesItems} mobile={mobile} onClose={onClose} />
      </motion.div>

      {singleLinks.map((item, index) => (
        <motion.div
          key={item.path}
          initial={mobile ? { opacity: 0, x: -20 } : {}}
          animate={mobile ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 + (index * 0.1) }}
        >
          <Link 
            to={item.path} 
            className={linkClass(item.path)}
            onClick={handleClick}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default Navigation;