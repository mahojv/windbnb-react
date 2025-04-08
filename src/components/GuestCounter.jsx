import React from 'react'

export default function GuestCounter() {
    return (
        <>

            <div className="flex flex-col gap-5 mt-[40px] mx-[30px] ">
                <div className="flex flex-col gap-1">
                    <p className="font-bold">Adult</p>
                    <p className="text-grisTexto text-sm">Age 13 or above</p>
                    <span id="counterAdult" className="flex gap-5 ">
                        <button id="-" value="-"
                            className="border border-gray-300 rounded-lg w-[23px] h-[23px] flex justify-center items-center">-</button>
                        <p id="counterAdultTag">0</p>
                        <button id="+" value="+"
                            className="border border-gray-300 rounded-lg w-[23px] h-[23px] flex justify-center items-center">+</button>
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold">children</p>
                    <p className="text-grisTexto text-sm">Age 2 - 12</p>
                    <span id="counterChildren" className="flex gap-5 ">
                        <button value="-"
                            className="border border-gray-300 rounded-lg w-[23px] h-[23px] flex justify-center items-center">-</button>
                        <p id="counterChildTag">0</p>
                        <button value="+"
                            className="border border-gray-300 rounded-lg w-[23px] h-[23px] flex justify-center items-center">+</button>
                    </span>
                </div>
            </div>

        </>
    )
}
