import React, {useState, useEffect} from "react";
import profile from "./images/hamster.JPG";
import Howto from "./Howto";
import Status from "./Info";
import Control from "./Control";
import Block from "./Block";
import Modal from "./Modal";

const House = () =>{

    let storageLike = localStorage.getItem("likeP");
    let storageHunger = localStorage.getItem("hungerP");
    let storageExcitement = localStorage.getItem("excitementP");
    let storageSleep = localStorage.getItem("sleepP");

    let [showModal, setModal] = useState(true);
    let [actionStillGoing, setActionStillGoing] = useState(false);
    let [value, setValue] = useState(1);
    let [select, setSelect] = useState(null);
    let [expand, setExpand] = useState(false);
    let [likeP, setLikeP] = useState(30);
    let [hungerP, setHungerP] = useState(30);
    let [sleepP, setSleepP] = useState(30);
    let [excitementP, setExcitementP] = useState(30);
    let [active, setActive] = useState(null);

    useEffect(() => {
        setLikeP(likeP = JSON.parse(storageLike));
        setHungerP(hungerP = JSON.parse(storageHunger));
        setExcitementP(excitementP = JSON.parse(storageExcitement));
        setSleepP(sleepP = JSON.parse(storageSleep));

        function keypressF(e){
            if(e.keyCode == "39"){
                if(value < 4){
                    setValue(value += 1);
                }else if (value == 4){
                    setValue(value = 1);
                }
            }else if(e.keyCode == "37"){
                if(value > 1){
                    setValue(value-=1)
                }else if(value == 1){
                    setValue(value = 4)
                }
            }else if (e.keyCode == "13"){
                if(!actionStillGoing){
                    setSelect(select = value);
                    setActive(active = value);
                    setActionStillGoing(actionStillGoing=true);
                    increase();
                }
              
            }
        };
        document.addEventListener("keydown",keypressF)
        //return here to prevent memory leaked ? if you don't  do this, the page will be very slow
        return () => {
            document.addEventListener("keydown", keypressF)
        }
    }, []);

    function increase(){
        if(active == 2){
            let increaseKnowledgeInterval = setTimeout(function(){
                if(likeP + 5 < 100){
                    hungerP >= 50 ? setLikeP(likeP += 10)  : setLikeP(likeP += 5);
                    excitementP < 50 ? setSleepP(sleepP - 5 < 0 ? sleepP = 0 : sleepP -=5) : setSleepP(sleepP - 3 < 0 ? sleepP = 0 : sleepP -=3)  ;
                    setSelect(select = null);
                    localStorage.setItem("likeP", JSON.stringify(likeP));
                    setActionStillGoing(actionStillGoing =  false);
                    clearTimeout(increaseKnowledgeInterval);
                }else if (likeP + 5 >= 100){
                    setLikeP(likeP=100);
                    setSelect(select = null);
                    localStorage.setItem("likeP", JSON.stringify(likeP));
                    setActionStillGoing(actionStillGoing =  false);
                    clearTimeout(increaseKnowledgeInterval);
                }
            },30000);
        }else if (active == 1){
            let increaseHungerInterval = setTimeout(function(){
                if(hungerP + 5 < 100){
                    hungerP >= 50 ? setHungerP(hungerP += 10) : setHungerP(hungerP += 5);
                    excitementP < 50 ? setLikeP(likeP - 5 < 0 ? likeP = 0 : likeP -= 5) : setLikeP(likeP - 3 < 0 ? likeP = 0 : likeP -= 3);
                    setSelect(select = null);
                    localStorage.setItem("hungerP", JSON.stringify(hungerP));
                    clearTimeout(increaseHungerInterval);   
                    setActionStillGoing(actionStillGoing =  false);             
                }else if (hungerP + 50 >= 100){
                    setHungerP(hungerP=100);
                    setSelect(select = null);
                    localStorage.setItem("hungerP", JSON.stringify(hungerP));
                    setActionStillGoing(actionStillGoing =  false);
                    clearTimeout(increaseHungerInterval);   
                }
            },30000);
        }else if (active == 3){
            let increaseExcitementInterval = setTimeout(function(){
                if(excitementP + 5 < 100){
                    hungerP >= 50 ? setExcitementP(excitementP += 10) : setExcitementP(excitementP+=5);
                    excitementP < 50 ? setHungerP(hungerP-5 < 0 ? hungerP = 0 : hungerP -= 5) : setHungerP(hungerP - 3 < 0 ? hungerP = 0 : hungerP -= 3) ;
                    setSelect(select = null);
                    localStorage.setItem("excitementP", JSON.stringify(excitementP))
                    setActionStillGoing(actionStillGoing =  false);
                    clearTimeout(increaseExcitementInterval);
                }else if (excitementP + 5 >=100){
                    setExcitementP(excitementP=100);
                    setSelect(select = null);
                    localStorage.setItem("excitementP", JSON.stringify(excitementP))
                    setActionStillGoing(actionStillGoing =  false);
                    clearTimeout(increaseExcitementInterval);
                }
            },30000);
        }else if (active == 4){
            let increaseSleepInterval = setTimeout(function(){
                if(sleepP + 5 < 100){
                    hungerP >= 50 ? setSleepP(sleepP += 10) : setSleepP(sleepP += 5);
                    excitementP < 50  ? setExcitementP(excitementP-5 < 0 ? excitementP = 0 : excitementP -= 5) : setExcitementP(excitementP - 3 < 0 ? excitementP = 0 : excitementP -= 3) ;
                    setSelect(select = null);
                    localStorage.setItem("sleepP", JSON.stringify(sleepP));
                    setActionStillGoing(actionStillGoing =  false);
                    clearTimeout(increaseSleepInterval); 
                }else if (sleepP + 5 >= 100){
                    setSleepP(sleepP=100);
                    setSelect(select = null);
                    localStorage.setItem("sleepP", JSON.stringify(sleepP));
                    setActionStillGoing(actionStillGoing =  false);
                    clearTimeout(increaseSleepInterval); 
                }
            },30000);
        }
    }
    
    return(
        <div className="house--div">
            {
                showModal ? 
                <Modal>
                    <div className="modal--wrapper">
                        <p>All the game datas are store in your Browser Local Storage </p>
                        <p>P.S: Don&apos;t forget to drink your water</p>
                        <button onClick={() => setModal(showModal = !showModal)}><i className="fas fa-times"></i></button>
                    </div>
                </Modal> 
                : ""
            }
            <h1 className="house--div--h1">Hamster&apos;s House</h1>
            <Block select={select} profile={profile} />
            <Control value={value}  />
            <Status
                likeP={likeP} 
                hungerP={hungerP} 
                sleepP={sleepP} 
                excitementP={excitementP}
            />
            <Howto 
                expand={expand} 
                setExpand={setExpand}  
            />
        </div>
    );
};

export default House;