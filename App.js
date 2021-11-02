import { StatusBar } from 'expo-status-bar';
import *as React from 'react';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';

import login from './src/components/login';

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function App(){
  const [user, setUser] = React.useState(false)

  return(
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user ? (
            <>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Create' component={Create}/>
            <Stack.Screen name='Update' component={Update}/>
          </>
          ) : (
            <>
            <Stack.Screen name='Login' component={login} options={{headerShown:false}}/>
            <Stack.Screen name='Signup' component={Signup}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;