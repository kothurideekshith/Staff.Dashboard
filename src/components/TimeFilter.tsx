
import React from 'react';
import { Calendar, CalendarDays, CalendarClock, Settings } from 'lucide-react';

interface TimeFilterProps {
  activeFilter: 'week' | 'today' | 'month' | 'custom';
  onFilterChange: (filter: 'week' | 'today' | 'month' | 'custom') => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="bg-white rounded-xl p-2 shadow-sm flex justify-between">
      <button
        onClick={() => onFilterChange('week')}
        className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg ${
          activeFilter === 'week' ? 'bg-gray-100 font-medium' : ''
        }`}
      >
        <CalendarDays size={16} />
        <span>Week</span>
      </button>
      
      <button
        onClick={() => onFilterChange('today')}
        className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg ${
          activeFilter === 'today' ? 'bg-gray-100 font-medium' : ''
        }`}
      >
        <Calendar size={16} />
        <span>Today</span>
      </button>
      
      <button
        onClick={() => onFilterChange('month')}
        className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg ${
          activeFilter === 'month' ? 'bg-gray-100 font-medium' : ''
        }`}
      >
        <CalendarClock size={16} />
        <span>Month</span>
      </button>
      
      <button
        onClick={() => onFilterChange('custom')}
        className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg ${
          activeFilter === 'custom' ? 'bg-gray-100 font-medium' : ''
        }`}
      >
        <Settings size={16} />
        <span>Custom</span>
      </button>
    </div>
  );
};

export default TimeFilter;
