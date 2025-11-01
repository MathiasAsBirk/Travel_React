import React from "react"
import Header from "../components/header/Header"
import Topics from "../components/topics/Topics"
import TripsSection from "../components/trips/Trips"
import WouldYouRatherSection from "../components/wouldurather/WouldYouRatherSection"




const Home = () =>{
    return(
        <article>
        <Header headerType="home"/>
        <Topics/>
        <TripsSection/>
        <WouldYouRatherSection/>
        </article>
    )
}

export default Home