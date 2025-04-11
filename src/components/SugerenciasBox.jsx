import React, { useState } from 'react'
import PlaceSugestions from './PlaceSugestions'
import GuestCounter from './GuestCounter'
import setData from "../hooks/setData";

export default function SugerenciasBox({ adultos, CountSumaAdultos, CountRestaAdultos, niños, CountSumaNiños, CountRestaNiños, location, setSearch }) {


    const { loading, error, response } = setData(`/stays.json`)

    const reduccion = response ?

        response.reduce((acum, item) => {
            const { city, country } = item;

            const existe = acum.some(([acumCity, acumCountry]) => {
                return acumCity === city && acumCountry === country;
            });

            if (!existe) {
                acum.push([city, country]);
            }

            return acum;
        }, [])
        :
        []

    return (
        <>
            <div role="sugerenciasBox" className=" flex flex-grow h-[205px] justify-center items-center">
                {
                    location ?

                        <span id="guestCounter" role="contador de huespedes" className="">
                            <GuestCounter
                                adultos={adultos}
                                CountSumaAdultos={CountSumaAdultos}
                                CountRestaAdultos={CountRestaAdultos}
                                niños={niños}
                                CountSumaNiños={CountSumaNiños}
                                CountRestaNiños={CountRestaNiños}
                            />
                        </span>

                        :

                        <span id="placeSugestions" className="">


                            {
                                reduccion.map((place) => {

                                    return (
                                        <PlaceSugestions
                                            key={place}
                                            place={place}
                                            setSearch={setSearch}
                                        />

                                    )

                                })

                            }



                        </span>




                }




            </div>


        </>
    )
}
