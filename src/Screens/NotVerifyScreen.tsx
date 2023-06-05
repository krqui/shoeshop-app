import React from 'react'
import { Box, Center, Image, VStack, View } from 'native-base'
import Colors from '../colors'
import ButtonR from '../Components/ButtonR'
const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w='full' h={250}>
        <View style={{ backgroundColor: "white", height: 200, width: 210, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 100 }}>
          <Image
            source={require("../../assets/bag-lightblue.png")}
            alt='Logo'
            //size="xl"
            size={200}
            resizeMode='contain'
          />
        </View>
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <ButtonR bg={Colors.black} color={Colors.white}>REGISTER</ButtonR>
        <ButtonR bg={Colors.white} color={Colors.black}>LOGIN</ButtonR>
      </VStack>
    </Box>
  )
}

export default NotVerifyScreen