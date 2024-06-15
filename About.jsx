import {useTypewriter, Cursor} from 'react-simple-typewriter'
import pfp from './assets/my_pic.jpeg'

function About(){
    const [typeEffect] = useTypewriter({
        words: ["student at VIT Chennai", "Python developer", "Full Stack developer"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })
    return(
        <section id='about'>
            <h1 id="name">SUDHARSAN BALAJEE</h1>
            <h1 style={{ color: "white", fontFamily: "Poppins", fontWeight: 400}} id="typewriter_txt">
                I am a  <span style={{color: "green", fontFamily: "Poppins", fontWeight: 300}}>{typeEffect}</span>
                <Cursor cursorColor='blue'></Cursor>
            </h1>
            <img src= {pfp} id="my-pic"></img>
            <br></br>
            <br></br>
            <p id="intro_txt">
                Greetings! I am an undergrad student at <span style={{fontWeight: 700}}>Vellore Institute of Technology, Chennai</span> (currently in my 2nd year) 
                pursuing a degree in
                Computer Science with a specialization in <span style={{fontWeight: 700}}>AI/ML</span>.
                <br></br>
                <br></br>
                With hands-on experience in <span style={{fontWeight: 700}}>Python, Tkinter and PIL</span> as well as in the Full Stack field 
                with <span style={{fontWeight: 700}}>HTML/CSS, Javascript, React and
                MongoDB</span>, I have developed a strong technical foundation. 
                <br></br>
                <br></br>
                As an active member of the <span style={{fontWeight: 700}}>Toastmasters International</span> club at my university I have boosted my public speaking, communication
                and leadership skills through various weekly meetings organized by the club.
                <br></br>
                <br></br>
                My interests lie in the fields of AI/ML and in web development. I look forward to dive deeper into the wide world of AI through
                my college degree as well as external events, courses and projects.
            </p>
        </section>
    )
}

export default About