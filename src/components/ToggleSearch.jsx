import React, { useState } from 'react'
import SugerenciasBox from './SugerenciasBox'
import SearchBar from './SearchBar'

export default function ToggleSearch({ toggleMenuFunction, adultos, CountSumaAdultos, CountRestaAdultos, niños, CountSumaNiños, CountRestaNiños, guestTotal, search, setSearch, setClickButton }) {

    const [location, setLocation] = useState(false)

    function suggestionsToggle(e) {

        setLocation(!location)
    }

    return (
        <>
            <div className="flex flex-col p-3  w-full  bg-grisToggleMenu h-[420px]" id='toggleMenu'>
                <div className="flex justify-between ">
                    <p className="text-sm font-bold"> Edit your search</p>
                    <button role="closeTogleBtn" id="closeTogleBtn" className="text-2xl mr-5 "><img className="size-3" src="./icons/cerrar.png" alt="" onClick={toggleMenuFunction} /></button>
                </div>
                <div role="searchBar" id="searchBarBtns" className=" flex flex-col  p-0  justify-center mt-3 sm:flex-row  ">

                    <SearchBar
                        guestTotal={guestTotal}
                        search={search}
                        setSearch={setSearch}
                        suggestionsToggle={suggestionsToggle}
                        toggleMenuFunction={toggleMenuFunction}
                    />

                </div>
                <SugerenciasBox
                    adultos={adultos}
                    CountSumaAdultos={CountSumaAdultos}
                    CountRestaAdultos={CountRestaAdultos}
                    niños={niños}
                    CountSumaNiños={CountSumaNiños}
                    CountRestaNiños={CountRestaNiños}
                    location={location}
                    setSearch={setSearch}

                />


                <button type="submit" id="searchStay2"
                    className="searchStay mx-auto mt-3 rounded-xl border w-[125px] h-[38px] text-blancoBtn bg-rojomasclaro flex sm:hidden gap-1 justify-center items-center font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4"
                        stroke="currentColor" className="size-5 font-bold ">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    Search
                </button>

            </div>


        </>
    )
}
