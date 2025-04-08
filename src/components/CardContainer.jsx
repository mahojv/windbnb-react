import React from 'react'
import StayCard from './StayCard'

export default function CardContainer() {
    return (
        <>
        <main className="px-[15px] mt-[20px] w-full  flex-grow sm:mt-20 ">
          <div
            className="sm:min-w-[580px] md:min-w-[764px] lg:min-w-[1000px] xl:min-w-[1024px] flex justify-between items-center">
            <h1 id="locationPlaceBox" className="text-2xl font-bold">Stays in finland</h1>
            <p id="itemsCardCounter" className="font-semibold">12+ stays</p>

          </div>

          <section role="cardContainer" id="cardsContainer"
            className="mt-[20px] flex flex-wrap gap-6 sm:grid sm:grid-cols-2 sm:gap-y-8 md:grid-cols-3   ">

            <StayCard/>

          </section>



        </main>



        </>
    )
}
