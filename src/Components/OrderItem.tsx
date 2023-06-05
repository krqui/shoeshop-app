import { Box, Button, Center, FlatList, HStack, Image, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import { products } from '../data/Products'
import Colors from '../colors'

const OrderItem = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <Pressable>
                    <Box mb={3}>
                        <HStack
                            alignItems="center"
                            bg={Colors.white}
                            shadow={1}
                            rounded={10}
                            overflow="hidden"
                        >
                            <Center w="25%" bg={Colors.deepGray}>
                                <Image
                                    source={{ uri: item.image }}
                                    alt={item.image}
                                    w="full"
                                    h={24}
                                    resizeMode="contain"
                                />
                            </Center>
                            <VStack w="62%" px={2}>
                                <Text isTruncated color={Colors.black} bold fontSize={16}>
                                    {item.name}
                                </Text>
                                <Text color={Colors.lightBlack} mt={1} bold fontSize={15}>
                                    ${item.price}
                                </Text>
                            </VStack>
                            <Center>
                                <Button
                                    bg={Colors.main}
                                    _pressed={{ bg: Colors.main }}
                                    _text={{ color: Colors.white }}>5
                                </Button>
                            </Center>
                        </HStack>
                    </Box>
                </Pressable>
            )}
        />
    )
}

export default OrderItem
