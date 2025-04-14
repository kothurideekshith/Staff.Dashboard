
import React from 'react';
import { ChevronRight } from 'lucide-react';

type ShiftDay = {
  day: string;
  start: string;
  end: string;
  time: string;
  pay: string;
};

interface ShiftTableProps {
  shifts: ShiftDay[];
  totalTime: string;
  totalPay: string;
}

const ShiftTable: React.FC<ShiftTableProps> = ({ shifts, totalTime, totalPay }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-4">
      {/* Headers */}
      <div className="grid grid-cols-5 py-3 px-4 font-medium text-gray-800 text-sm">
        <div>Day</div>
        <div>Start</div>
        <div>End</div>
        <div>Time</div>
        <div>Pay</div>
      </div>

      {/* Shift rows */}
      <div className="px-4">
        {shifts.map((shift, index) => (
          <div key={index} className="shift-row text-sm">
            <div className="font-medium">{shift.day}</div>
            <div className={shift.start !== 'Set' ? 'text-blue-500' : 'text-blue-500'}>
              {shift.start}
            </div>
            <div className={shift.end !== 'Set' ? 'text-blue-500' : 'text-blue-500'}>
              {shift.end}
            </div>
            <div className={shift.time === '0h 0m' ? 'text-gray-500' : ''}>
              {shift.time}
            </div>
            <div className="flex items-center justify-between">
              <span>{shift.pay}</span>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="border-t border-gray-200 mt-2">
        <div className="px-4 py-3 flex justify-between font-medium text-sm">
          <span>Total Time</span>
          <span>{totalTime}</span>
        </div>
        <div className="px-4 py-3 flex justify-between font-medium text-sm border-t border-gray-200">
          <span>Total Pay</span>
          <span>{totalPay}</span>
        </div>
      </div>
    </div>
  );
};

export default ShiftTable;
