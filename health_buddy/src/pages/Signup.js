import {useState} from 'react'
import './Signup.css'

function App() {
  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')  
  const [gender, setGender] =useState('')
  const [weight, setWeight] =useState('')
  const [height, setHeight] =useState('')
  const [activeness, setActiveness] =useState('')
  const [waterGoal, setWaterGoal] =useState('')
  const [caloriesGoal, setCaloriesGoal] =useState('')



  return (
    <div className="body">
      <div className="logo">

      </div>
      <div className="container" >
        <h1 className="Heading">Sign up</h1>
        <form className="form">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
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
}

export default App;
