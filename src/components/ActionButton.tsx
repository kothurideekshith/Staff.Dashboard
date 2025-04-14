
import React from 'react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'green' | 'white';
  className?: string;
  Icon?: React.ElementType;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = 'white',
  className,
  Icon,
  onClick,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'yellow':
        return 'bg-[#f3d25a] text-white';
      case 'green':
        return 'bg-[#4ac4ba] text-white';
      case 'white':
      default:
        return 'bg-white text-gray-800';
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center gap-2 py-3 px-4 rounded-xl shadow-sm font-medium',
        getVariantClasses(),
        className
      )}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

export default ActionButton;
