'use client'
import React, { useEffect, useState } from 'react'
import Uprage from './_components/Uprage'
import ArrowIcon from './_components/icons/Arrow'
import { Disclosure, Transition } from '@headlessui/react'
import './_components/style.css'

const Game2 = () => {
    const [cookies, setCookies] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [cpc, setCpc] = useState<number>(1)
    const [clicked, setClicked] = useState(false)

    const lvl1 = () => {
        setCookies((prev) => prev - 20)
        setCpc(cpc + 1)
    }
    const lvl2 = () => {
        setCookies((prev) => prev - 50)
        setCpc(cpc + 2)
    }

    const [cps, setCps] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCookies((prev) => prev + cps)
            setScore((prev) => prev + cps)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [cps])

    const lvl3 = () => {
        setCookies((prev) => prev - 200)
        setCps((prev) => prev + 1)
    }
    const lvl4 = () => {
        setCookies((prev) => prev - 500)
        setCps((prev) => prev + 2)
    }

    const clickAnimation = (e: any) => {
        setClicked(true)

        let x = e.pageX
        let y = e.pageY
        let cookie = document.createElement('img')
        cookie.classList.add('cookie')
        cookie.style.top = y + 'px'
        cookie.style.left = x + 'px'

        document.body.appendChild(cookie)

        const cookies = document.getElementsByClassName('cookie')

        if (cookies.length > 20) {
            cookies[0].remove()
        }
    }

    return (
        <main className=" flex flex-col-reverse lg:flex-row gap-2 items-center justify-center w-full h-screen px-2">
            <section className="p-10 lg:w-80 w-full bg-orange-200 rounded-xl shadow-slex-col m shadow-slate-300 min-h-96 max-h-96 overflow-hidden overflow-y-auto">
                <h1 className="font-bold mb-2">Upgrades:</h1>
                <div className="flex flex-col gap-3 w-full ">
                    <Disclosure>
                        <Disclosure.Button className="bg-orange-300 rounded-lg p-2  cursor-pointer">
                            <div className="flex justify-between items-center">
                                <p>Babička lvl.1</p>
                                <span className="w-5">
                                    <ArrowIcon></ArrowIcon>
                                </span>
                            </div>
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="bg-orange-300 bg-opacity-50  p-2 rounded-lg">
                                Tento upgrade ti přidá +1 cpc. Což znamená že ti
                                při jednom kliku na sušenku, přibyde tolik
                                sušenek, kolik máš cpc.
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="bg-orange-300 rounded-lg p-2  cursor-pointer">
                            <div className="flex justify-between items-center">
                                <p>Babička lvl.2</p>
                                <span className="w-5">
                                    <ArrowIcon></ArrowIcon>
                                </span>
                            </div>
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="bg-orange-300 bg-opacity-50  p-2 rounded-lg">
                                Tento upgrade ti přidá +2 cpc. Což znamená že ti
                                při jednom kliku na sušenku, přibyde tolik
                                sušenek, kolik máš cpc.
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="bg-orange-300 rounded-lg p-2  cursor-pointer">
                            <div className="flex justify-between items-center">
                                <p>Babička lvl.3</p>
                                <span className="w-5">
                                    <ArrowIcon></ArrowIcon>
                                </span>
                            </div>
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="bg-orange-300 bg-opacity-50  p-2 rounded-lg">
                                Tento upgrade ti přidá +1 cps. Což znamená že ti
                                za jednu sekundu přibyde tolik sušenek, kolik
                                máš cps.
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="bg-orange-300 rounded-lg p-2  cursor-pointer">
                            <div className="flex justify-between items-center">
                                <p>Babička lvl.4</p>
                                <span className="w-5">
                                    <ArrowIcon></ArrowIcon>
                                </span>
                            </div>
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="bg-orange-300 bg-opacity-50  p-2 rounded-lg">
                                Tento upgrade ti přidá +2 cps. Což znamená že ti
                                za jednu sekundu přibyde tolik sušenek, kolik
                                máš cps.
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                </div>
            </section>

            <section className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-around p-10 gap-10  bg-orange-200 rounded-xl shadow-md shadow-slate-300 lg:w-fit w-full">
                <div className="h-full">
                    <ul className="flex flex-col gap-3 w-72">
                        {cookies >= 20 ? (
                            <Uprage
                                onClick={lvl1}
                                image="https://stickershop.line-scdn.net/stickershop/v1/product/21309212/LINEStorePC/main.png?v=1"
                                level="1"
                                nmr="1"
                                cpx="cpc"
                            ></Uprage>
                        ) : (
                            <div className="invisible">
                                <Uprage
                                    onClick={lvl1}
                                    image=""
                                    level="1"
                                    cpx="cpc"
                                ></Uprage>
                            </div>
                        )}
                        {cookies >= 50 && (
                            <Uprage
                                onClick={lvl2}
                                image="https://stickershop.line-scdn.net/stickershop/v1/product/19607602/LINEStorePC/main.png?v=1"
                                level="2"
                                nmr="2"
                                cpx="cpc"
                            ></Uprage>
                        )}
                        {cookies >= 200 && (
                            <Uprage
                                onClick={lvl3}
                                image="https://stickershop.line-scdn.net/stickershop/v1/product/25451960/LINEStorePC/main.png?v=1"
                                level="3"
                                nmr="1"
                                cpx="cps"
                            ></Uprage>
                        )}
                        {cookies >= 500 && (
                            <Uprage
                                onClick={lvl4}
                                image="https://stickershop.line-scdn.net/stickershop/v1/product/21412423/LINEStorePC/main.png?v=1"
                                level="4"
                                nmr="2"
                                cpx="cps"
                            ></Uprage>
                        )}
                    </ul>
                </div>
                <div className="w-full flex flex-col items-center gap-2">
                    <div className="flex w-full justify-between">
                        <div>
                            <h1>
                                Cookies: <span>{cookies}</span>
                            </h1>
                            <h2>
                                Cookies per click: <span>{cpc}</span>
                            </h2>
                        </div>
                        <div>
                            <h1 className="font-bold">
                                Score: <span>{score}</span>
                            </h1>
                        </div>
                    </div>
                    <div className="md:w-80 sm:52 w-80  h-80 select-none  justify-center items-center flex ">
                        <img
                            onClick={() => {
                                setCookies((prev) => prev + cpc)
                                setScore((prev) => prev + cpc)
                            }}
                            onMouseDownCapture={clickAnimation}
                            onMouseUpCapture={() => setClicked(false)}
                            onMouseLeave={() => setClicked(false)}
                            className={`${
                                clicked ? ' w-72' : 'w-80'
                            } w- select-none hover:cursor-pointer image`}
                            src="https://clipart-library.com/img1/1150945.png"
                            alt="cookie"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Game2
