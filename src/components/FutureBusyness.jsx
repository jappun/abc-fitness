// modal to check future busyness of the gym
import React, { useState } from 'react';
import { format } from 'date-fns';
import { predictBusyness } from '../utils/busyness';
import { Calendar as CalendarIcon, Clock, X } from 'lucide-react';

const FutureBusyness = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = predictBusyness(selectedTime);
    setPrediction(result);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Check Future Gym Busyness</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  min={format(new Date(), 'yyyy-MM-dd')}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
            >
              Check Busyness
            </button>
          </div>
        </form>

        {prediction && (
          <div className="p-4 border-t">
            <h3 className="font-medium mb-2">Predicted Busyness:</h3>
            <div className={`p-3 rounded-md ${
              prediction.level === 'not busy' ? 'bg-green-50 text-green-700' :
              prediction.level === 'moderately busy' ? 'bg-orange-50 text-orange-700' :
              'bg-red-50 text-red-700'
            }`}>
              <p className="font-medium">{prediction.level.charAt(0).toUpperCase() + prediction.level.slice(1)}</p>
              <p className="text-sm mt-1">
                Estimated capacity: {Math.round(prediction.percentage * 100)}%
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FutureBusyness;