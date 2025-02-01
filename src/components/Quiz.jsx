/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { fetchQuizData } from "../service/quizService.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Quiz.css"; // Custom CSS for styling

const Quiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [timer, setTimer] = useState(10); // ⏳ Timer starts from 10 seconds

    useEffect(() => {
        const loadQuiz = async () => {
            const data = await fetchQuizData();
            if (data && data.questions && Array.isArray(data.questions) && data.questions.length > 0) {
                setQuizData(data.questions);
            }
        };
        loadQuiz();
    }, []);

    // Function to handle time-out scenario
    const handleTimeout = useCallback(() => {
        setSelectedAnswer("Time Out");
        setTimeout(() => {
            moveToNextQuestion();
        }, 1500);
    }, [currentQuestion, quizData.length]);

    // Timer logic
    useEffect(() => {
        if (selectedAnswer === null && timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(countdown);
        } else if (timer === 0) {
            handleTimeout();
        }
    }, [timer, selectedAnswer, handleTimeout]);

    const handleAnswerClick = (selectedOption) => {
        if (quizData.length === 0) return;

        const currentQuestionData = quizData[currentQuestion];
        const correctAns = currentQuestionData.options.find(opt => opt.is_correct)?.description;

        setSelectedAnswer(selectedOption);
        setCorrectAnswer(correctAns);

        if (selectedOption === correctAns) {
            setScore((prevScore) => prevScore + 1);
        }

        setTimeout(() => {
            moveToNextQuestion();
        }, 1500);
    };

    // Move to next question
    const moveToNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setCorrectAnswer(null);
            setTimer(10); // Reset timer for the next question
        } else {
            setIsQuizFinished(true);
        }
    };

    return (
        <div className="quiz-page">
            <div className="quiz-container">
                {isQuizFinished ? (
                    <div className="result-screen">
                        <h2>🎉 Quiz Completed!</h2>
                        <p>Your Score: <span className="score">{score} / {quizData.length}</span></p>
                        <button className="restart-btn" onClick={() => window.location.reload()}>Play Again</button>
                    </div>
                ) : (
                    quizData.length > 0 && currentQuestion < quizData.length ? (
                        <div className="question-section">
                            <h3 className="question">{quizData[currentQuestion]?.description}</h3>

                            {/* Timer Display */}
                            <div className={`timer ${timer <= 3 ? "timer-warning" : ""}`}>⏳ {timer}s</div>

                            <div className="options">
                                {quizData[currentQuestion]?.options?.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`option-btn ${
                                            selectedAnswer
                                                ? option.description === correctAnswer
                                                    ? "correct-answer-highlight"
                                                    : option.description === selectedAnswer
                                                        ? "wrong-answer-highlight"
                                                        : ""
                                                : ""
                                        }`}
                                        onClick={() => handleAnswerClick(option.description)}
                                        disabled={selectedAnswer !== null}
                                    >
                                        {option.description}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="loading-text">Loading questions...</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Quiz;
