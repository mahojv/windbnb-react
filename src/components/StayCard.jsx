import React from 'react'

export default function StayCard({title, rating, superHost, type, photo, beds }) {

  
  return (
    <>

      <div role="card"
        className="flex gap-1 flex-col max-w-[600px] max-h-[460px] sm:max-w-[283px] md:max-w-[380px]">
        <figure className="rounded-xl overflow-hidden max-h-[252px] sm:w-full">
          <img className="object-cover aspect-video
                    " src={photo}
            alt="" />
        </figure>
        <span className="flex justify-between w-full">
          <span className=" flex items-center  gap-3 ">
            { superHost? 
              
              (<p
              className="flex border h-[34px] min-w-[100px] justify-center items-center rounded-xl px-[5px] font-extrabold text-[12px]">
              SUPER HOST</p>) : ""}
            <p className="text-grisTexto text-[14px]">{type}. {beds} beds</p>
          </span>
          <span className="flex gap-2 w-fit items-center ">
            <figure className="size-6 text-rojoclaro ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5"
                fill="currentColor" stroke="currentColor" className="  ">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </figure>
            <p className="text-grisRanking text-[15px]">{rating}</p>
          </span>
        </span>
        <p className="w-full"> {title} </p>


      </div>

    </>
  )
}
