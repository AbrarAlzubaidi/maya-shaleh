import React from "react";
import "../assets/css/Cards.css";

export default function Cards(props){
    // console.log(props.item.title)
    let image_path = "../src/assets/images/"+props.item.image;
    return(
        <div className="features">
            <div className="card">
                <div className="image">
                    <img src={image_path}/>
                </div>
                <div className="card-content">
                    <h2 className="card-title">{props.item.title}</h2>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}