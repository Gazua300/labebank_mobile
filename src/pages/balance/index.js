import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { url } from '../../constants/urls'
import styles from './style'
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'



const balance = (props)=>{
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')

  useEffect(()=>{
    const token = AsyncStorage.getItem('token')

    if(!token){
      props.navigation.navigate('Login')
    }
  }, [])


  const getBalance = ()=>{
    const body = {
      email,
      cpf
    }
    axios.post(`${url}/balance`, body).then(res=>{
      alert(res.data)
      setEmail('')
      setCpf('')
    }).catch(err=>{
      alert(err.response.data)
    })

  }


  return(
    <ScrollView>
      <View style={styles.container}>

        <TextInput style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='nome@email.com'/>

        <TextInput style={styles.input}
          onChangeText={setCpf}
          value={cpf}
          keyboardType='numeric'
          placeholder='CPF'
          placeholderTextColor='gray'/>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}
            onPress={getBalance}>
            <Text>
              Consultar saldo
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}
export default balance
