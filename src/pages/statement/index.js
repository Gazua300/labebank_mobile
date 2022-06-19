import React, { useState } from 'react'
import axios from 'axios'
import styles from './style'
import { url } from '../../constants/urls'
import { convertDate } from '../../utils/convertDate'
import {
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Text
} from 'react-native'



const statement = ()=>{
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [state, setState] = useState([])


  const getStatement = ()=>{
    const body = {
      email,
      cpf
    }
    axios.post(`${url}/statement`, body).then(res=>{
      setState(res.data)
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
            onPress={getStatement}>
            <Text>
              Consultar extrato
            </Text>
          </TouchableOpacity>

        </View>
        <View style={styles.mapContainer}>
          {state && state.map(st=>{
            return <View key={st.id} style={styles.card}>
                    <Text style={styles.txtMap}>Data: </Text><Text>{convertDate(st.date)}</Text>
                    <Text style={styles.txtMap}>Valor: </Text><Text>{st.value}</Text>
                    <Text style={styles.txtMap}>Descrição: </Text><Text>{st.description}</Text>
                   </View>
          })}
       </View>
      </View>
    </ScrollView>
  )
}
export default statement
