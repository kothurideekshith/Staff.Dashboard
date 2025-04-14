
import React from 'react';
import { DollarSign, Clock, FileText } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  const getIcon = () => {
    switch (label) {
      case 'Earned':
        return <DollarSign size={16} className="text-gray-500" />;
      case 'Hours Worked':
        return <Clock size={16} className="text-gray-500" />;
      case 'Tax':
        return <FileText size={16} className="text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl p-3 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold text-lg">{value}</div>
          <div className="text-gray-500 text-xs">{label}</div>
        </div>
        {getIcon()}
      </div>
    </div>
  );
};

export default StatCard;
