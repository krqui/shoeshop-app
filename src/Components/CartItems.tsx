import { Box, HStack, Text, Pressable, Center, Image, View, ScrollView, VStack, Button } from 'native-base'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import { products } from '../data/Products'
import Colors from '../colors'
import { FontAwesome } from '@expo/vector-icons';

const Swiper = () => {
    return (
        <SwipeListView
            rightOpenValue={-50}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            data={products}
            renderItem={renderItem}
            renderHiddenItem={hiddenItem}
            showsVerticalScrollIndicator={false}
        />

    )
}

// Cart Item
{/* hora minuto -> 1:45:52 */ }
const renderItem = (data: any) =>
(
    <Pressable>
        {/*<Box ml={6} mb={3} w={"full"}>*/}
        <Box mx={3} mb={3}>
            <HStack
                alignItems="center"
                bg={Colors.white}
                //w={'sm'}
                shadow={1}
                rounded={10}
                overflow="hidden"
            >
                <Center w="25%" bg={Colors.deepGray}>
                    <Image
                        source={{ uri: data.item.image }}
                        alt={data.item.name}
                        w="full"
                        h={24}
                        resizeMode='contain'
                    />
                </Center>
                <VStack w="60%" px={2} space={2}>
                    <Text color={Colors.black} bold fontSize={16}>
                        {data.item.name}
                    </Text>
                    <Text bold color={Colors.lightBlack} fontSize={16}>
                        ${data.item.price}
                    </Text>
                </VStack>
                <Center>
                    <Button bg={Colors.main} _pressed={{ bg: Colors.main }} >
                        5
                    </Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>)
    ;

// Hidden
const hiddenItem = () =>
(
    <Pressable
        w={50}
        roundedTopRight={10}
        roundedBottomRight={10}
        h="88%"
        ml="auto"
        mr={4}
        justifyContent="center"
        bg={Colors.red}
    >
        <Center alignItems="center" letterSpacing={2}>
            <FontAwesome name='trash' size={24} color={Colors.white} />
        </Center>
    </Pressable>
)

const CartItems = () => {
    return (
        <Box mr={0}>
            <View>
                <Swiper />
            </View>
        </Box>
    )
}

export default CartItems
