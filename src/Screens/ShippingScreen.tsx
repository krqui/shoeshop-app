import React from 'react'
import { Box, Center, FormControl, Input, ScrollView, Text, VStack, View } from 'native-base'
import Colors from '../colors'
import ButtonR from '../Components/ButtonR'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text"
  },
  {
    label: "ENTER COUNTRY",
    type: "text"
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text"
  },
  {
    label: "ENTER ADDRESS",
    type: "text"
  }
]
const ShippingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={20} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "16px",
                    fontWeight: "bold"
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={i.type as "text" | "password" | undefined}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main
                  }}
                  fontSize={18}
                  fontWeight={'bold'}
                ></Input>
              </FormControl>
            ))}
            <ButtonR onPress={() => navigation.navigate("Checkout")} bg={Colors.main} color={Colors.white} mt={5}>
              CONTINUE
            </ButtonR>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}
{/* 2:32:02 */ }
export default ShippingScreen