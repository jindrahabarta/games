'use client'
import React, { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import Rock from './icons/Rock'
import Paper from './icons/Paper'
import Scissors from './icons/Scissors'
import Heart from './icons/Heart'
import { motion } from 'framer-motion'

const page = () => {
    const pole = ['rock', 'paper', 'scissors']
    const [random, setRandom] = useState<string>()
    const [win, setWin] = useState<number>(-1)
    const [score, setScore] = useState<number>(0)
    const [life, setLife] = useState<number>(5)

    const [speed, setSpeed] = useState<number>(200)

    useEffect(() => {
        let x = 0

        const interval = setInterval(() => {
            if (x < 2) x = x + 1
            else x = 0

            setRandom(pole[x])
        }, speed)
        return () => {
            clearInterval(interval)
        }
    }, [speed])

    const play = (props: any) => {
        if (win === -1) {
            if (props === random) {
                setWin(0)
            } else {
                if (
                    (props === 'rock' && random === 'scissors') ||
                    (props === 'paper' && random === 'rock') ||
                    (props === 'scissors' && random === 'paper')
                ) {
                    setWin(1)
                    setScore((prev) => prev + 1)
                } else {
                    setWin(2)
                    setLife((prev) => prev - 1)
                }
            }

            setTimeout(() => {
                setWin(-1)
            }, 1000)
        }
    }

    const reset = () => {
        setLife(5)
    }

    if (!random) {
        return (
            <main className=" flex flex-col  items-center justify-center h-screen">
                <p>Loading...</p>
            </main>
        )
    }

    return (
        <main
            className={`h-screen flex flex-col ${
                (win === -1 && 'bg-white') ||
                (win === 0 && 'bg-yellow-300') ||
                (win === 1 && 'bg-green-300 ') ||
                (win === 2 && 'bg-red-300')
            } `}
        >
            {life > 0 ? (
                <div className="h-screen flex flex-col justify-between py-16">
                    <div className=" flex justify-end">
                        {[...Array(life - 1)].map((i: any, index: number) => (
                            <Heart key={index} className="w-10  "></Heart>
                        ))}

                        <Heart className="w-10  "></Heart>
                    </div>
                    {/* <motion.div
        className="w-10 h-10"
        initial={{ backgroundColor: "red" }}
        animate={{ backgroundColor: "white" }}
        transition={{ type: "tween", duration: 500 }}
      ></motion.div> */}
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <div className="flex gap-1 items-center">
                            <label htmlFor="volume">Speed:</label>
                            <input
                                className="hover:cursor-pointer"
                                type="range"
                                id="volume"
                                name="volume"
                                step={50}
                                min="100"
                                max="500"
                                value={speed}
                                onChange={(e) => setSpeed(+e.target.value)}
                            />
                            <p>{speed}</p>
                        </div>

                        {(random === 'rock' && (
                            <Rock className="w-20 h-20"></Rock>
                        )) ||
                            (random === 'paper' && (
                                <Paper className="w-20 h-20"></Paper>
                            )) ||
                            (random === 'scissors' && (
                                <Scissors className="w-20 h-20"></Scissors>
                            ))}

                        <div className="flex gap-4">
                            <div
                                onClick={() => play('rock')}
                                className="bg-white p-5 border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer duration-200"
                            >
                                <Rock className="w-10 h-10"></Rock>
                            </div>
                            <div
                                onClick={() => play('paper')}
                                className="bg-white p-5 border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer duration-200"
                            >
                                <Paper className="w-10 h-10"></Paper>
                            </div>
                            <div
                                onClick={() => play('scissors')}
                                className="bg-white p-5 border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:cursor-pointer duration-200"
                            >
                                <Scissors className="w-10 h-10"></Scissors>
                            </div>
                        </div>
                    </div>
                    <div>
                        {(win === -1 && (
                            <div className="invisible">Just placeholder</div>
                        )) ||
                            (win === 0 && (
                                <div className="flex justify-center font-pixelify">
                                    <motion.h2
                                        initial={{ x: 20 }}
                                        animate={{ x: 0 }}
                                        transition={{ type: 'tween' }}
                                    >
                                        Remiza
                                    </motion.h2>
                                </div>
                            )) ||
                            (win === 1 && (
                                <div className="flex justify-center font-pixelify">
                                    <motion.h2
                                        initial={{ x: 20 }}
                                        animate={{ x: 0 }}
                                        transition={{ type: 'tween' }}
                                    >
                                        Win
                                    </motion.h2>
                                </div>
                            )) ||
                            (win === 2 && (
                                <div className="flex justify-center font-pixelify">
                                    <motion.h2
                                        initial={{ x: 20 }}
                                        animate={{ x: 0 }}
                                        transition={{ type: 'tween' }}
                                    >
                                        Loose
                                    </motion.h2>
                                </div>
                            ))}
                    </div>
                    <div className=" flex justify-center">
                        <h1 className=" font-pixelify text-lg select-none">
                            Score: {score}
                        </h1>
                    </div>
                </div>
            ) : (
                <div className="h-screen flex flex-col gap-2 justify-center items-center">
                    <h1 className=" font-pixelify text-lg select-none">
                        End of the game!
                    </h1>
                    <h2 className=" text-md text-center font-pixelify hover:text-red-500 z-50">
                        Your score is: {score}
                    </h2>

                    <button
                        onClick={reset}
                        className="px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-100 duration-200"
                    >
                        Play again
                    </button>
                </div>
            )}
        </main>
    )
}

export default page
