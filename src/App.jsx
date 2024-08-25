import { useState } from 'react'
import './App.css'
import { WeatherApp } from './Components/Weather-App/weather-app';
function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="app-div">
      <WeatherApp />
     </div>
  )
}

export default App
