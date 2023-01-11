import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../constants/urls'
import styles from './style'
import { Context } from '../../context/Context'
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'



const Balance = (props)=>{
  const { setters } = useContext(Context)
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')



  useEffect(()=>{
    setters.noToken()
  }, [])

  

  const getBalance = ()=>{
    const body = {
      email,
      cpf
    }
    axios.post(`${url}/accounts/balance`, body).then(res=>{
      alert(res.data)
      setEmail('')
      setCpf('')
    }).catch(err=>{
      alert(err.response.data.message)
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
export default Balance
