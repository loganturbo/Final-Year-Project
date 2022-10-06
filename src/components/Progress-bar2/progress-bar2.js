import React,  {useEffect, useState} from 'react'
import './progress-bar2.css';

function ProgressBar2(props) {
  const [offset2, setOffset2] = useState(0);
    const {
        temperatureProgress
    } = props;
 useEffect(() =>{
    const progressOffset2 = ((100 - temperatureProgress) / 100) * 472
    setOffset2(progressOffset2);
}, [setOffset2, temperatureProgress, offset2]);
  return (
    <div>
       <div className="temperature-progress-bar">
        <h2>Temperature</h2>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
           >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle 
             cx="80"
             cy="80"
              r="70" 
              stroke-linecap="round"
               fill= "none"
               stroke= "red"
               stroke-width= {20}
               stroke-dasharray= {472}
               stroke-dashoffset = {offset2}/>
              
          </svg>
          <p className = "temp-percentage">
            {temperatureProgress}<span>&#176;</span> 
          </p>
      </div>
          
    </div>
  )
}

export default ProgressBar2
