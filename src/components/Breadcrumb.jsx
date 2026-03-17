import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items = [], dark = false }) => {
  const textColor = dark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-700';
  const dividerColor = dark ? 'text-white/40' : 'text-gray-300';
  const currentColor = dark ? 'text-white/90' : 'text-gray-900';

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li>
          <Link to="/" className={`flex items-center ${textColor} transition-colors`} aria-label="Home">
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        {items.slice(1).map((item, index) => (
          <React.Fragment key={item.path}>
            <li className={dividerColor} aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              {index === items.length - 2 ? (
                <span className={`font-medium ${currentColor}`}>{item.label}</span>
              ) : (
                <Link to={item.path} className={`${textColor} transition-colors`}>{item.label}</Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
