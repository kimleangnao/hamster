import React from "react";

const Status = ({likeP, hungerP, sleepP, excitementP}) => {
    return(
        <section className="hamster--info">
            <div className="hamster--info--title"><i className="fas fa-paw"></i> Hamster Status </div>
            <div className="hamster--info--expand" >
                <div className="hamster--info--title--wrapper">
                    <div className="hamster--info--status--title">
                        <p>Mood:</p>
                    </div>
                    <div className="hamster--info--status--update">
                        {(likeP + hungerP + sleepP + excitementP) <= 200 ? 
                        (<p><i className="fas fa-tired"></i> Do the activities to improve your hamster mood</p>)
                            : (likeP + hungerP + sleepP + excitementP) <= 300 ? (<p style={{color: "green"}}><i className="far fa-laugh-squint"></i> Hamster is fairly happy.</p>) : 
                            (<p style={{color: "yellow"}}><i className="far fa-grin-stars"></i> Hamster is very happy.</p>)}
                        
                    </div>
                </div>
                <div className="hamster--info--title--wrapper">
                    <div className="hamster--info--title--like--emote">
                        <i className="fas fa-book-open"></i>
                    </div>
                    <div className="hamster--info--title--like">Knowledge</div>
                    <div className="hamster--info--title--like--bar">
                        <div style={{width: `${likeP}%`}} className={likeP < 50 ? "hamster--info--title--like--bar--progress red" 
                        : likeP <70 ? "hamster--info--title--like--bar--progress green" : "hamster--info--title--like--bar--progress gold" }></div>
                    </div>
                </div>
                <div className="hamster--info--title--wrapper">
                    <div className="hamster--info--title--hunger--emote">
                        <i className="fas fa-cookie"></i>
                    </div>
                    <div className="hamster--info--title--hunger">Hunger</div>
                    <div className="hamster--info--title--hunger--bar">
                        <div style={{width: `${hungerP}%`}} className={hungerP < 50 ? "hamster--info--title--like--bar--progress red" 
                        : hungerP <70 ? "hamster--info--title--like--bar--progress green" : "hamster--info--title--like--bar--progress gold"}></div>
                    </div>
                </div>
                <div className="hamster--info--title--wrapper">
                    <div className="hamster--info--title--sleep--emote">
                        <i className="fas fa-bed"></i></div><div className="hamster--info--title--sleep">Sleep</div>
                        <div className="hamster--info--title--sleep--bar">
                            <div style={{width: `${sleepP}%`}} className={sleepP < 50 ? "hamster--info--title--like--bar--progress red" 
                        : sleepP <70 ? "hamster--info--title--like--bar--progress green" : "hamster--info--title--like--bar--progress gold"}></div>
                        </div>
                    </div>
                <div className="hamster--info--title--wrapper">
                    <div className="hamster--info--title--excitement--emote">
                        <i className="fas fa-laugh-beam"></i>
                    </div>
                    <div className="hamster--info--title--excitement">Exictement</div>
                    <div className="hamster--info--title--excitement--bar">
                        <div style={{width: `${excitementP}%`}} className={excitementP < 50 ? "hamster--info--title--like--bar--progress red" 
                        : excitementP <70 ? "hamster--info--title--like--bar--progress green" : "hamster--info--title--like--bar--progress gold" }></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Status;