import React from 'react'
import { Box, Center, FormControl, HStack, Image, Input, ScrollView, Spacer, Text, VStack, View } from 'native-base'
import Colors from '../colors'
import ButtonR from '../Components/ButtonR'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const paymentMethods = [
  {
    image: require("../../assets/paypal.png"),
    alt: "paypal",
    icon: "Ionicons"
  },
  {
    image: require("../../assets/applepay.png"),
    alt: "applepay",
    icon: "fontAwesome"
  },
  {
    image: require("../../assets/googlepay.png"),
    alt: "googlepay",
    icon: "fontAwesome"
  }
]

const PaymentScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={20} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((i, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    source={i.image}
                    alt={i.alt}
                    resizeMode='contain'
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === "Ionicons" ? 
                <Ionicons name='checkmark-circle' size={30} color={Colors.main}></Ionicons> 
                :<FontAwesome name='circle-thin' size={30} color={Colors.main} />}
              </HStack>
            ))}
            <ButtonR onPress={()=>navigation.navigate("Placeorder")} bg={Colors.main} color={Colors.white} mt={5}>
              CONTINUE
            </ButtonR>
            <Text fontSize={18} italic textAlign="center">
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}
{/**2 44 30 */ }
export default PaymentScreen