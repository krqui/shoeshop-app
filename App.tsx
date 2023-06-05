import { NativeBaseProvider, Stack, StatusBar } from 'native-base';
//import PlaceOrderScreen from './src/Screens/PlaceOrderScreen';
import OrderScreen from './src/Screens/OrderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import BottomNav from './src/Navigations/BottomNav';
//import ProfileScreen from './src/Screens/ProfileScreen';
//import ShippingScreen from './src/Screens/ShippingScreen';
//import PaymentScreen from './src/Screens/PaymentScreen';
//import CartScreen from './src/Screens/CartScreen';
//import SingleProductScreen from './src/Screens/SingleProductScreen';
//import RegisterScreen from './src/Screens/RegisterScreen';
//import NotVerifyScreen from './src/Screens/NotVerifyScreen';
//import HomeScreen from './src/Screens/HomeScreen';
//import LoginScreen from './src/Screens/LoginScreen';

export default function App() {
const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      {/*<HomeScreen/>
      {/*<LoginScreen/>*/}
      {/*<RegisterScreen/>*/}
      {/*<NotVerifyScreen/>*/}
      {/*<SingleProductScreen/>*/}
      {/*<CartScreen/>*/}
      {/*<ProfileScreen></ProfileScreen>*/}
      {/*<ShippingScreen></ShippingScreen>*/}
      {/*<PaymentScreen></PaymentScreen>*/}
      {/*<PlaceOrderScreen></PlaceOrderScreen>*/}
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
