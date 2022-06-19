import React from 'react'
import { DrawerNavigatorItems } from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'



function CustomDrawer(props){


  const logout = async()=>{
    await AsyncStorage.clear()
    props.navigation.navigate('Login')
  }

  return(
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Labebank</Text>
      </View>
      <View style={styles.itemStyle}>
        <TouchableOpacity style={styles.btnNavigator}
          onPress={()=> props.navigation.navigate('Login')}>
          <Text style={styles.items}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNavigator}
          onPress={()=> props.navigation.navigate('Signin')}>
          <Text style={styles.items}>Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNavigator}
          onPress={()=> props.navigation.navigate('Balance')}>
          <Text style={styles.items}>Saldo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNavigator}
          onPress={()=> props.navigation.navigate('Statement')}>
          <Text style={styles.items}>Extrato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNavigator}
          onPress={()=> props.navigation.navigate('Payment')}>
          <Text style={styles.items}>Pagamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNavigator}
          onPress={()=> props.navigation.navigate('Deposit')}>
          <Text style={styles.items}>Deposito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNavigator}
          onPress={()=> props.navigation.navigate('Transfer')}>
          <Text style={styles.items}>Transferência</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNavigator}
          onPress={logout}>
          <Text style={styles.items}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    backgroundColor: 'lightgray',
    height: 80
  },
  title: {
    fontSize: 20,
    margin: 10,
    color: 'blue'
  },
  itemStyle: {
    margin: 10
  },
  items: {
    color: 'blue',
    fontSize: 15
  },
  btnNavigator: {
    marginTop: 10,
    padding: 5,
    borderRadius: 10
  }
})

export default CustomDrawer
