import React from 'react'

export default function App() {
  return (

    <div className=" flex flex-col items-center m-0 min-h-screen relative  sm:px-[30px]">

      <div
        className="  max-w-[500px]  sm:max-w-[640px] md:max-w-[1280px] flex flex-col items-center m-0 min-h-screen  sm:px-[30px]">
        <header
          className=" w-full  h-fit gap-[10px] flex flex-col sm:flex-row sm:justify-between  mt-[15px] sm:items-center sm:h-[60px] sm:mx-0 ">
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


        </header>



        <section role="toggleSearch" id="toggleSearch" className=" hidden  bg-grisBgToggle   absolute z-50 top-0 w-full   h-full  left-0   ">

          <div className="flex flex-col p-3  w-full  bg-grisToggleMenu h-[420px]">
            <div className="flex justify-between ">
              <p className="text-sm font-bold"> Edit your search</p>
              <button role="closeTogleBtn" id="closeTogleBtn" className="text-2xl mr-5 "><img className="size-3" src="./icons/cerrar.png" alt="" /></button>
            </div>
            <div role="searchBar" id="searchBarBtns" className=" flex flex-col  p-0  justify-center mt-3 sm:flex-row  ">
              <div className=" flex flex-col justify-center text-center border border-gray-100 rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl overflow-hidden sm:w-[255px] md:w-[560px] bg-white " >
                <label id="locationLabelSearch" className="font-bold ">Location</label>
                <input id="locationInputSearch" className=" text-center " type="text" placeholder="Helsinki, Finland" />
              </div>
              <div id="guestToggleSearch" className="flex flex-col justify-center text-center border- border-gray-100 rounded-b-2xl sm:rounded-none overflow-hidden bg-white sm:w-[255px] md:w-[560px] ">
                <label id="guestLabelSearch" className="font-bold">Guest</label>
                <p id="guestInputSearch" className="text-center">0</p>
              </div>
              <span className="hidden sm:block" >
                <button id="searchStay" type="submit" className="  rounded-r-2xl border w-[131px] h-[61px] text-blancoBtn bg-rojomasclaro sm:flex gap-1 justify-center items-center font-bold sm:w-[130px] md:w-[160px] ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-5 font-bold ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  Search
                </button>
              </span>

            </div>
            <div role="sugerenciasBox" className=" flex flex-grow h-[205px] justify-center items-center">
              <span id="placeSugestions" className="hidden">
                <div id="sugerenciasBox" className="grid grid-cols-2 justify-items-center gap-5 mt-[40px] mx-[30px]">

                  <span className="flex gap-1.5 items-center ">
                    <img className="size-5 " src="./icons/pin.svg" alt="" />
                    <p className="text-grisRanking">Helsinki, Finland</p>
                  </span>




                </div>
              </span>

              <span id="guestCounter" role="contador de huespedes" className="">
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
              </span>

            </div>


            <button type="submit" id="searchStay2"
              className="searchStay mx-auto mt-3 rounded-xl border w-[125px] h-[38px] text-blancoBtn bg-rojomasclaro flex sm:hidden gap-1 justify-center items-center font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                stroke="currentColor" className="size-5 font-bold ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              Search
            </button>

          </div>
        </section>


        <main className="px-[15px] mt-[20px] w-full  flex-grow sm:mt-20 ">
          <div
            className="sm:min-w-[580px] md:min-w-[764px] lg:min-w-[1000px] xl:min-w-[1024px] flex justify-between items-center">
            <h1 id="locationPlaceBox" className="text-2xl font-bold">Stays in finland</h1>
            <p id="itemsCardCounter" className="font-semibold">12+ stays</p>

          </div>

          <section role="cardContainer" id="cardsContainer"
            className="mt-[20px] flex flex-wrap gap-6 sm:grid sm:grid-cols-2 sm:gap-y-8 md:grid-cols-3   ">

            <div role="card"
              className="flex gap-1 flex-col max-w-[600px] max-h-[460px] sm:max-w-[283px] md:max-w-[380px]">
              <figure className="rounded-xl overflow-hidden max-h-[252px] sm:w-full">
                <img className="object-cover aspect-video
                    " src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
                  alt="" />
              </figure>
              <span className="flex justify-between w-full">
                <span className=" flex items-center  gap-3 ">
                  <p
                    className="flex border h-[34px] min-w-[100px] justify-center items-center rounded-xl px-[5px] font-extrabold text-[12px]">
                    SUPER HOST</p>
                  <p className="text-grisTexto text-[14px]">Entire house. 6 beds</p>
                </span>
                <span className="flex gap-2 w-fit items-center ">
                  <figure className="size-6 text-rojoclaro ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
                      fill="currentColor" stroke="currentColor" className="  ">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </figure>
                  <p className="text-grisRanking text-[15px]">4.5</p>
                </span>
              </span>
              <p className="w-full">Party inferior in 1900 </p>


            </div>

          </section>



        </main>

        <footer className=" flex justify-center items-center  ">

          <p className="text-gray-300 font-semibold my-10"> Moises Javier - Windbnb Project</p>
        </footer>
      </div>


    </div>
  )
}
