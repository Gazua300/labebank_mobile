import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StatusBar, Text } from 'react-native'
import Signin from './pages/createClient'
import Login from './pages/login'
import Balance from './pages/balance'
import Statement from './pages/statement'
import Payment from './pages/payment'
import Deposit from './pages/deposit'
import Transfer from './pages/transfer'
import CustomDrawer from './components/customDrawer'




const Drawer = createDrawerNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      <Drawer.Navigator
        screenOptions={screenOptions}
        initialRouteName='Login'
        drawerContent={props => <CustomDrawer {...props}/>}>

        <Drawer.Screen
          name='Login'
          component={Login}/>

        <Drawer.Screen
          name='Signin'
          component={Signin}/>

        <Drawer.Screen
          name='Balance'
          component={Balance}
          options={{
            title: 'Saldo'
          }}/>

        <Drawer.Screen
          name='Statement'
          component={Statement}
          options={{
            title: 'Extrato'
          }}/>

        <Drawer.Screen
          name='Payment'
          component={Payment}
          options={{
            title: 'Pagamento'
          }}/>

        <Drawer.Screen
          name='Deposit'
          component={Deposit}
          options={{
            title: 'Deposito'
          }}/>

        <Drawer.Screen
          name='Transfer'
          component={Transfer}
          options={{
            title: 'Transferência'
          }}/>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: 'lightgray'
  },

  drawerStyle:{
    width: 200
  }
}
