import React from 'react'
import { Box, Button, HStack, Pressable, ScrollView, Text, View } from 'native-base'
import Colors from '../../colors'

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}>
              <Text fontSize={14} color={Colors.blue} isTruncated>
                6997486464546541
              </Text>
              <Text fontSize={14} bold color={Colors.black} isTruncated>
                PAID
              </Text>
              <Text fontSize={14} italic color={Colors.black} isTruncated>
                Dec 12 2022
              </Text>
              <Button
                px={7}
                py={1.5}
                rounded={50}
                bg={Colors.main}
                _text={{
                  color:Colors.white,
                  fontSize:16
                }}
                _pressed={{
                  bg:Colors.main
                }}
                >
                  $456
              </Button>
          </HStack>
        </Pressable>
        {/* Not Paid */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}>
              <Text fontSize={14} color={Colors.blue} isTruncated>
                6997486464546541
              </Text>
              <Text fontSize={14} bold color={Colors.black} isTruncated>
                NOT PAID
              </Text>
              <Text fontSize={14} italic color={Colors.black} isTruncated>
                Jan 12 2021
              </Text>
              <Button
                px={7}
                py={1.5}
                rounded={50}
                bg={Colors.red}
                _text={{
                  color:Colors.white,
                  fontSize:16
                }}
                _pressed={{
                  bg:Colors.main
                }}
                >
                  $23
              </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}

export default Orders
