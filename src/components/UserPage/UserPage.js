import './UserPage.css'


function UserPage({ userData }) {
    const { username, email, password } = userData
    return (
        <div className="user-page-wrapper">
            <h1>User page</h1>
            <div className="username">
                <h3>Username:</h3><span>{username}</span>
            </div>
            <div className="email">
                <h3>Email:</h3><span>{email}</span>
            </div>
            <div className="password">
                <h3>Password</h3><span>{password}</span>
            </div>
        </div>
    )
}

export default UserPage

// export default class UserPage extends Component {
//     render() {

//         const { username, email, password } = this.props.userData

//         return (
//         <div className="user-page-wrapper">
//             <h1>User page</h1>
//             <div className="username">
//                 <h3>Username:</h3><span>{username}</span>
//             </div>
//             <div className="email">
//                 <h3>Email:</h3><span>{email}</span>
//             </div>
//             <div className="password">
//                 <h3>Password</h3><span>{password}</span>
//             </div>
//         </div>
//         )
//     }
// }