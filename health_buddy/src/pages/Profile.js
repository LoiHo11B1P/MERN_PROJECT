import React from 'react';
import './Profile.css'
import pic from '../images/profile-user.png'


function App () {
    return (
        <div className="background">
            <div className="profile-logo">

            </div>

            <div className="profile-layout">
                <div className="navbar">
                    <a href="">Make an update</a>
                    <a href="">Settings</a>
                </div>

                <div className="profile-container">
                    <div className="profile-icon">
                        
                    </div>

                    <div className="my-profile-text">
                        <h1>
                            My Profile
                        </h1>
                    </div>

                    <div className="profile-body">
                        <h2>
                            My gender
                            <br />
                            My weight
                            <br />
                            My height
                            <br />
                            My watergoal
                            <br />
                            My caloriegoal
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