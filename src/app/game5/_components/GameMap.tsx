import React, { useEffect, useState } from 'react'
import Apple from '../_icons/Apple'
import Wine from '../_icons/Wine'

const GameMap = ({
    size,
    children,
    food,
}: {
    size: number
    children: React.ReactNode
    food: { x: number; y: number }
}) => {
    const grid = []
    for (let i = 0; i < size; i++) {
        const newLine = []

        for (let y = 0; y < size; y++) {
            newLine.push(
                <div
                    className="w-[20px] h-[20px] border-gray-300 border-1"
                    key={i + '-' + y}
                ></div>
            )
        }
        grid.push(newLine)
    }
    const [foodType, setFoodType] = useState(0)
    useEffect(() => {
        setFoodType(Math.floor(Math.random() * 10))
    }, [food])

    return (
        <div className="p-2 border-gray-300 border duration-200" id="mapBorder">
            <div className="relative border-2 border-black">
                {children}
                <div
                    style={{ left: food.x * 20, top: food.y * 20 }}
                    className={`w-[20px] h-[20px] absolute flex items-center justify-center`}
                >
                    {foodType < 5 ? <Apple></Apple> : <Wine></Wine>}
                </div>

                {grid.map((line, i) => (
                    <div key={i} className="flex">
                        {line}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameMap
