import React from 'react'

const Pause = ({
    size,
    handleClick,
    paused,
}: {
    size?: number
    handleClick: () => void
    paused?: boolean
}) => {
    return (
        <div className="w-10 h-10">
            <div
                className={`${
                    paused ? 'border-b-1 border-l-1' : ' border-b-4 border-l-3'
                } border border-t-1 border-r-1  border-black p-1 w-fit group hover:border-b-1 hover:border-l-1 duration-200`}
                onClick={handleClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24  "
                    className={`w-${
                        size ? size : 6
                    } group hover:cursor-pointer`}
                >
                    <path
                        className="stroke-black group-hover:stroke-red-400 duration-150"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M8 2v22m8-22v22"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Pause
