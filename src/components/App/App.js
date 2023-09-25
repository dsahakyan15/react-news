import { useState } from "react";
import './App.css'
import LocalStorageService from "../../services/LocalStorageService";
import RegisterPage from "../RegisterPage/RegisterPage";
import UserPage from "../UserPage/UserPage"
import DarkThemeToggle from "../DarkThemeToggle/DarkThemeToggle";
import ForTest from "../ForTest/ForTest";

function App() {
    const storedData = LocalStorageService.getUserData()
    const [userData, setUserData] = useState(storedData)
    const [isRegistered, setIsRegistered] = useState(!!storedData)
    const [darkMode,setDarkMode] = useState(false)

    const handleRegistration = (userData) => {
        LocalStorageService.saveUserData(userData)

        setUserData(userData)
        setIsRegistered(true)
    }
    const changeBg = () => {
        setDarkMode(!darkMode)
    }
    if(darkMode){
        document.body.classList.toggle('dark')
    }
    return (
        <div className={"app"}>
            {/* {<ForTest/>} */}
            <DarkThemeToggle changeBg={changeBg}/>
            {
                isRegistered ?
                    <UserPage
                        userData={userData} />
                    :
                    <RegisterPage
                        handleRegistration={handleRegistration}
                    />
            }
        </div>)
}


// class App extends Component {
//     state = {
//         userData: {},
//         isRegistered: false
//     }

//     handleRegistration = (userData) => {
//         this.setState({
//             userData,
//             isRegistered: true
//         })

//     }

//     render() {
//         const { userData, isRegistered } = this.state

//         return (
//             <div className="app">
//                 {/* {<ForTest/>} */}
//                 {
//                     isRegistered ?
//                         <UserPage
//                             userData={userData} />
//                         :
//                         <RegisterPage
//                             handleRegistration={this.handleRegistration}
//                         />
//                 }
//             </div>)
//     }
// }

export default App