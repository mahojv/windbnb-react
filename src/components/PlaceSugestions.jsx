import React from 'react'


export default function PlaceSugestions({ place, setSearch }) {


  function handleclick(e) {


    setSearch(e.target.textContent)

  }




  return (
    <>

      <div id="sugerenciasBox" className="grid grid-cols-2 justify-items-center gap-5 mt-[40px] mx-[30px]">

        <span className="flex gap-1.5 items-center cursor-pointer ">
          <img className="size-5 " src="./icons/pin.svg" alt="" />
          <p className="text-grisRanking" onClick={handleclick}>{place[0]}, {place[1]} </p>
        </span>




      </div>

    </>
  )


}
