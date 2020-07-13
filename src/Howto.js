import React from "react";

const Howto = ({expand , setExpand}) =>{
    return(
        <div className="how--to">
            <button className="how--to--title" onClick={() => setExpand(expand = !expand)}>
                <i className="fas fa-info-circle"></i> How to play? {`${expand ? "(---click me to shrink)" : "(---click me to expand)" }`}
            </button>
            <div className={`${expand ? "how--to--play" : "how--to--play--hide"}`}>
            <ul>
                <li>There are 4 main objective (in this order).
                    <ol>
                        <li>Eat</li>
                        <li>Reading</li>
                        <li>Play</li>
                        <li>Sleep</li>
                    </ol>
                </li>
                <li>Use your keyboard 
                    <i className="fas fa-chevron-left"></i> 
                    LEFT or RIGHT 
                    <i className="fas fa-chevron-right"></i> 
                    arrow to move left or right on the menu.
                </li>
                <li>Press ENTER key to select it.</li>
                <li>Goal: Make your little hamster happy :)</li>
            </ul>
            </div>
        </div>
    )
}

export default Howto;