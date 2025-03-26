// actual functionality for the features

import { checkIns, CAPACITY, BUSYNESS_THRESHOLDS } from '../data/mockData';


// dummy future busyness predictions 
// actual implementation could train a model using gym's historical data
export const predictBusyness = (time) => {
  const hour = parseInt(time.split(':')[0]);

  if (hour < 13 || hour > 20) {
    return { level: 'not busy', percentage: 0.15 };
  } else if (hour >= 17 && hour < 20) {
    return { level: 'busy', percentage: 0.85 };
  } else {
    return { level: 'moderately busy', percentage: 0.45 };
  }
};

// getting the current busyness using the last hour of check-ins
export const getCurrentBusyness = () => {
  // demo: try several times. 
  // 7:30AM: '2024-03-24T07:30:00'
  // 5:30PM: '2024-03-24T17:30:00'
  // 8:30PM: '2024-03-24T20:30:00'
    
  // sets to current time, unless a different one given
  const currentTime = new Date('2024-03-24T20:30:00'); 
  const hourAgo = new Date(currentTime.getTime() - 60 * 60 * 1000);
  
  const currentCheckins = checkIns.filter(checkin => 
    checkin.timestamp >= hourAgo && checkin.timestamp <= currentTime
  ).length;
  
  const percentage = currentCheckins / CAPACITY;
  
  let level;
  if (percentage <= BUSYNESS_THRESHOLDS.NOT_BUSY) {
    level = 'not busy';
  } else if (percentage <= BUSYNESS_THRESHOLDS.MODERATE) {
    level = 'moderately busy';
  } else {
    level = 'busy';
  }
  
  return { level, percentage };
};