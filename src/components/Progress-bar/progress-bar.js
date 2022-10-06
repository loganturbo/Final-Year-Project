import React, {useEffect, useState} from   'react';
import './progress-bar.css';

function ProgressBar(props) {
  const [offset, setOffset] = useState(0);
  const {
    humidityProgress,
   
  } = props;
  useEffect(() =>{
    const progressOffset = ((100 - humidityProgress) / 100) * 472
    setOffset(progressOffset);
  }, [setOffset, humidityProgress, offset]);
  return (
    <>
    <div>
      <div className="humidity-progress-bar">
      <h2>Humidity</h2>

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
               stroke= "blue"
               stroke-width= {20}
               stroke-dasharray= {472}
               stroke-dashoffset = {offset}/>
              
          </svg>
          <p className = "hum-percentage">
            {humidityProgress}%
          </p>
      </div>
          
    </div>
    
    </>
  );
}

export default ProgressBar
