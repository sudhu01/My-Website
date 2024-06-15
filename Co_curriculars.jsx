import ImageSlider from "./ImageSlider"


function Co_curriculars(){

    const slide = [{url: 'https://www.ourquadcities.com/wp-content/uploads/sites/19/2023/03/Toastmasters.jpg?w=1280', title: "toastmasters"},
        {url: 'https://c0.wallpaperflare.com/preview/949/577/298/united-states-orlando-music-video-music-videos.jpg', title: "videoeditng"},
        {url: 'https://media.pehubeurope.com/uploads/2022/08/GettyImages-1314614693-716x402.jpg', title: "football"}]

    const containerStyles = {
        width: "1000px",
        height: "500px",
        margin: "20px",
    };


    return(
        <>
            <section id="co-curriculars" style={containerStyles}>
                <h1 className="eight" style={{color:"white",fontFamily:"Poppins",paddingLeft:"10px",paddingBottom:"20px"}}>Co-curriculars</h1>
                
                <ImageSlider slides= {slide}></ImageSlider>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
            </section>
            
        </>
    )


}

export default Co_curriculars