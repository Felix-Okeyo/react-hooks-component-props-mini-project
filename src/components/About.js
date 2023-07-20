import React from "react";

function About (props, posterSrc="https://via.placeholder.com/215"){
    // const {image:"https://via.placeholder.com/215", about }= props;
    return (
        <aside>
            <img src={props.image || posterSrc} alt="blog logo"/>
            <p>{props.about}</p>
        </aside>
    )
}

export default About