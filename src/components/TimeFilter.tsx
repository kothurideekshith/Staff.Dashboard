
import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, addMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TimeFilterProps {
  activeFilter: 'week' | 'today' | 'month' | 'custom';
  onFilterChange: (filter: 'week' | 'today' | 'month' | 'custom') => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({ activeFilter, onFilterChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const moveDate = (direction: 'prev' | 'next') => {
    if (activeFilter === 'week') {
      const days = direction === 'prev' ? -7 : 7;
      setCurrentDate(prev => addDays(prev, days));
    } else if (activeFilter === 'month') {
      const months = direction === 'prev' ? -1 : 1;
      setCurrentDate(prev => addMonths(prev, months));
    } else if (activeFilter === 'today') {
      const days = direction === 'prev' ? -1 : 1;
      setCurrentDate(prev => addDays(prev, days));
    } else if (activeFilter === 'custom') {
      const days = direction === 'prev' ? -14 : 14;
      setCurrentDate(prev => addDays(prev, days));
    }
  };

  const getDateRangeText = () => {
    if (activeFilter === 'week') {
      const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
      const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
      return `${format(weekStart, 'd MMM')} - ${format(weekEnd, 'd MMM')}`;
    } else if (activeFilter === 'today') {
      return format(currentDate, 'd MMMM yyyy');
    } else if (activeFilter === 'month') {
      return format(currentDate, 'MMMM yyyy');
    } else if (activeFilter === 'custom') {
      const start = addDays(currentDate, -7);
      const end = addDays(currentDate, 7);
      return `${format(start, 'd MMM')} - ${format(end, 'd MMM')}`;
    }
    return '';
  };

  return (
    <div className="bg-white rounded-xl p-3 shadow-sm flex justify-between items-center">
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-gray-700 font-medium">
            {activeFilter === 'week' ? 'Week' : 
             activeFilter === 'today' ? 'Today' : 
             activeFilter === 'month' ? 'Month' : 'Custom'}
            <ChevronDown size={16} className="ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem onClick={() => onFilterChange('week')}>Week</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterChange('today')}>Today</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterChange('month')}>Month</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterChange('custom')}>Custom</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="ml-2 text-gray-600">{getDateRangeText()}</span>
      </div>
      <div className="flex items-center">
        <button onClick={() => moveDate('prev')} className="p-1 hover:bg-gray-100 rounded-full">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => moveDate('next')} className="p-1 hover:bg-gray-100 rounded-full ml-1">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TimeFilter;
