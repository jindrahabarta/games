'use client'
import React, { useEffect, useRef, useState } from 'react'
import StartingTable from './_components/StartingTable'
import GameMap from './_components/GameMap'
import EndGame from './_components/EndGame'
import Play from '../_icons/Play'
import Pause from '../_icons/Pause'
import Resume from '../_icons/Resume'

const Game5 = () => {
    const [gameManager, setGameManager] = useState('selection')

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [size, setSize] = useState<number>(10)
    const [speed, setSpeed] = useState<number>(0)

    const [direction, setDirection] = useState('right')

    const [score, setScore] = useState(0)
    let randX = Math.floor(Math.random() * size)
    let randY = Math.floor(Math.random() * size)
    const [food, setFood] = useState({ x: randX, y: randY })

    const [pause, setPause] = useState(false)

    const snakeRef = useRef(null)

    const keyDown = (e: any) => {
        // const snake = document.getElementById('snake')
        // let direction = 'nul'
        // snake.addEventListener('keydown', (e: any) => {
        //     direction = e.key
        //     console.log(direction)
        // })

        if (e.key === 'ArrowUp') {
            setDirection('up')
        } else if (e.key === 'ArrowDown') {
            setDirection('down')
        } else if (e.key === 'ArrowLeft') {
            setDirection('left')
        } else if (e.key === 'ArrowRight') {
            setDirection('right')
        }
    }

    const startGame = () => {
        if (size >= 10 && size <= 25 && speed >= 0 && speed <= 10) {
            setGameManager('gameMode')
        } else setGameManager('error')

        if (size % 2 !== 1) {
            setX(size / 2)
            setY(size / 2)
        }
    }

    useEffect(() => {
        if (gameManager === 'gameMode') {
            const int = setInterval(() => {
                if (pause === true) {
                    clearInterval(int)
                } else {
                    if (direction === 'left') {
                        setX((prev: any) => {
                            if (prev === size || prev < 0) {
                                setGameManager('colision')
                                clearInterval(int)
                                return prev
                            } else {
                                return prev - 1
                            }
                        })
                    } else if (direction === 'right') {
                        setX((prev: any) => {
                            if (prev === size || prev < 0) {
                                setGameManager('colision')
                                clearInterval(int)
                                return prev
                            } else {
                                return prev + 1
                            }
                        })
                    } else if (direction === 'up') {
                        setY((prev: any) => {
                            if (prev === size || prev < 0) {
                                setGameManager('colision')
                                clearInterval(int)
                                return prev
                            } else {
                                return prev - 1
                            }
                        })
                    } else if (direction === 'down') {
                        setY((prev: any) => {
                            if (prev === size || prev < 0) {
                                setGameManager('colision')
                                clearInterval(int)
                                return prev
                            } else {
                                return prev + 1
                            }
                        })
                    }
                }
            }, 1100 - speed * 100)
            return () => clearInterval(int)
        }
    }, [direction, gameManager, pause])

    if (food.x === x && food.y === y) {
        setScore((prev) => prev + 1)
        setFood({ x: randX, y: randY })
        randX = Math.floor(Math.random() * size)
        randY = Math.floor(Math.random() * size)
        const mapBorder = document.getElementById('mapBorder')
        mapBorder?.classList.add('expand')
        setTimeout(() => {
            mapBorder?.classList.remove('expand')
        }, 300)
    }

    return (
        <main className={`h-screen w-full flex justify-center items-center `}>
            {gameManager === 'selection' && (
                <StartingTable
                    size={(size: number) => {
                        setSize(size)
                    }}
                    speed={(speed: number) => setSpeed(speed)}
                    handleClick={startGame}
                />
            )}

            {gameManager === 'gameMode' && (
                <div className="flex flex-col gap-4">
                    <GameMap food={food} size={size}>
                        <input
                            autoFocus
                            onKeyDownCapture={keyDown}
                            id="snake"
                            style={{ left: x * 20, top: y * 20 }}
                            className={`bg-black w-[20px] h-[20px] absolute `}
                        ></input>
                    </GameMap>
                    <div className="flex justify-between">
                        <h2 className=" text-3xl  font-pixelify hover:text-red-500">
                            {score}
                        </h2>
                        <div className="flex gap-2">
                            <Play
                                paused={pause}
                                handleClick={() => setPause(false)}
                            ></Play>
                            <Pause
                                paused={pause}
                                handleClick={() => setPause(true)}
                            ></Pause>
                            <Resume></Resume>
                        </div>
                    </div>
                </div>
            )}

            {gameManager === 'colision' && <EndGame score={score}></EndGame>}

            {gameManager === 'error' && <h1>Error</h1>}
        </main>
    )
}

export default Game5
