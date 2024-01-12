import './App.css'
import Tempreture from './components/tempreture'
import Infos from './components/Infos'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [city, setCity] = useState("New Delhi")
  const [wdata, setwData] = useState(null)

  useEffect(() => {
    const api = `https://api.weatherapi.com/v1/current.json?key=bd96e8986231406d9c2113529241201&q=${city}&aqi=no;`

    fetch(api)
    .then((res) => {
      if(!res.ok){
        throw new Error("Error")
      }

      return res.json()
    })
    .then((data) => {
      console.log(data)
      setwData(data)
    })
    .catch((e) => {
      console.log(e)
    })

  },[city])
  
  return (
    <>
      <div className='min-h-screen w-full p-5 bg-Body bg-cover bg-no-repeat bg-center flex justify-center items-center gap-6 max-[375px]:flex-col cursor-grab'>
        <div className='w-1/5 max-[375px]:w-1/3 h-1/3 max-[375px]:mr-[8.5rem]'>
          {wdata && (<Tempreture
            setCity={setCity}
            stats={{
              temp: wdata.current.temp_c,
              condition: wdata.current.condition.text,
              isDay: wdata.current.is_day,
              location: wdata.location.name,
              time: wdata.location.localtime,
              feels: wdata.current.feelslike_c,
              icon : wdata.current.condition.icon
            }}
          />
          )}
        </div>
        <div className='w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6 mt-14 max-[375px]:flex max-[375px]:flex-col max-[375px]:w-[80%]'>
          {wdata && (
          <>
          <Infos
            stats={{
                title: "Wind Status",
                value: wdata.current.wind_mph,
                unit: "mph",
                direction: wdata.current.wind_dir,
              }}
          />
          <Infos
            stats={{
                title: "Humidity",
                value: wdata.current.humidity,
                unit: "%",
              }}
          />
          <Infos
             stats={{
                title: "Visibility",
                value: wdata.current.vis_miles,
                unit: "miles",
              }}
          />
          <Infos
            stats={{
                title: "Air Pressure",
                value: wdata.current.pressure_mb,
                unit: "mb",
              }}
          />
          <Infos
            stats={{
              title : "UV Index",
              value : wdata.current.uv
            }}
          />
          <Infos
            stats={{
              title : "Preciptation",
              value : wdata.current.precip_mm
            }}
          />
          </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
