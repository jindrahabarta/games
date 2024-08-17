'use client'
import React, { useEffect, useState } from 'react'
import QuestionCard from './_components/QuestionCard'
import End from './_components/End'
import InfoIcon from './_components/icons/InfoIcon'
import './_components/style.css'
import { motion, AnimatePresence } from 'framer-motion'

const Game1 = () => {
    const [questions, setQuestions] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const [end, setEnd] = useState(false)
    const [score, setScore] = useState<number>(0)
    const [showRules, setShowRules] = useState(false)

    function shuffle(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }
    useEffect(() => {
        fetch(
            'https://gist.githubusercontent.com/cmota/f7919cd962a061126effb2d7118bec72/raw/96ae8cbebd92c97dfbe53ad8927a45a28f8d2358/questions.json'
        )
            .then((response) => response.json())
            .then((questions: any[]) => {
                const filteredQuestions = shuffle(questions).slice(0, 10)

                setQuestions(filteredQuestions)
                setLoading(false)
            })
    }, [])

    const [start, setStart] = useState(false)
    const startGame = () => {
        setStart(true)
    }

    const endGame = () => {
        setEnd(true)
    }

    return (
        <main className="flex justify-center p-4 h-screen items-center">
            {end ? (
                <End score={score}></End>
            ) : loading ? (
                <p>Loading..</p>
            ) : !start ? (
                <div>
                    <button
                        onClick={startGame}
                        className="z-10 text-4xl border border-black border-l-4 border-b-8 p-4 hover:border-l hover:border-b  hover:bg-slate-100 duration-200 "
                    >
                        Generate
                    </button>

                    <div className="z-0 absolute flex items-end justify-start flex-col gap-2 top-[200px] right-[100px] sm:top-[200px] sm:right-[300px]">
                        <div
                            onMouseOver={() => {
                                setShowRules(true)
                            }}
                            onMouseLeave={() => {
                                setShowRules(false)
                            }}
                            className="p-1 rounded-full border border-black border-dotted "
                        >
                            <InfoIcon className="w-6 hover:cursor-pointer animate-spin-slow" />
                        </div>
                        <AnimatePresence>
                            {showRules && (
                                <motion.div
                                    // className={`${
                                    //   showRules ? "info-card-open" : "info-card-close"
                                    // }`}
                                    className="p-2 max-w-80 bg-yellow-200 border border-black overflow-hidden"
                                    initial={{
                                        width: 0,
                                        height: 0,
                                        padding: 0,
                                    }}
                                    animate={{
                                        width: [0, 300, 300],
                                        height: [0, 0, 350],
                                    }}
                                    exit={{
                                        width: [300, 300, 0],
                                        height: [350, 0, 0],
                                        padding: 0,
                                    }}
                                    transition={{
                                        type: 'tween',
                                        duration: 0.7,
                                    }}
                                >
                                    <h1 className="font-pixelify">
                                        How to play
                                    </h1>
                                    <p>
                                        The rules of the game &quot;Ten
                                        Questions&quot;: The player draws 10
                                        questions sequentially and answers each
                                        one. The player has 30 seconds to
                                        respond. Answers must be quick and
                                        honest. Failure to respond in time or
                                        providing unclear answers results in
                                        losing a point. Questions can be of any
                                        kind. The goal is to score as many
                                        points as possible. The player with the
                                        highest score after 10 questions wins.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            ) : (
                <QuestionCard
                    handleEnd={(score: any) => {
                        endGame(), setScore(score)
                    }}
                    questions={questions}
                ></QuestionCard>
            )}
        </main>
    )
}

export default Game1
