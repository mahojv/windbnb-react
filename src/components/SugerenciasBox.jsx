import React from 'react'
import PlaceSugestions from './PlaceSugestions'
import GuestCounter from './GuestCounter'

export default function SugerenciasBox() {
    return (
        <>

            <div role="sugerenciasBox" className=" flex flex-grow h-[205px] justify-center items-center">

                <span id="placeSugestions" className="hidden">

                    <PlaceSugestions />
                </span>

                <span id="guestCounter" role="contador de huespedes" className="">

                    <GuestCounter/>
                    
                </span>

            </div>


        </>
    )
}
