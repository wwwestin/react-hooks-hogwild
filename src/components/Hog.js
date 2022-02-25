import React, {useState} from "react";
import HogDetails from "./HogDetails";


function Hog({hog}) {

  const {name, image } = hog
  const [showDetails, setShowDetails]  = useState(false)

  function handleDetailClick() {
    setShowDetails((showDetails) => !showDetails);
}


        return (
            <div className="image">
                <img onClick ={handleDetailClick} src = {image} alt=""/> 
                {showDetails ? <HogDetails hog ={hog}/>: ""}
            <div>
                {name}
               
            </div>
            </div>
        )
    }
    
    export default Hog;