import Card from './Card'
import tpg from './assets/twoplayergames.png'
import weather from './assets/weather.jpg'

function Projects(){
    

    return(
        <>
            <section id="projects">
                <h1 style={{color: "white", fontFamily: "Poppins", paddingLeft: 30, paddingTop: 30}}>Projects</h1>
                <br></br>
                <Card title="Two Player Games" imgsrc = {tpg} txtcontent = "Co-developed an app to play various popular two player games such as War and Blackjack using Python, Tkinter and PIL"
                link="https://github.com/ShrikarAnand/CS-Project---2PLAYERGAMES"/>
                
                <Card title="Weather App" imgsrc = {weather} txtcontent = "Designed a web app that displays the weather of any given city, with HTML/CSS, Javascript using API integration and JSON file handling"
                link="https://github.com/sudhu01/Weather_WebApp"/>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
            </section>

        </>
    )



}
export default Projects