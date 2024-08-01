import React from 'react'

const Resume = ({ size }: { size?: number }) => {
    return (
        <div className="w-10 h-10">
            <div
                className="border border-t-1 border-r-1 border-b-4 border-l-3 border-black p-1 w-fit group hover:border-b-1 hover:border-l-1 duration-200"
                onClick={() => location.reload()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className={`w-${
                        size ? size : 6
                    } group hover:cursor-pointer fill-black group-hover:fill-yellow-400 duration-150`}
                >
                    <path d="M26 18A10 10 0 1 1 16 8h6.182l-3.584 3.585L20 13l6-6-6-6-1.402 1.414L22.185 6H16a12 12 0 1 0 12 12Z" />
                    <path
                        d="M0 0h32v32H0z"
                        data-name="&lt;Transparent Rectangle&gt;"
                        style={{
                            fill: 'none',
                        }}
                    />
                </svg>
            </div>
        </div>
    )
}

export default Resume
