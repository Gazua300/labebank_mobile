import React, { createContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"


export const Context = createContext()


const AuthProvider = (props)=>{
    const navigation = useNavigation()


    const getToken = async(tk)=>{
        try{
          await AsyncStorage.setItem('token', tk)
        }catch(e){
          alert(e)
        }
      }
    
    
      const token = async()=>{
        try{
          const value = AsyncStorage.getItem('token')
          if(value !== null){
            navigation.navigate('Balance')
          }
        }catch(e){
          alert(e)
        }
      }


      const noToken = async()=>{
        try{
          const value = await AsyncStorage.getItem('token')
          if(!value){
            navigation.navigate('Login')
          }
        }catch(e){
          alert(e)
        }
      }


      const setters = { getToken, token, noToken }

    return(
        <Context.Provider value={{ setters }}>
            {props.children}
        </Context.Provider>
    )
}
export default AuthProvider