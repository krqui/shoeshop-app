import { Button } from 'native-base'
import React from 'react'
import Colors from '../colors';

interface ButtonProps {
    mt?:any,
    bg:any,
    color:string,
    children:string,
    onPress?:any
}

const ButtonR = ({mt,bg,color,children, onPress}:ButtonProps) => {
  return (
    <Button
        w='full'
        h={55}
        mt={mt}
        rounded="full"
        bg={bg}
        _text={{
            color:color,
            fontWeight:"bold",
            fontSize:16
        }}
        _pressed={{bg:bg}}
        onPress={onPress}
    >
        {children}
    </Button>
  )
}

export default ButtonR
