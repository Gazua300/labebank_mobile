import React, { useContext, useEffect, useState } from 'react'
import styles from './style'
import axios from 'axios'
import { url } from '../../constants/urls'
import { Context } from '../../context/Context'
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'



const payment = ()=>{
  const { setters } = useContext(Context)
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [date, setDate] = useState('')
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')



  useEffect(()=>{
    setters.noToken()
  }, [])


  const pay = ()=>{
    const body = {
      email,
      cpf,
      initialDate: date,
      value: Number(value),
      description
    }
    axios.post(`${url}/payment`, body).then(res=>{
      alert(res.data)
      setEmail('')
      setCpf('')
      setDate('')
      setValue('')
      setDescription('')
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

        <TextInput style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder='Data'
          placeholderTextColor='gray'/>

        <TextInput style={styles.input}
          onChangeText={setValue}
          value={value}
          keyboardType='numeric'
          placeholder='Valor'
          placeholderTextColor='gray'/>

        <TextInput style={styles.input}
          onChangeText={setDescription}
          value={description}
          placeholder='Descrição'
          placeholderTextColor='gray'/>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}
            onPress={pay}>
            <Text>
              Efetuar pagamento
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}
export default payment
