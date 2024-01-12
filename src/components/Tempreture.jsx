// import React from 'react'

function Tempreture({setCity, stats}) {
  const handleinput = (e) => {
    setCity(e.target.value)
  }
  return (
    <>
    <div className="grid place-items-center gap-6 text-white ">
      <div className="flex gap-3 w-full ">
        <div className="text-white text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
          <input 
          type="text"
          placeholder="Enter a city"
          onChange={handleinput}
          defaultValue="New Delhi"
          className="bg-[#0c0a0a4c] p-[.7rem] rounded-md placeholder:text-white hover:outline-none outline-none"
          />
        </div>

        <div className="grid place-items-center">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            onClick={handleinput}
            className="w-7 h-7 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[#0c0a0a4c] w-full flex flex-col items-center rounded-lg p-5">
        <div className="text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={stats.icon} alt="weather icon" className="w-40"/>
          <p className="text-center text-[1.3rem]">{stats.condition}</p>
        </div>
        <div className="mb-5 text-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
          <p className="ml-7 font-semibold text-[4rem] flex">
            <span>{stats.temp}</span>
            <span className="text-[2rem]">°C</span>
          </p>
          <p className="flex justify-center">
            <span className="">Feels Like {stats.feels}</span>
            <span className="text-[10px]">°C</span>
          </p>
        </div>
        <div className="text-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
          <p>Today &#183; {stats.time} | </p>
          <p>{stats.location}</p>
        </div>
      </div>
    </div>  
    </>
  )
}

export default Tempreture