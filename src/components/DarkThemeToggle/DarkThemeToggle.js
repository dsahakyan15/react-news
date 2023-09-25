import { useState } from "react";

function DarkThemeToggle(props) {



    return (
        <div>
            <input type="checkbox" onChange={props.changeBg} />
        </div>)
}

export default DarkThemeToggle