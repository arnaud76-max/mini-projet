import React, {useState} from "react";
import DisplayComponents from "./Component/DisplayComponents";
import BtnComponents from "./Component/BtnComponents";


function App  () {

      const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
      const [interv, setInterv] = useState(); 
      const [status, setStatus] = useState(1); 
        const start =() => {
          run();
          setStatus(1);
        setInterv( setInterval(run, 10));
};

var updatedMs  =  time.ms,  updatedS =  time.s,  updatedM =  time.m,  updatedH = time.h; 

const run = () => {
  if(updatedM === 60)
  {
    updatedH++;
    updatedM= 0;
  }
  if(updatedS ===60)
  {
    updatedM++;
    updatedS=0;
  }
  if(updatedMs ===100)
  {
      updatedS++;
      updatedMs = 0;
  }
  updatedMs++;
  return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
};

const stop =() => {
  clearInterval(interv);
setStatus(2);
};
const reset =() => {
  clearInterval(interv);
setStatus(0);
setTime({ms:0, s:0, m:0, h:0})
};

const resume = () => start();

  return (
  <div className="main-section">
     <div className="clock-holder">
           <div className="stopwatch">
                  <DisplayComponents time ={time} />
           </div>
                  <BtnComponents status={status} resume={resume} reset={reset} stop={stop}  start ={start}   />
     </div>
    </div>
  );
};

export default App;

