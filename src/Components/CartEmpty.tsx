import { Box, Center, Text } from 'native-base'
import React from 'react'
import Colors from '../colors'
import { FontAwesome } from '@expo/vector-icons';
import ButtonR from './ButtonR';

const CartEmpty = () => {
  return (
    <Box flex={1}>
        <Center h="90%">
            <Center w={200} h={200} bg={Colors.white} rounded="full">
                <FontAwesome name='shopping-basket' size={64} color={Colors.main}/>
            </Center>
            <Text color={Colors.main} bold mt={5} fontSize={20}>
                CART IS EMPTY
            </Text>
        </Center>
        <ButtonR bg={Colors.black} color={Colors.white}>
            START SHOPPING
        </ButtonR>
    </Box>
    )
}

export default CartEmpty
