import {useState} from 'react'
import './Login.css'

function App() {
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
  
  
    return (
        <div className="body">
            <div className="logo"></div>
            <div className="login-container" >
                <h2 className="Heading2">Login</h2>
                <form className="form">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                    />
                    <br />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                        placeholder="Password"
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