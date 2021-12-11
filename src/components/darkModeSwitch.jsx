import {useState, useRef, useEffect} from 'react';
import '../styles/darkModeSwitch.css';



const DarkModeSwitch = () =>{
    useEffect(() =>{
        darkModeSwitch.current.checked ? console.log('si') : console.log('no') //DARK MODE LOGIC HERE
    })
    
    const [darkModeSwitchStatus, setDarkModeSwitchStatus] = useState(false);
    const darkModeSwitch = useRef();

    return(
        <label className="switch">
            <input type="checkbox" id="dark-mode-switch-status" ref={darkModeSwitch}/>
            <span className="slider round"/>
        </label>
    )
}

export default DarkModeSwitch;