import React, { useEffect, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import Fontisto from '@expo/vector-icons/Fontisto'
import styles from './style'
import axios from 'axios'
import { url } from '../../constants/urls'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'



const Payment = (props)=>{
  const [password, setPassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [calendar, setCalendar] = useState(false)
  const [date, setDate] = useState(new Date())
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')



  useEffect(()=>{
    noToken()
  }, [])


  const noToken = async()=>{
    try{
      const value = await AsyncStorage.getItem('token')
      if(!value){
        props.navigation.navigate('Login')
      }
    }catch(e){
      alert(e)
    }
  }


  const onChange = (event, selectDate)=>{
    setDate(selectDate)
    console.log(selectDate)
    setCalendar(false)
  }

  const pay = async()=>{
    const body = {
      token: await AsyncStorage.getItem('token'),
      password,
      cpf,
      initialDate: date,
      value: Number(value),
      description
    }
    axios.post(`${url}/accounts/payment`, body).then(res=>{
      alert(res.data)
      setPassword('')
      setCpf('')
      setValue('')
      setDescription('')
    }).catch(err=>{
      const msg = err.response.data.message
      if(msg === 'jwt expired'){
        Alert.alert(
          'Token expirado!', 
          'Por motivos de segurança você deve efetuar login novamente'
          )
      }else{
        Alert.alert(
          'Erro ao efetuar pagamento:',
          msg
          )
      }
    })
  }



  return(
    <ScrollView>
      <View style={styles.container}>        

        <TextInput style={styles.input}
          onChangeText={setCpf}
          value={cpf}
          keyboardType='numeric'
          placeholder='CPF'
          placeholderTextColor='gray'/>

        <View style={styles.input}>
          <TouchableOpacity style={styles.inputDate}
            onPress={()=> setCalendar(true)}>
            <Fontisto name='date' size={25}/>        
          </TouchableOpacity>  
        </View>
        {calendar &&(
          <DateTimePicker
            value={date}
            onChange={()=> onChange(value)}
            />
        )}
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
        
        <TextInput style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='Senha'
          secureTextEntry={true}/>

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
export default Payment
