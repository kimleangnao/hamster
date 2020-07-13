import React from 'react';

const Control = ({value}) => {
    return(
        <div className="hamster--control">
            <div className="hamster--control--wrapper">
                <div className={`${value == 1  ? "hamster--control--eat--active": "hamster--control--eat"}`}>
                    <i className={`${value == 1 ? "fas fa-cookie fas-active" :"fas fa-cookie fas-noactive" }`}></i>
                </div>
                <div className={`${value == 2 ? "hamster--control--reading--active": "hamster--control--reading"}`}>
                    <i className={`${value == 2 ? "fas fa-book-open fas-active" :"fas fa-book-open fas-noactive"}`}></i>
                </div>
                <div className={`${value == 3 ? "hamster--control--playing--active": "hamster--control--playing"}`}>
                <i className={`${value == 3 ? "fas fa-gamepad fas-active" :"fas fa-gamepad fas-noactive"}`}></i>
                </div>
                <div className={`${value == 4 ? "hamster--control--sleep--active": "hamster--control--sleep"}`}>
                <i className={`${value == 4 ? "fas fa-bed fas-active" : "fas fa-bed fas-noactive"}`}></i>
                </div>
            </div>
        </div>   
    )
}

export default Control;