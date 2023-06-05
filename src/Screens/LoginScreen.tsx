import React from 'react'
import { Text, Box, Image, Heading, VStack, Input, Button, Pressable } from 'native-base';
import Colors from '../colors';
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface LoginScreenProps {
  navigation: NativeStackNavigationProp<any>
}
// https://stackoverflow.com/questions/47924501/add-strong-typing-for-react-navigation-props
const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt='Logo'
        resizeMode='cover'
        size='lg'
        w='full'
        source={require("../../assets/cover.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading mb={4}>LOGIN</Heading>
        <VStack space={5} pt="6" pb="5" pl="4" backgroundColor={Colors.white}>
          {/* Email */}
          <Input
            InputLeftElement={
              <MaterialIcons name='email' size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder='user@gmail.com'
            w="70%"
            fontSize={18}
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline} />

          {/* Password */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder='************'
            w="70%"
            type='password'
            fontSize={18}
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline} />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={() => navigation.navigate("Bottom")}>LOGIN
        </Button>
        <Pressable mt={4} onPress={()=>navigation.navigate("Register")}>
          <Text color={Colors.black}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  )
}
/* 20:32 */
export default LoginScreen