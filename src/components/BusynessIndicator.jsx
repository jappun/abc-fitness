// component at the top of the main page to show how busy the gym is
import React from 'react';
import { getCurrentBusyness } from '../utils/busyness';
import { Users } from 'lucide-react';

const BusynessIndicator = () => {
  const { level, percentage } = getCurrentBusyness();  
  const getBusynessColor = () => {
    switch (level) {
      case 'not busy':
        return 'text-green-500';
      case 'moderately busy':
        return 'text-orange-400';
      case 'busy':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="p-4 mb-6">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Users className={`w-5 h-5 ${getBusynessColor()}`} />
          <span className="text-md">It's currently</span>
        </div>
        <span className={`text-md font-semibold ${getBusynessColor()}`}>
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default BusynessIndicator;