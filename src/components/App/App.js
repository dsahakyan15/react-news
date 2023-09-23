import { useState } from "react";
import './App.css'
import RegisterPage from "../RegisterPage/RegisterPage";
import UserPage from "../UserPage/UserPage"
import ForTest from "../ForTest/ForTest";

function App () {
    const [userData,setUserData] = useState({})
    const [isRegistered,setIsRegistered] = useState(false)

    const handleRegistration = (userData) => {
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