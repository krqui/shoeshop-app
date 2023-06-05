import { Center, Heading, Text } from 'native-base'
import React from 'react'
import Colors from '../colors'

interface OrderInfoProps {
    icon:JSX.Element,
    title:string,
    subtitle:string,
    text:string,
    success?:any,
    danger?:any
}
const OrderInfo = ({icon,title,subtitle,text,success,danger}:OrderInfoProps) => {
  return (
    <Center
        bg={Colors.white}
        w={200}
        py={2}
        rounded={10}
        shadow={4}
        mb={2}
        ml={5}
        mr={1}
        px={4}
        >
            <Center bg={Colors.main} w={60} h={60} rounded="full">
                {icon}
            </Center>
            <Heading bold fontSize={14} isTruncated mt={3} mb={2} color={Colors.black}>
                {title}
            </Heading>
            <Text fontSize={13} color={Colors.black}>
                {subtitle}
            </Text>
            <Text fontSize={13} fontStyle={'italic'} textAlign="center" color={Colors.black}>
                {text}
            </Text>
            {/* Status */}
            {success && (
                <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blue}>
                    <Text fontSize={12} color={Colors.white}>
                        Paid on Jan 12 2023
                    </Text>
                </Center>
            )}
            {danger && (
                <Center py={2} mt={2} rounded={5} w="full" bg={Colors.red}>
                <Text fontSize={12} color={Colors.white}>
                    Not Deliver
                </Text>
            </Center>
            )}
    </Center>
  )
}

export default OrderInfo