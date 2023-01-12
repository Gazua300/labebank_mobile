import React, { useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import styles from './style'
import { url } from '../../constants/urls'
import { Context } from '../../context/Context'
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'



const Login = (props)=>{
  const { setters, requests } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  
  useEffect(()=>{
    token()
  }, [])


  const token = async()=>{
    try{
      const value = AsyncStorage.getItem('token')
      if(value !== null){
        props.navigation.navigate('Balance')
      }
    }catch(e){
      alert(e)
    }
  }

      
  const enter = ()=>{
    const body = {
      email,
      password
    }
    axios.post(`${url}/accounts/login`, body).then(res=>{
      setters.getToken(res.data.token)
      setters.getId(res.data.id)
      requests.getUser()
      props.navigation.navigate('Balance')
      setEmail('')
      setPassword('')
    }).catch(err=>{
      alert(err.response.data)
    })
  }


  return(
    <ScrollView>
      <View style={styles.container}>

        <TextInput style={styles.input}
          placeholder='nome@email.com'
          value={email}
          onChangeText={setEmail}/>

        <TextInput style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder='Senha'/>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}
            onPress={enter}>
            <Text>
              Entrar
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}


export default Login
