import React, { ReactElement } from 'react'

const Play = ({
    size,
    handleClick,
    paused,
}: {
    size?: number
    paused?: boolean
    handleClick: () => void
}) => {
    return (
        <div className="w-10 h-10">
            <div
                className={`${
                    paused ? 'border-b-4 border-l-3' : 'border-b-1 border-l-1'
                } border border-t-1 border-r-1  border-black p-1 w-fit group hover:border-b-1 hover:border-l-1 duration-200`}
                onClick={handleClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-3 0 28 28"
                    className={`w-${
                        size ? size : 6
                    } group hover:cursor-pointer`}
                >
                    <title>{'play'}</title>
                    <path
                        className="fill-black group-hover:fill-green-400 duration-150"
                        fillRule="evenodd"
                        d="M21.415 12.554 2.418.311C1.291-.296 0-.233 0 1.946v24.108c0 1.992 1.385 2.306 2.418 1.635l18.997-12.243a2.076 2.076 0 0 0 0-2.892"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Play
