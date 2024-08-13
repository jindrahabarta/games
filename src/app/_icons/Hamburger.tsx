import React from 'react'

interface props {
    open: boolean
    handleClick: () => void
    className?: string
}

const Hamburger = ({ open, handleClick, className }: props) => {
    if (open) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 -0.5 25 25"
                width={35}
                height={35}
                onClick={handleClick}
                className={className}
            >
                <path
                    fill="#000"
                    d="M6.97 16.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.06-3.94a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.06-3.94a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-5 3.94a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.94 6.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-5-5a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM8.03 6.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm0 11.06 5-5-1.06-1.06-5 5 1.06 1.06Zm5-5 5-5-1.06-1.06-5 5 1.06 1.06Zm-1.06 0 5 5 1.06-1.06-5-5-1.06 1.06Zm1.06-1.06-5-5-1.06 1.06 5 5 1.06-1.06Z"
                />
            </svg>
        )
    } else {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 -0.5 25 25"
                width={35}
                height={35}
                onClick={handleClick}
                className={className}
            >
                <path
                    fill="#000"
                    d="M5.5 7.75a.75.75 0 0 0 0 1.5v-1.5Zm14 1.5a.75.75 0 0 0 0-1.5v1.5Zm-14 2.5a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-12 2.5a.75.75 0 0 0 0 1.5v-1.5Zm7 1.5a.75.75 0 0 0 0-1.5v1.5Zm-7-8h14v-1.5h-14v1.5Zm0 4h12v-1.5h-12v1.5Zm0 4h7v-1.5h-7v1.5Z"
                />
            </svg>
        )
    }
}

export default Hamburger
