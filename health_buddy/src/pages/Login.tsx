import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { UserContext } from "../contexts/UserContext";
import React from 'react';


function App() {

    const navigate = useNavigate();
    
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    
    const { setUser } = useContext(UserContext)

    const [ loginMessage, setLoginMessage ] = useState('')

    // login
    const onLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        attemptLogin(email, password)
        
    }

    // contact api to login
    const attemptLogin = async(email: string, pin: string) => {
        const url = 'https://frozen-plateau-93848.herokuapp.com/users/login'
        let response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, pin: pin})
            }    
        )

        const result = await response.json();
        if(result && result.data.length > 0) {

            setUser(result.data[0])

            navigate("/")


        } else {
            console.log("Invalid User Name or Password")
            setLoginMessage ("Invalid User Name or Password")
        }
        
    }

  
    return (
        <div className="body">
            <div className="logo"></div>
            <div className="login-container" >
                <h2 className="Heading2">Login</h2>
                <p id="loginMessage">
                    { loginMessage }
                </p>
                <form className="form" onSubmit={ onLogin }>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <br />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <br /> 
                    <h4> Don't have an account yet? 
                        <a href="Signup">Sign up here</a>
                    </h4>
                    <input type="submit" value="Login" />
                    
                </form>
            </div>
      </div>
    )
  }
  
  
  export default App;