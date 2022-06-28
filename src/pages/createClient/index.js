import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../constants/urls'
import { Context } from '../../context/Context'
import styles from './style'
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'



const createClient = (props)=>{
  const { setters } = useContext(Context)
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')



  
  
  


  const signin = ()=>{
    const body = {
      name,
      cpf,
      email,
      initialDate: date,
      password,
      passwordConf
    }
    
    axios.post(`${url}/create`, body).then(res=>{
      setters.getToken(res.data)
      props.navigation.navigate('Balance')
      setName('')
      setCpf('')
      setEmail('')
      setDate('')
      setPassword('')
      setPasswordConf('')
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
          placeholder='CPF'/>

        <TextInput style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='E-mail'/>

        <TextInput style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder='Data'/>

        <TextInput style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='Senha'
          secureTextEntry={true}/>

        <TextInput style={styles.input}
          onChangeText={setPasswordConf}
          value={passwordConf}
          placeholder='Confirme sua senha'
          secureTextEntry={true}/>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}
            onPress={signin}>
            <Text>
              Registrar
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}
export default createClient
