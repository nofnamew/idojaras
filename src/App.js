import React, { useEffect, useState } from "react";
import "./App.css"
import WeatherApp from "./Components/WeatherApp/WeatherApp.jsx";


function App (){

    const [searchTerm, setSearchTerm] = useState("")

    return(
        <>
            <WeatherApp />
        </>
    )
}

export default App