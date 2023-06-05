import React from 'react'
import { Text, Box, Image, Heading, VStack, Input, Button, Pressable } from 'native-base';
import Colors from '../colors';
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface RegisterScreenProps {
  navigation: NativeStackNavigationProp<any>
}
const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
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
        <Heading mb={4}>SIGN UP</Heading>
        <VStack space={5} pt="6" pb="5" pl="4" backgroundColor={Colors.white}>
          {/* Username */}
          <Input
            InputLeftElement={
              <FontAwesome name='user' size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder='John Doe'
            w="70%"
            fontSize={18}
            pl={2}
            type='text'
            color={Colors.main}
            borderBottomColor={Colors.underline} />
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
            type='text'
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
          onPress={() => navigation.navigate("Bottom")}
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.black}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  )
}

export default RegisterScreen