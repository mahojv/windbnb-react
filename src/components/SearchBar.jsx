import React from 'react'



export default function SearchBar({ guestTotal, search, setSearch, suggestionsToggle, toggleMenuFunction }) {

    function handleclick(e) {
        setSearch(e.target.value)
        toggleMenuFunction()
    }
    return (
        <>
            <div className=" flex flex-col justify-center text-center border border-gray-100 rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl overflow-hidden sm:w-[255px] md:w-[560px] bg-white " >
                <label id="locationLabelSearch" className="font-bold ">Location</label>
                <input id="locationInputSearch" className=" text-center " type="text" placeholder="Helsinki, Finland" onClick={suggestionsToggle} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            <div id="guestToggleSearch" className="flex flex-col justify-center text-center border- border-gray-100 rounded-b-2xl sm:rounded-none overflow-hidden bg-white sm:w-[255px] md:w-[560px] ">
                <label id="guestLabelSearch" className="font-bold"  >Guest</label>
                <p id="guestInputSearch" className="text-center" onClick={suggestionsToggle}>{guestTotal}</p>
            </div>
            <span className="hidden sm:block" >
                <button id="searchStay" type="submit" className="  rounded-r-2xl border w-[131px] h-[61px] text-blancoBtn bg-rojomasclaro sm:flex gap-1 justify-center items-center font-bold sm:w-[130px] md:w-[160px] " value={search} onClick={handleclick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-5 font-bold ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    Search
                </button>
            </span>

        </>
    )
}
