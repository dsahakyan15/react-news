import { useState } from "react";
import './DarkThemeToggle.css'

function DarkThemeToggle(props) {

const [isEnabled,setIsEnabled] = useState(false)

const onChangeThemeColor = () => {
    document.body.classList.toggle('dark')
    //  = isEnabled ? 'black' : 'white'
    // document.body.style.color = isEnabled ? 'white' : 'black'

    setIsEnabled(!isEnabled)
}

    return (
        <div>
            <label>
                Change Theme
                <input type="checkbox" checked={isEnabled} onChange={onChangeThemeColor} />
            </label>
            
        </div>)
}

export default DarkThemeToggle