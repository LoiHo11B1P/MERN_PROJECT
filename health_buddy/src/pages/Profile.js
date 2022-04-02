import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import pic from '../images/profile-user.png'
import  { UserContext } from "../contexts/UserContext";

function App () {

    const navigate = useNavigate();
    
    const [waterIntake, setWaterIntake] = useState(0)

    const [caloriesIntake, setCaloriesIntake] = useState(0)


    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    },[user, navigate])
    
    const updateProfile = () => {
        navigate('/update')

    }


    const addWaterIntake = async () => {
        

        const url = `https://frozen-plateau-93848.herokuapp.com/users/water/${user._id}` 
        const response = await fetch(url, 
            {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                       amount: waterIntake         
                    }
                ) 
            }
        )
        const result = await response.json();
  
        if(result && result.success) {
          console.log(result.data)
          
          
      
        } else {
      
          console.log(result.message)
      
        }

    }

    const getWaterIntake = async () => {
        

        const url = `https://frozen-plateau-93848.herokuapp.com/users/water/${user._id}&0` 
        const response = await fetch(url, 
            {
                method: 'GET',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
               
            }
        )
        const result = await response.json();

  
        if(result && result.success) {
          console.log(result.data)
          
          //navigate("/")
      
        } else {
      
          console.log(result.message)
      
        }

    }

    const addcaloriesIntake = async () => {
        

        const url = `https://frozen-plateau-93848.herokuapp.com/users/calories/${user._id}` 
        const response = await fetch(url, 
            {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                       amount: caloriesIntake         
                    }
                ) 
            }
        )
        const result = await response.json();
  
        if(result && result.success) {
          console.log(result.data)
          
          
      
        } else {
      
          console.log(result.message)
      
        }

    }

    const getCaloriesIntake = async () => {
        

        const url = `https://frozen-plateau-93848.herokuapp.com/users/calories/${user._id}&0` 
        const response = await fetch(url, 
            {
                method: 'GET',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
               
            }
        )
        const result = await response.json();

  
        if(result && result.success) {
          console.log(result.data)
          
          //navigate("/")
      
        } else {
      
          console.log(result.message)
      
        }

    }

    return (
        <div className="background">
            <div className="profile-logo">

            </div>

            <div className="profile-layout">
                <div className="vl-1"></div>

                <div className="welcome-user">
                    <h2>
                        Welcome, { user.name }!
                    </h2>
                </div>

                <div className="profile-container">

                        <div className="user-profile">
                            { user.name }
                        </div>

                    <div className="profile-icon">
                        
                    </div>

                    <div className="profile-body">
                        

                        <h1>
                            Gender: { user.gender}
                            <br />
                            Weight: { user.weight } lbs
                            <br />
                            Height: { user.height } inches
                            <br />
                            Water Goal:{ user.waterGoal } oz
                            <br />
                            Calories Goal: { user.caloriesGoal } cals
                        </h1>
                    </div>
                    <button className="update-button" onClick={ updateProfile }>Update Profile</button>
            </div>

                </div>
                    <div className="user-feed-box">
                        <div className="feed-heading">
                            <h1> Daily Tracker </h1>
                        </div>

                        <div className="daily-tracker">
                            <h1> updates... </h1>
                        </div>

                        <div className="water-form">
                            <label for="water-intake">Water Intake</label>
                            <input type="number" value={ waterIntake } onChange={ (e) => setWaterIntake(e.target.value)}></input>
                            <br />
                            <button onClick={ addWaterIntake }>Add Water Intake</button>
                            <br />
                            <button onClick={ getWaterIntake }>Refresh Water Status</button>
                        </div>
                        
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="calories-form">
                            <label for="calories-intake">Calories Intake</label>
                            <input type="number" value={ caloriesIntake } onChange={ (e) => setCaloriesIntake(e.target.value)}></input>
                            <br />
                            <button onClick={ addcaloriesIntake }>Add Calories Intake</button>
                            <br />
                            <button onClick={ getCaloriesIntake }>Refresh Calories Status</button>
                        </div>
                    </div>
                </div>  
    );

}
  
export default App;