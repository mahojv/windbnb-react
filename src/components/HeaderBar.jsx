import React from 'react'

export default function HeaderBar() {
  return (
    <>

    <figure role="logo" className=" w-32 ">
                <img className="w-full" src="./icons/logo.svg" alt="" />
              </figure>
              <div role="buscador"
                className=" h-[50px] w-[309px] flex   bg-white mx-auto shadow-lg overflow-hidden rounded-2xl md:mr-[0px] ">
                <p id="locationSearch"
                  className="border border-gray-100 h-full w-[138px] rounded-l-2xl text-center text-black flex justify-center items-center"
                  placeholder="Whole, Finland">Whole, Finland</p>
                <p id="guestSearch"
                  className="border border-gray-100 h-full w-[113px] text-grisTexto hover:text-black flex items-center justify-center ">
                  Add guests</p>
                <button id="searchBtn"
                  className="border h-full w-[58px] rounded-r-2xl border-gray-100 flex justify-center items-center">
                  <img className="size-5  " src="./icons/search.svg" alt="" />
    
                </button>
              </div>
      
    </>
  )
}
