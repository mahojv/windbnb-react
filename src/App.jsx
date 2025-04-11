import React, { useState } from 'react'
import CardContainer from './components/CardContainer'
import ToggleSearch from './components/ToggleSearch'
import HeaderBar from './components/HeaderBar'

export default function App() {

  const [search, setSearch] = useState("")
  const [clickButton, setClickButton] = useState(false)
  const [adultos, setAdultos] = useState(0)
  const [niños, setNiños] = useState(0)
  let guestTotal = niños + adultos

  function CountSumaAdultos() {
    setAdultos(adultos + 1)
  }

  function CountRestaAdultos() {
    if (adultos > 0) {
      setAdultos(adultos - 1)
    }
  }
  function CountSumaNiños() {
    setNiños(niños + 1)
  }

  function CountRestaNiños() {
    if (niños > 0) {
      setNiños(niños - 1)
    }
  }
  const [toggleMenu, setToggleMenu] = useState(false)

  function toggleMenuFunction() {
    setToggleMenu(!toggleMenu)

  }

  return (

    <div className=" flex flex-col items-center m-0 min-h-screen relative  sm:px-[30px]">

      <div
        className="  max-w-[500px]  sm:max-w-[640px] md:max-w-[1280px] flex flex-col items-center m-0 min-h-screen  sm:px-[30px]">
        <header
          className=" w-full  h-fit gap-[10px] flex flex-col sm:flex-row sm:justify-between  mt-[15px] sm:items-center sm:h-[60px] sm:mx-0 ">

          <HeaderBar
            toggleMenuFunction={toggleMenuFunction}
            search={search}
            guestTotal={guestTotal}

          />
        </header>

        {toggleMenu && (
          <section
            role="toggleSearch"
            id="toggleSearch"
            className="bg-grisBgToggle absolute z-50 top-0 w-full h-full left-0"
          >
            <ToggleSearch
              toggleMenuFunction={toggleMenuFunction}
              adultos={adultos}
              CountSumaAdultos={CountSumaAdultos}
              CountRestaAdultos={CountRestaAdultos}
              niños={niños}
              CountSumaNiños={CountSumaNiños}
              CountRestaNiños={CountRestaNiños}
              guestTotal={guestTotal}
              search={search}
              setSearch={setSearch}
              setClickButton={setClickButton}
            />

          </section>
        )}

        <CardContainer
          search={search}
          guestTotal={guestTotal}
        />


        <footer className=" flex justify-center items-center  ">

          <p className="text-gray-300 font-semibold my-10"> Moises Javier - Windbnb Project</p>
        </footer>
      </div>


    </div>
  )
}
