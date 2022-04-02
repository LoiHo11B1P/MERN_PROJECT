import {useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Update.css'
import { UserContext } from "../contexts/UserContext";

function App () {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext)
  
  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')  
  const [gender, setGender] =useState('')
  const [weight, setWeight] =useState('')
  const [height, setHeight] =useState('')
  const [isPrivate, setIsPrivate] =useState(false)
  const [activeness, setActiveness] =useState('')
  const [waterGoal, setWaterGoal] =useState('')
  const [caloriesGoal, setCaloriesGoal] =useState('')
  
  const signUp = async (e) => {
    e.preventDefault()
  
    const url = 'https://frozen-plateau-93848.herokuapp.com/users/'
    const response = await fetch(url, 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            name: name,
            email: email,
            pin: password,
            gender: gender,
            weight: weight,
            height: height,
            isPrivate: isPrivate,
            activeness: activeness,
            waterGoal: waterGoal,
            caloriesGoal: caloriesGoal 
          }
        )
      }
    )
  
    const result = await response.json();
  
    if(result && result.success) {
      console.log(result.data)
      setUser(result.data)
      navigate("/")
  
    } else {
  
      console.log(result.message)
  
    }
  
  }
  
    return (
      <div className="background">
        <div className="profile-logo"></div>

        <div className="navbar">
            <a href="">Make an update</a>
            <a href="">Settings</a>
        </div>

        <div className="update-editor">
        
return (
  <div className="body">
    <div className="logo">

    </div>
    <div className="container" >
      <h1 className="Heading">Update Profile</h1>
      <form className="form" onSubmit={ signUp }>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          defaultValue={ user.name }
        />
        <br />
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
        <input
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          type="text"
          placeholder="Gender"
        />
        <br /> 
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="text"
          placeholder="Weight"
        />
        <br /> 
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="text"
          placeholder="Height"
        />
        <br /> 
        <input
          value={activeness}
          onChange={(e) => setActiveness(e.target.value)}
          type="text"
          placeholder="Activeness"
        />
        <br /> 
        <input
          value={waterGoal}
          onChange={(e) => setWaterGoal(e.target.value)}
          type="text"
          placeholder="WaterGoal"
        />
        <br /> 
        <input
          value={caloriesGoal}
          onChange={(e) => setCaloriesGoal(e.target.value)}
          type="text"
          placeholder="CaloriesGoal"
        />
        <br /> 
        <h3> Already have an account? 
          <a href="Login">Login here</a>
        </h3>
        <input type="submit" value="Sign up" />
        
      </form>
    </div>
  </div>
)
        </div>
      </div>
    );

}
  
export default App;