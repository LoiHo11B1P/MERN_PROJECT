import { useState, createContext} from "react";

export type GlobalContent = {
    user: {
        name: string
        gender: string
        weight: number
        height: number
        waterGoal: number
        caloriesGoal: number
    },
    setUser:  (c:{
        name: string
        gender: string
        weight: number
        height: number
        waterGoal: number
        caloriesGoal: number
    }) => void
}

export const UserContext = createContext <GlobalContent>({
    user: {
        name: '',
        gender: '',
        weight: 0,
        height: 0,
        waterGoal: 0,
        caloriesGoal: 0,
    },
    setUser: () => {}
});



export const UserProvider = ({children} :{children: any}) => {

    const [user, setUser] = useState({
        name: '',
        gender: '',
        weight: 0,
        height: 0,
        waterGoal: 0,
        caloriesGoal: 0,
    })

    return (
        <UserContext.Provider value={{ user, setUser}}>
         { children }       
        </UserContext.Provider>
    )
    
}