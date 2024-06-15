

function Card(props){
    return(
        <div className="module-border-wrap">
            <div className="card">
            <img src ={props.imgsrc} alt="pfp" id="card_image"></img>
            <h2 id="title">{props.title}</h2>
            <p style={{padding: 10, paddingTop: 0}}> {props.txtcontent}
                <br></br>
                <a href= {props.link} target="_blank" className="link">View More →</a>
            </p>
            </div>
        </div>
    )
}

export default Card