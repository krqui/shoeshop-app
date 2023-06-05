import { Center, HStack, Modal, Text, VStack, Button, Pressable, Image } from 'native-base';
import React, { useState } from 'react'
import ButtonR from './ButtonR';
import Colors from '../colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const OrdersInfos = [
    {
        title: "Products",
        price: 125.77,
        color: "black"
    },
    {
        title: "Shipping",
        price: 34.00,
        color: "black"
    },
    {
        title: "Tax",
        price: 23.34,
        color: "black"
    },
    {
        title: "Total Amount",
        price: 3458.00,
        color: "main"
    }
]


const OrderModel = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [showModel, setShowModel] = useState(false);
    return (
        <Center>
            <ButtonR
                onPress={() => setShowModel(true)}
                bg={Colors.main}
                color={Colors.white}
                mt={5}
            >
                SHOW PAYMENT & TOTAL
            </ButtonR>
            <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton />
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {OrdersInfos.map((i, index) => (
                                <HStack
                                    key={index}
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text fontSize={16} fontWeight="medium">{i.title}</Text>
                                    <Text
                                        color={i.color === "main" ? Colors.main : Colors.black}
                                        bold
                                        fontSize={18}
                                    >
                                        ${i.price}
                                    </Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable 
                            w="full" 
                            justifyContent="center" 
                            bg={Colors.paypal} 
                            h={45}
                            rounded={2}
                            overflow="hidden" 
                            onPress={()=>setShowModel(false)}
                        >
                            <Image 
                                source={require("../../assets/paypal.png")}
                                alt='paypal'
                                resizeMode='contain'
                                w="full"
                                h={34}
                            />
                        </Pressable>
                        <Button
                            w="full"
                            mt={4}
                            bg={Colors.black}
                            h={45}
                            _text={{
                                color: Colors.white
                            }}
                            onPress={() => {
                                navigation.navigate("Home")
                                setShowModel(false)
                            }}
                            _pressed={{
                                bg: Colors.main
                            }}
                        >
                            PAY LATER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}
{/* 3:20:32 */}
export default OrderModel
