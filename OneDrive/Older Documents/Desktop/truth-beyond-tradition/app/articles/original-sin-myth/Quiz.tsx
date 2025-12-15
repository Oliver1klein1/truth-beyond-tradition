'use client';

import { useState } from 'react';

export default function OriginalSinQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (index: number, isCorrect: boolean) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const correctAnswer = 2; // Option C (0-indexed)

  return (
    <div className="my-8">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500 rounded-lg p-4 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 transition-all"
      >
        <h4 className="text-xl font-bold mb-2 text-white">📊 Interactive Quiz: Test Your Knowledge</h4>
        <p className="text-sm text-gray-300">Click to explore what you really know about original sin doctrine</p>
      </div>

      {isOpen && (
        <div className="mt-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h5 className="font-bold mb-4 text-white text-lg">Question 1: When was the doctrine of original sin first formalized?</h5>
          
          <div className="space-y-2">
            {[
              { text: "A) By Jesus himself", correct: false },
              { text: "B) By the Apostle Paul", correct: false },
              { text: "C) By Augustine in the 4th century", correct: true },
              { text: "D) In the original Hebrew texts", correct: false },
            ].map((option, index) => (
              <div
                key={index}
                onClick={() => handleAnswerClick(index, option.correct)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedAnswer === index
                    ? option.correct
                      ? 'bg-green-900 border-green-500 text-white'
                      : 'bg-red-900 border-red-500 text-white'
                    : 'bg-gray-900 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-cyan-500'
                }`}
              >
                {option.text}
              </div>
            ))}
          </div>

          {showResult && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                selectedAnswer === correctAnswer
                  ? 'bg-green-800 text-green-100'
                  : 'bg-red-800 text-red-100'
              }`}
            >
              {selectedAnswer === correctAnswer
                ? 'Correct! Augustine developed the doctrine in the 4th century.'
                : 'Incorrect. Try again!'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

