import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const questions = [
  {
    question: "Where did we first meet?",
    options: ["Tap House", "Coffee Shop", "Library", "Park"],
    correct: 0,
    explanation: "Tap House! Where it all began 💕"
  },
  {
    question: "What's our favorite thing to do together?",
    options: ["Watch movies", "Have deep conversations", "Go on adventures", "All of the above"],
    correct: 3,
    explanation: "All of the above! We love everything we do together 🌟"
  },
  {
    question: "What makes Smush Bubu special?",
    options: ["Her laugh", "Her kindness", "Her brilliance", "Everything about her"],
    correct: 3,
    explanation: "Everything about her makes her perfect 💛"
  },
  {
    question: "What's our favorite time of day?",
    options: ["Morning", "Afternoon", "Late night calls", "Any time together"],
    correct: 3,
    explanation: "Any time together is our favorite time 💕"
  },
  {
    question: "What's the best part of our relationship?",
    options: ["The inside jokes", "The comfort", "The growth", "All of it"],
    correct: 3,
    explanation: "Every part of our relationship is beautiful ✨"
  }
]

export default function LoveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setQuizCompleted(true)
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setQuizCompleted(false)
  }

  if (showResult) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Quiz Complete! 🎉
            </h2>
            <div className="text-6xl mb-4">
              {score === questions.length ? "💕" : score >= 3 ? "💛" : "😊"}
            </div>
            <p className="text-xl mb-4">
              You got {score} out of {questions.length} correct!
            </p>
            <p className="text-white/80 mb-6">
              {score === questions.length 
                ? "Perfect! You know our love story inside and out 💕"
                : score >= 3 
                ? "Great job! You really understand our relationship 💛"
                : "Nice try! Love is about learning and growing together 💕"
              }
            </p>
            <button
              onClick={resetQuiz}
              className="bg-gold text-ink font-semibold px-6 py-3 rounded-xl hover:opacity-90"
            >
              Take Quiz Again
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="quiz" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Love Quiz 💕
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"
        >
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/70">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="w-full bg-white/20 rounded-full h-2 ml-4">
                <div 
                  className="bg-gold h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6 text-center">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-3 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  selectedAnswer === index
                    ? 'bg-gold text-ink border-2 border-gold'
                    : 'bg-white/5 text-white border-2 border-transparent hover:bg-white/10'
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>

          {selectedAnswer !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className={`p-4 rounded-lg ${
                selectedAnswer === questions[currentQuestion].correct
                  ? 'bg-green-500/20 border border-green-500'
                  : 'bg-red-500/20 border border-red-500'
              }`}>
                <p className="text-sm">
                  {questions[currentQuestion].explanation}
                </p>
              </div>
            </motion.div>
          )}

          <div className="text-center">
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                selectedAnswer !== null
                  ? 'bg-gold text-ink hover:opacity-90'
                  : 'bg-white/20 text-white/50 cursor-not-allowed'
              }`}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
