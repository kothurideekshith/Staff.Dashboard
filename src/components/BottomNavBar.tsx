
import React from 'react';
import { Home, Calendar, DollarSign, ClipboardList, Settings } from 'lucide-react';

const BottomNavBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl p-2">
      <div className="flex justify-between items-center">
        <NavItem icon={<Home size={20} />} label="Home" active />
        <NavItem icon={<Calendar size={20} />} label="Schedule" />
        <NavItem icon={<DollarSign size={20} />} label="Earnings" />
        <NavItem icon={<ClipboardList size={20} />} label="Timesheets" />
        <NavItem icon={<Settings size={20} />} label="Settings" />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  return (
    <div className={`flex flex-col items-center p-1 ${active ? 'text-[#4ac4ba]' : 'text-gray-500'}`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

export default BottomNavBar;
