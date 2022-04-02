import {useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
import { UserContext } from "../contexts/UserContext";
function App() {

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext)

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
    <div className="body">
      <div className="logo">

      </div>
      <div className="container" >
        <h1 className="Heading">Sign up</h1>
        <form className="form" onSubmit={ signUp }>
          Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="First , Last"
          />
          <br />
          Email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <br />
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          <br /> 
          Gender:
          <input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            type="text"
            placeholder="Gender"
          />
          <br />
          Weight: 
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="text"
            placeholder="Ex:(140lbs)"
          />
          <br /> 
          Height:
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            type="text"
            placeholder="Ex:(70inches)"
          />
          <br /> 
          Avtiveness:
          <input
            value={activeness}
            onChange={(e) => setActiveness(e.target.value)}
            type="text"
            placeholder="Description"
          />
          <br /> 
          Daily Water Goal:
          <input
            value={waterGoal}
            onChange={(e) => setWaterGoal(e.target.value)}
            type="text"
            placeholder="How many ounces?"
          />
          <br /> 
          Daily Calories Goal:
          <input
            value={caloriesGoal}
            onChange={(e) => setCaloriesGoal(e.target.value)}
            type="text"
            placeholder="How many calories?"
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
