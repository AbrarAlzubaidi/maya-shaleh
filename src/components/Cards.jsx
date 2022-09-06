import React from "react";
import "../assets/css/Cards.css";
export default function Cards(props){
    let image_path = `/images/${props.item.image}`;
    console.log(typeof image_path);
    console.log(image_path);
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