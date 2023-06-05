import React from 'react'
import { Box, Button, Center, HStack, ScrollView, Text, View } from 'native-base'
import Colors from '../colors'
//import CartEmpty from '../Components/CartEmpty'
import CartItems from '../Components/CartItems'
import ButtonR from '../Components/ButtonR'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const CartScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          CART
        </Text>
      </Center>
      {/* IF CART IS EMPTY 
      <CartEmpty />*/}
      {/* CART ITEMS */}
      {/*<CartItems></CartItems>*/}
      
      <CartItems/>
      

      <Center mt={5}>
        <HStack
          rounded={50}
          justifyContent="space-between"
          bg={Colors.white}
          shadow={2}
          w="90%"
          pl={5}
          h={45}
          alignItems="center"
        >
          <Text fontSize={18}>Total</Text>
          <Button
            px={10}
            h={45}
            rounded={50}
            bg={Colors.main}
            _text={{
              color: Colors.white,
              fontWeight: "semibold",
              fontSize: 18
            }}
            _pressed={{
              bg: Colors.main
            }}
          >
            $356
          </Button>
        </HStack>
      </Center>

      {/* Checkout */}
      <Center px={5}>
        <ButtonR onPress={()=>navigation.navigate("Shipping")} bg={Colors.black} color={Colors.white} mt={10}>
          CHECKOUT
        </ButtonR>
      </Center>
    </Box>
    
  )
}

export default CartScreen