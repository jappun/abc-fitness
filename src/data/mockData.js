// some mock data to demonstrate features with

// basic gym data
export const CAPACITY = 20; 
export const BUSYNESS_THRESHOLDS = {
  NOT_BUSY: 0.32, 
  MODERATE: 0.65, 
  BUSY: 1.0, 
};

// one week of all check-ins at a gym
export const checkIns = [
  ...generateAllData('2024-03-23', 100), 
  ...generateAllData('2024-03-24', 100), 
  ...generateAllData('2024-03-25', 100), 
  ...generateAllData('2024-03-26', 100), 
  ...generateAllData('2024-03-27', 100),
  ...generateAllData('2024-03-28', 100), 
  ...generateAllData('2024-03-29', 100), 
];
// generates mock data
function generateAllData(date, count) {
  const checkIns = [];
  let idCounter = checkIns.length;

  // different hours of the day
  const morning = [5, 6, 7, 8]; 
  const midday = [11, 12, 13, 14, 15]; 
  const peak = [16, 17, 18, 19]; 
  const evening = [20, 21, 22]; 
  
  const timeSlots = [...morning, ...midday, ...evening];
  
  for (let i = 0; i < count; i++) {
    let hour;
    if (Math.random() < 0.65) {
      hour = peak[Math.floor(Math.random() * peak.length)];
    } else {
      hour = timeSlots[Math.floor(Math.random() * timeSlots.length)];
    }
    let minute = Math.floor(Math.random() * 60);
    let timestamp = new Date(`${date}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`);
    checkIns.push({ id: idCounter++, timestamp });
  }
  
  return checkIns;
}