import React from 'react'
import { Center, Text } from 'native-base'

interface MessageProps {
    color:string,
    bg:string,
    size?:number
    children:string,
    bold?:boolean
}

const Message = ({color,bg,size,children,bold}:MessageProps) => {
  return (
    <Center bg={bg} p={4} rounded={5}>
        <Text color={color} fontSize={size} bold={bold}>
            {children}
        </Text>
    </Center>
  )
}

export default Message
