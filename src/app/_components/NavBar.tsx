'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Hamburger from '../_icons/Hamburger'

const NavBar = () => {
    const path = usePathname()
    const links = [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Guess what',
            link: '/game1',
        },
        {
            text: 'Cookie clicker',
            link: '/game2',
        },
        {
            text: 'Tic Tac',
            link: '/game3',
        },
        {
            text: 'Rock Paper Scissors!',
            link: '/game4',
        },
        {
            text: 'Snake',
            link: '/game5',
        },
    ]

    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        setIsOpen((prev) => !prev)
    }

    return (
        <nav className="p-2 px-4 fixed w-full bg-slate-300 bg-opacity-60 flex justify-between items-center z-50 select-none backdrop-blur-md">
            <Link href="/" className="w-16">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/PlayGround.ru_logo.svg/1200px-PlayGround.ru_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="flex">
                <div className="md:block hidden">
                    <ul className="flex gap-4">
                        {links.map((link: any, index: number) => (
                            <li key={index}>
                                <Link
                                    className={`${
                                        link.link == path
                                            ? 'font-bold text-red-600'
                                            : ' font-normal'
                                    }`}
                                    href={link.link}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Hamburger
                    className="md:hidden block hover:cursor-pointer"
                    handleclick={handleOpen}
                    open={isOpen}
                />
            </div>

            <aside
                className={`${
                    isOpen ? 'h-screen' : 'h-0 overflow-hidden'
                } md:hidden bg-slate-300 bg-opacity-60 absolute w-screen top-16 right-0 z-50 duration-200 backdrop-blur-md`}
            >
                <ul className="flex flex-col gap-4 items-center">
                    {links.map((link: any, index: number) => (
                        <li key={index}>
                            <Link
                                className={`${
                                    link.link == path
                                        ? 'font-bold text-red-600'
                                        : ' font-normal'
                                }`}
                                href={link.link}
                                onClick={handleOpen}
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </nav>
    )
}

export default NavBar
