import { useEffect, useState } from "react";

let time = () => {
const[curTime , setCurTime] = useState(new Date());

   useEffect(
    () =>{
const IntervalId = setInterval(() =>{
setCurTime (new Date());
}, 1000)

return  () =>{
clearInterval (IntervalId)
};
    } , []
   );


    return (

<p className="slogan">This is the  current time : {curTime.toLocaleDateString()}  - { " "} {curTime.toLocaleTimeString()}</p>
    );
} 
export default time;