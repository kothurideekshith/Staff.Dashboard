
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="bg-white rounded-xl p-3 shadow-sm">
      <div className="font-semibold text-lg">{value}</div>
      <div className="text-gray-500 text-xs">{label}</div>
    </div>
  );
};

export default StatCard;
