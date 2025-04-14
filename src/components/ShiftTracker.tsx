
import React, { useState } from 'react';
import StatCard from './StatCard';
import ActionButton from './ActionButton';
import ShiftTable from './ShiftTable';
import TimeFilter from './TimeFilter';
import BottomNavBar from './BottomNavBar';
import { Clock, Plus, ArrowLeftRight, CalendarClock, ArrowRight, MessageSquare } from 'lucide-react';

const ShiftTracker: React.FC = () => {
  const [isClockIn, setIsClockIn] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'week' | 'today' | 'month' | 'custom'>('week');
  
  // Sample data
  const shifts = [
    { day: 'Mon', start: '8:21am', end: '5:25pm', time: '5h 1m', pay: '£50.17' },
    { day: 'Tue', start: 'Set', end: 'Set', time: '0h 0m', pay: '£0' },
    { day: 'Wed', start: 'Set', end: 'Set', time: '0h 0m', pay: '£0' },
    { day: 'Thu', start: 'Set', end: 'Set', time: '0h 0m', pay: '£0' },
    { day: 'Fri', start: '10:56am', end: '10:56am', time: '24h 0m', pay: '£240' },
    { day: 'Sat', start: 'Set', end: 'Set', time: '0h 0m', pay: '£0' },
    { day: 'Sun', start: 'Set', end: 'Set', time: '0h 0m', pay: '£0' },
  ];

  return (
    <div className="max-w-md mx-auto py-4 px-4 font-['Golos_Text'] pb-24 bg-[#f9f9f9] min-h-screen">
      {/* Time Filters */}
      <TimeFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 mt-3">
        <StatCard value="£3.99" label="Earned" />
        <StatCard value="52:45" label="Hours Worked" />
        <StatCard value="£56" label="Tax" />
      </div>

      {/* Welcome & Clock In */}
      <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
        <div>
          <h2 className="font-medium text-lg">Welcome Nick</h2>
          <p className="text-sm">
            Shift Starts in <span className="text-[#f3d25a] font-medium">5h 27mins</span>
          </p>
        </div>
        <div className="mt-3 space-y-2">
          <ActionButton 
            variant="yellow" 
            className="w-full justify-center"
            Icon={Clock}
          >
            Auto Clock - In
          </ActionButton>
          <ActionButton 
            variant="green" 
            className="w-full justify-center"
            Icon={Clock}
          >
            Clock - In
          </ActionButton>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <ActionButton Icon={CalendarClock} className="justify-center">
          Add Availability
        </ActionButton>
        <ActionButton Icon={ArrowLeftRight} className="justify-center">
          Requests
        </ActionButton>
      </div>

      {/* Shift Table */}
      <div className="mt-4">
        <ShiftTable 
          shifts={shifts} 
          totalTime="29h 1m" 
          totalPay="£290.17" 
        />
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};

export default ShiftTracker;
