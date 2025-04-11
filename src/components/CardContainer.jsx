import React from 'react'
import StayCard from './StayCard'
import setData from "../hooks/setData";
import setFilter from "../hooks/setFilter";

export default function CardContainer({ search, guestTotal }) {

  const { loading, error, response } = setData(`/stays.json`)
  let arrayInput = search.split(", ");
  const arrayFiltered = response ? setFilter(arrayInput, guestTotal, response) : []

  return (
    <>
      <main className="px-[15px] mt-[20px] w-full  flex-grow sm:mt-20 ">
        <div
          className="sm:min-w-[580px] md:min-w-[764px] lg:min-w-[1000px] xl:min-w-[1024px] flex justify-between items-center">
          <h1 id="locationPlaceBox" className="text-2xl font-bold"> {search === "" ? `Stays in finland` : ` Stays in ${search}`}   </h1>
          <p id="itemsCardCounter" className="font-semibold">
            {
              arrayFiltered && arrayFiltered.length > 0 ?
                arrayFiltered && arrayFiltered.length > 12 ? "12+ stays" : `${arrayFiltered?.length} stays`
                :
                response && response.length > 12 ? "12+ stays" : `${response?.length} stays`
            }  </p>

        </div>

        <section role="cardContainer" id="cardsContainer"
          className="mt-[20px] flex flex-wrap gap-6 sm:grid sm:grid-cols-2 sm:gap-y-8 md:grid-cols-3   ">

          {
            search === "" ?

              response?.map((item) => {
                return (
                  <StayCard
                    key={item.rating}
                    title={item.title}
                    rating={item.rating}
                    superHost={item.superHost}
                    type={item.type}
                    photo={item.photo}
                    beds={item.beds}

                  />
                )
              }) :

              arrayFiltered?.map((item) => {
                return (
                  <StayCard
                    key={item.rating}
                    title={item.title}
                    rating={item.rating}
                    superHost={item.superHost}
                    type={item.type}
                    photo={item.photo}
                    beds={item.beds}

                  />
                )
              })
          }
        </section>
      </main >
    </>
  )
}
