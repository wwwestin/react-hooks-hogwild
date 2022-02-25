import React from "react"
//import Hog from ".Hog"


function HogDetails({hog}) {

  const {specialty, weight, greased} = hog;
  
return (
    <div>
        <div>{weight}</div>
        <div>{specialty}</div>
        <div>{greased ? "greased": "not greased"}</div>
    </div>
)



}

export default HogDetails;