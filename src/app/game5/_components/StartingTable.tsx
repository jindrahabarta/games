import React, { useEffect, useState } from 'react'

const StartingTable = ({
    handleClick,
    size,
    speed,
}: {
    handleClick: any
    size: any
    speed: any
}) => {
    const [gameSize, setGameSize] = useState(10)
    const [gameSpeed, setGameSpeed] = useState(0)

    useEffect(() => {
        size(gameSize)
        speed(gameSpeed)
    }, [gameSpeed, gameSize])

    return (
        <div className=" h-44">
            <div className="flex justify-between gap-4 ">
                <div className="w-1/2">
                    <label htmlFor="size">Velikost pole:</label>
                    <input
                        type="number"
                        min={10}
                        max={25}
                        id="size"
                        defaultValue={10}
                        onChange={(e) => {
                            setGameSize(parseInt(e.target.value))
                        }}
                        className="w-full outline-none border border-black border-l-4 border-b-8 p-2  duration-200"
                    />
                </div>
                <div className=" w-1/2 ">
                    <label htmlFor="speed">Rychlost</label>
                    <input
                        type="number"
                        min={0}
                        max={10}
                        defaultValue={5}
                        id="speed"
                        onChange={(e) => {
                            setGameSpeed(parseInt(e.target.value))
                        }}
                        className=" w-full outline-none border border-black border-l-4 border-b-8 p-2  duration-200"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleClick}
                    className="z-10 mt-4 text-4xl border border-black border-l-4 border-b-8 p-4 hover:border-l hover:border-b  hover:bg-slate-100 duration-200 "
                >
                    Start Game
                </button>
            </div>
        </div>
    )
}

export default StartingTable
