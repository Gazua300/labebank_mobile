import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StatusBar } from 'react-native'
import AuthProvider from './src/context/Context'
import Signin from './src/pages/CreateClient'
import Login from './src/pages/Login'
import Balance from './src/pages/Balance'
import Statement from './src/pages/Statement'
import Payment from './src/pages/Payment'
import Deposit from './src/pages/Deposit'
import Transfer from './src/pages/Transfer'
import CustomDrawer from './src/components/customDrawer'




const Drawer = createDrawerNavigator()



const App = ()=>{
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      <AuthProvider>
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
      </AuthProvider>
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

export default App
