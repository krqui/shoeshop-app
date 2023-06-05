import { NativeBaseProvider, Stack, StatusBar } from 'native-base';
//import PlaceOrderScreen from './src/Screens/PlaceOrderScreen';
import OrderScreen from './src/Screens/OrderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import BottomNav from './src/Navigations/BottomNav';

export default function App() {
const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <Stack.Navigator 
          initialRouteName='Login'
          screenOptions={{
            headerShown:false
          }}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
            <Stack.Screen name='Order' component={OrderScreen}/>
            <Stack.Screen name='Bottom' component={BottomNav}/>
          </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
