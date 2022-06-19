import React, { useState } from 'react'
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




const deposit = ()=>{
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [value, setValue] = useState('')


  const deposit = ()=>{
    const body = {
      name,
      cpf,
      value: Number(value)
    }
    axios.post(`${url}/deposit`, body).then(res=>{
      alert(res.data)
      setName('')
      setCpf('')
      setValue('')
    }).catch(err=>{
      alert(err.response.data.message)
    })
  }


  return(
    <ScrollView>
      <View style={styles.container}>

        <TextInput style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder='Nome'/>

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
              Consultar saldo
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}
export default deposit
