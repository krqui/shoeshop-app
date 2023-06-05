import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SingleProductScreen from '../Screens/SingleProductScreen';
import ShippingScreen from '../Screens/ShippingScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import PlaceOrderScreen from '../Screens/PlaceOrderScreen';

const Stack = createNativeStackNavigator()
const StackNav = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Single' component={SingleProductScreen}></Stack.Screen>
        <Stack.Screen name='Shipping' component={ShippingScreen} ></Stack.Screen>
        <Stack.Screen name='Checkout' component={PaymentScreen}></Stack.Screen>
        <Stack.Screen name='Placeorder' component={PlaceOrderScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNav
{/* 3 40 42 */}