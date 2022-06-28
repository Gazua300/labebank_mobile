import React, { useState, useEffect, useContext } from 'react'
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




const deposit = ()=>{
  const { setters } = useContext(Context)
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [value, setValue] = useState('')



  useEffect(()=>{
    setters.noToken()
  }, [])


  const deposit = ()=>{
    const body = {
      email,
      cpf,
      value: Number(value)
    }
    axios.post(`${url}/deposit`, body).then(res=>{
      alert(res.data)
      setEmail('')
      setCpf('')
      setValue('')
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

        <TextInput style={styles.input}
          onChangeText={setValue}
          value={value}
          keyboardType='numeric'
          placeholder='Valor'
          placeholderTextColor='gray'/>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}
            onPress={deposit}>
            <Text>
              Depositar
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}
export default deposit
