import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import pic from '../images/profile-user.png'
import  { UserContext } from "../contexts/UserContext";

function App () {

    const navigate = useNavigate();
    
    const [waterIntake, setWaterIntake] = useState(0)

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

    return (
        <div className="background">
            <div className="profile-logo">

            </div>

            <div className="profile-layout">
                <div className="navbar">
                    <button onClick={ updateProfile }>Make an update</button>
                    <a> Settings</a>
                </div>

                <div className="profile-container">
                    <div className="profile-icon">
                        
                    </div>

                    <div className="my-profile-text">
                        <h1>
                            { user.name }
                        </h1>
                    </div>

                    <div className="profile-body">
                        <h2>
                            Gender: { user.gender}
                            <br />
                            Weight: { user.weight } lbs
                            <br />
                            Height: { user.height } inches
                            <br />
                            Water Goal:{ user.waterGoal } oz
                            <br />
                            Calories Goal: { user.caloriesGoal } cals
                        </h2>
                    </div>
                </div>

                </div>
                    <div className="user-feed-box">
                        <div>
                            <label for="water-intake">Water Intake</label>
                            <input type="number" value={ waterIntake } onChange={ (e) => setWaterIntake(e.target.value)}></input>
                            <button onClick={ addWaterIntake }>Add Water Intake</button>
                        </div>
                        <div>
                            <button onClick={ getWaterIntake }>Refresh Water Status</button>
                        </div>
                        <h3> logs...
                            <br />
                             logs....
                        </h3>

                    </div>

                <div className="trackers">
                    <div className="calorie-tracker">
                        <h1>
                            calories here
                        </h1>
                    </div>

                <div className="water tracker">
                    <h1>
                    water here
                    </h1>
                </div>
            </div>
        </div>
    );

}
  
export default App;