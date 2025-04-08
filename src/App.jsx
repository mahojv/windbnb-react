import React from 'react'
import CardContainer from './components/CardContainer'
import ToggleSearch from './components/ToggleSearch'
import HeaderBar from './components/HeaderBar'

export default function App() {
  return (

    <div className=" flex flex-col items-center m-0 min-h-screen relative  sm:px-[30px]">

      <div
        className="  max-w-[500px]  sm:max-w-[640px] md:max-w-[1280px] flex flex-col items-center m-0 min-h-screen  sm:px-[30px]">
        <header
          className=" w-full  h-fit gap-[10px] flex flex-col sm:flex-row sm:justify-between  mt-[15px] sm:items-center sm:h-[60px] sm:mx-0 ">
          
          <HeaderBar/>


        </header>



        <section role="toggleSearch" id="toggleSearch" className=" hidden  bg-grisBgToggle   absolute z-50 top-0 w-full   h-full  left-0   ">

        <ToggleSearch/>

        </section>

        <CardContainer />


        <footer className=" flex justify-center items-center  ">

          <p className="text-gray-300 font-semibold my-10"> Moises Javier - Windbnb Project</p>
        </footer>
      </div>


    </div>
  )
}
