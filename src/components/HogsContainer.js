import React, {useState} from "react";
import hogs from "../porkers_data";
import Hog from "./Hog.js"

function HogsContainer({hogs}) {
    const [greased, setGreased] = useState(false);
    
 
    function handleFilter() {
        setGreased(!greased)
    }

    return (
        <div>
            {hogs.map(hog =>( <Hog key={hog.name} hog = {hog} />
            ))}
        </div>
    )
    }
export default HogsContainer;