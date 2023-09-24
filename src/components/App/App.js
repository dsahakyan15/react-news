import { useState } from "react";
import './App.css'
import LocalStorageService from "../../services/LocalStorageService";
import RegisterPage from "../RegisterPage/RegisterPage";
import UserPage from "../UserPage/UserPage"
import ForTest from "../ForTest/ForTest";

function App() {
    const storedData = LocalStorageService.getUserData()
    const [userData, setUserData] = useState(storedData)
    const [isRegistered, setIsRegistered] = useState(!!storedData)

    const handleRegistration = (userData) => {
        LocalStorageService.saveUserData(userData)

        setUserData(userData)
        setIsRegistered(true)
    }

    return (
        <div className="app">
            {/* {<ForTest/>} */}
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