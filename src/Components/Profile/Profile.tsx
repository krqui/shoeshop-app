import React from 'react'
import { Box, FormControl, Input, ScrollView, VStack } from 'native-base'
import Colors from '../../colors'
import ButtonR from '../ButtonR'

const Inputs = [
  {
    label: "USERNAME",
    type: 'text'
  },
  {
    label: "EMAIL",
    type: 'text'
  },
  {
    label: "NEW PASSWORD",
    type: 'password'
  },
  {
    label: "CONFIRM PASSWORD",
    type: 'password'
  }
]

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
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
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={4}
                type={i.type as "text"|"password"}
                color={Colors.main}
                fontSize={18}
                fontWeight={'bold'}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1
                }}
              />
            </FormControl>
          ))}
          <ButtonR bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </ButtonR>
        </VStack>
      </ScrollView>
    </Box>
  )
}
export default Profile
