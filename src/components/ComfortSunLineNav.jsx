import React from 'react';
import { NavLink } from 'react-router-dom';

const LINES = [
  { label: 'Polivalente', path: '/products/comfortsun/polivalente', color: 'blue' },
  { label: 'Profissional', path: '/products/comfortsun/professional', color: 'gray' },
  { label: 'Deluxe', path: '/products/comfortsun/deluxe', color: 'amber' },
  { label: 'Especializado', path: '/products/comfortsun/especializado', color: 'teal' },
];

const COLORS = {
  blue:  { active: 'bg-blue-600 text-white',  idle: 'text-blue-300 hover:text-white hover:bg-white/10' },
  gray:  { active: 'bg-gray-500 text-white',  idle: 'text-gray-300 hover:text-white hover:bg-white/10' },
  amber: { active: 'bg-amber-500 text-white',  idle: 'text-amber-300 hover:text-white hover:bg-white/10' },
  teal:  { active: 'bg-teal-500 text-white',   idle: 'text-teal-300 hover:text-white hover:bg-white/10' },
};

export default function ComfortSunLineNav() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {LINES.map(l => {
        const c = COLORS[l.color];
        return (
          <NavLink
            key={l.path}
            to={l.path}
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? c.active : c.idle}`
            }
          >
            {l.label}
          </NavLink>
        );
      })}
    </div>
  );
}
