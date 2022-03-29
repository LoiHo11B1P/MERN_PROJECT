# MERN_PROJECT

After Cloning:
1. run npm init

    Front End Code Reside in "health_buddy" folder

    Back End Code Reside in "server" folder

2.  Setup Mongo, Mongoose, and .env file for backend


User API:
    Api will return an json object containning "success", "message", and "data". "data" containing the information.

1. GET Retrieve All User 
    - end point: 'users/' 
    - get all user information who is not selected to be private
    - information return will exclude id, pin, email, isPrivate fields

2. POST Login
    - end point: 'users/login' 
    - for user to login with email and pin
    - expect email and pin in the body of the request
    - return all user information for specific user

3. POST Create User
    - end point: 'users/'
    - check users model for require fields

4. PUT Update User Account
    - end point: 'users/id/update'
    - require _id of the user account
    - body of request need to contain fields and values to be update

5. DELETE Remove User Account
    - end point: 'users/id/remove'
    - require _id of the user account
    - permanently remove the user account

6. POST Record Water Intake
    - end point: 'users/water/id'
    - require "amount" of water in oz
    - "time" can be specified or leave blank for default

7. GET Retrieve Water Intake Record
    - end point: 'users/water/id&timePeriod'
    - timePeriod can be 0 to retrieve all record

8. POST Record Calories Intake
    - end point: 'users/calories/id'
    - require: food, amountOfFood, amountOfCalories
    - dateTime is optional, wil just default to current date time if not specified

9. GET Retrieve Calories Intake Record
    - end point: 'users/calories/id&timePeriod'
    - timePeriod can be 0 to retrieve all record