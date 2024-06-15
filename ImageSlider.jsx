import { useState } from "react"


const ImageSlider = ({slides}) => {

    const [currentindex, setcurrentindex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    };

    const slideStyles = {
        width: "140%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentindex].url})`,
        opacity: 0.4,
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",

    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: '-362px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
    };

    const fontStyles = {
        fontFamily: "Poppins", 
        color: "white", 
        zIndex: 1, 
        position: "absolute",
        top: "65%",
        left: "35%",
        textAlign: "center",
        fontWeight: "500",
    };

    const titleStyles = {
        fontFamily: "Poppins", 
        color: "black", 
        zIndex: 1, 
        position: "absolute",
        top: "35%",
        left: "52%",
        textAlign: "center",
        fontWeight: "700",
        fontSize: "40px"
    };

    const text = ["I am part of Oratio VIT, a Toastmasters club in my university where I have developed my public speaking, communication and leadership skills significantly.",
        `I have a passion for video editing and have been editing since 9th grade for various intra and interschool competitions. I won a national level short film competition conducted in the Energy Ambassador programme 2021, by the Rotary Club of Coimbatore.`,
        `I have been playing football since my childhood and have a deep love for the sport. I was part of my school (PSBB Nungambakkam) football team.`

    ]

    const title = ["", "VIDEO EDITING", "FOOTBALL"]

    const goToPrevious = () => {
        const is_first_slide = currentindex === 0;
        const new_index = is_first_slide? slides.length - 1 : currentindex - 1;
        document.getElementById("co_curriculars_txt").textContent = text[new_index];
        document.getElementById("co_curriculars_title").textContent = title[new_index];
        setcurrentindex(new_index);
    };

    const goToNext = () => {
        const is_last_slide = currentindex === slides.length - 1;
        const new_index = is_last_slide? 0 : currentindex + 1;
        document.getElementById("co_curriculars_txt").textContent = text[new_index];
        document.getElementById("co_curriculars_title").textContent = title[new_index];
        setcurrentindex(new_index);
    };

    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>⮜</div>
            <div style={rightArrowStyles} onClick={goToNext}>⮞</div>
            <h2 style={titleStyles} id="co_curriculars_title"></h2>
            <h4 style={fontStyles} id="co_curriculars_txt">I am part of Oratio VIT, a Toastmasters club in my university where I have developed my public speaking, communication and leadership skills significantly.</h4>
            <div style={slideStyles}>
            
                

            </div>
        </div>
    )
}

export default ImageSlider