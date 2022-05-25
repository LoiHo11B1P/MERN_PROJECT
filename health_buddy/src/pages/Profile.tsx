/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import  { UserContext } from "../contexts/UserContext";
import React from 'react';


function App () {

    const navigate = useNavigate();

    const { user } = useContext(UserContext)

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    },[user, navigate])
    

    return (
        <div className="background">
            <div className="profile-logo">

            </div>

            <div className="profile-layout">
                <div className="navbar">
                    <a href="#">Make an update</a>
                    <a href="#">Settings</a>
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