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



const transfer = ()=>{
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [recipientCpf, setRecipientCpf] = useState('')
  const [value, setValue] = useState('')


  const transfer = ()=>{
    const body = {
      email,
      cpf,
      recipientName,
      recipientCpf,
      value: Number(value)
    }
    axios.post(`${url}/transfer`, body).then(res=>{
      alert(res.data)
      setName('')
      setCpf('')
      setRecipientCpf('')
      setRecipientName('')
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
          onChangeText={setRecipientName}
          value={recipientName}
          placeholder='Nome do receptor'
          placeholderTextColor='gray'/>

        <TextInput style={styles.input}
          onChangeText={setRecipientCpf}
          value={recipientCpf}
          keyboardType='numeric'
          placeholder='CPF do receptor'
          placeholderTextColor='gray'/>

        <TextInput style={styles.input}
          onChangeText={setValue}
          value={value}
          keyboardType='numeric'
          placeholder='Valor'
          placeholderTextColor='gray'/>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}
            onPress={transfer}>
            <Text>
              Transferir
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}
export default transfer
