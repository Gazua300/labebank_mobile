import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './style'
import { url } from '../../constants/urls'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'



const login = (props)=>{
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')


  useEffect(()=>{
    const token = AsyncStorage.getItem('token')

    if(token){
      props.navigation.navigate('Balance')
    }
  }, [])



  const enter = ()=>{
    const body = {
      email,
      cpf,
      password
    }
    axios.post(`${url}/login`, body).then(res=>{
      AsyncStorage.setItem('token', res.data)
      props.navigation.navigate('Balance')
      setEmail('')
      setCpf('')
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
          onChangeText={setCpf}
          value={cpf}
          keyboardType='numeric'
          placeholder='CPF'/>

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


export default login
