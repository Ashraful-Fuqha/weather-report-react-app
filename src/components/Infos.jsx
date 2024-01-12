// import React from 'react'


function Infos({stats}) {
  return (
    <>
    <div className="text-white">
      <div className="flex flex-col items-center p-5 bg-[#0c0a0a4c] rounded-md text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out h-full">
        <p>{stats.title}</p>
        <p className="text-xl"><span className="text-3xl font-bold">{stats.value}</span>{stats.unit}</p>
        <div className="flex gap-3 mt-2">
          {stats.direction ? 
          (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-slate-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>) : null}
          <span>{stats.direction}</span>
        </div>
        {stats.title === 'Humidity' ? (
        <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{width : `${stats.value}%`}}
          ></div>
        </div>) : null }
      </div>
    </div>
    </>
  )
}

export default Infos