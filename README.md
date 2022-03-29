# MERN_PROJECT

After Cloning:
1. run npm init

Front End Code Reside in "health_buddy" folder

Back End Code Reside in "server" folder

User API:

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