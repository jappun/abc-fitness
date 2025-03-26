import React, { useState } from 'react';
import { BellDot, QrCode, Calendar, Dumbbell, User, Clock, Rocket } from 'lucide-react';
import BusynessIndicator from './components/BusynessIndicator';
import FutureBusyness from './components/FutureBusyness';

function App() {
  const [isFutureModalOpen, setIsFutureModalOpen] = useState(false);
  const date = "24 Mar 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <QrCode className="w-6 h-6 text-gray-600" />
        <img
          src="https://www.trevorlindenfitness.com/wp-content/uploads/2019/01/Club16.gif"
          alt="Club 16 Logo"
          className="h-8"
        />
        <BellDot className="w-6 h-6 text-gray-600" />
      </header>

      <main className="px-4 py-6">
        <BusynessIndicator />
        
        <button
          onClick={() => setIsFutureModalOpen(true)}
          className="w-full mb-6 flex items-center justify-between p-4 rounded-lg border-2 border-solid border-orange-500"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-500" />
            <span className="font-medium">When do you want to workout?</span>
          </div>
          <span className="text-orange-500">&gt;</span>
        </button>
        
        <h1 className="text-xl font-semibold mb-4">THINGS TO DO TODAY</h1>
        
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl text-gray-600">{date}</span>
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center text-orange-500">
            </button>
            <button className="text-orange-500">&lt;</button>
            <button className="text-orange-500">&gt;</button>
          </div>
        </div>

        <div className="text-center py-8">
          <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-xl font-medium mb-2">Nothing Scheduled</h2>
          <p className="text-gray-600">
            Take a break or hit + to add a workout or activity.
          </p>
        </div>

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4">
          <div className="flex items-center justify-between">
            <button className="text-orange-500">
              <div className="flex flex-col items-center">
                <Rocket className="w-6 h-6" />
              </div>
            </button>
            <button>
              <div className="flex flex-col items-center">
                <Calendar className="w-6 h-6 text-gray-400" />
              </div>
            </button>
            <button>
              <div className="flex flex-col items-center">
                <Dumbbell className="w-6 h-6 text-gray-400" />
              </div>
            </button>
            <button>
              <div className="flex flex-col items-center">
                <User className="w-6 h-6 text-gray-400" />
              </div>
            </button>
          </div>
        </nav>
      </main>

      <FutureBusyness
        isOpen={isFutureModalOpen}
        onClose={() => setIsFutureModalOpen(false)}
      />
    </div>
  );
}

export default App;