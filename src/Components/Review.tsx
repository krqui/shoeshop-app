import React, { useState } from 'react'
import { Box, CheckIcon, FormControl, Heading, Select, Text, TextArea, VStack } from "native-base"
import Colors from '../colors';
import Rating from './Rating'
import Message from './Notifications/Message'
import ButtonR from './ButtonR'

function Review() {
    const [ratings, setRatings] = useState("")
    return (
        <Box my={9}>
            <Heading bold fontSize={16} mb={2}>
                REVIEW
            </Heading>

            {/* IF THERE IS NO REVIEW */}
            {/*<Message
                color={Colors.main}
                bg={Colors.deepGray}
                children={
                    "NO REVIEW"
                }
                size={18}
                bold />*/}

            {/* REVIEW */}
            <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
                <Heading fontSize={16} color={Colors.black}>
                    User Doe
                </Heading>
                <Rating value={4} text='' />
                <Text my={1} fontSize={14}>Jan 12 2022</Text>
                <Message
                    color={Colors.black}
                    bg={Colors.white}
                    size={15}
                    children={
                        "Remember the epic shots, close games and fierce rivalries that defined '80s B-ball? Even if you weren't around to watch them live, you can relive the era in these adidas Forum shoes."
                    }
                />
            </Box>
            {/* WRITE REVIEW */}
            {/*<Box mt={6}>
                <Heading fontSize={16} bold mb={2}>
                    REVIEW THIS PRODUCT
                </Heading>
                <VStack space={4}>
                    <FormControl>
                        <FormControl.Label _text={{
                            fontSize: "16px",
                            fontWeight: 'bold'
                        }}>Rating
                        </FormControl.Label>
                        <Select
                            bg={Colors.subGreen}
                            borderWidth={0}
                            rounded={5}
                            py={4}
                            placeholder='Choose Rate'
                            _selectedItem={{
                                bg: Colors.subGreen,
                                endIcon: <CheckIcon size={3} />,
                            }}
                            selectedValue={ratings}
                            onValueChange={(e) => setRatings(e)}
                        >
                            <Select.Item label='1 - Poor' value='1' />
                            <Select.Item label='2 - Fair' value='2' />
                            <Select.Item label='3 - Good' value='3' />
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{
                            fontSize: "16px",
                            fontWeight: 'bold'
                        }}>Comment
                        </FormControl.Label>
                        <TextArea
                            h={24}
                            w="full"
                            placeholder='This product is good ...'
                            borderWidth={0}
                            autoCompleteType
                            bg={Colors.subGreen}
                            py={4}
                            _focus={{
                                bg:Colors.subGreen
                            }}
                            fontSize={16}
                        />
                    </FormControl>
                    <ButtonR bg={Colors.main} color={Colors.white}>
                        SUBMIT
                    </ButtonR>
                    {/* If not login 
                    <Message
                        color={Colors.white}
                        bg={Colors.black}
                        size={16}
                        children={
                            "Please 'Login' to write a review."
                        }
                    />
                </VStack>
            </Box>*/}
        </Box>
    )
}

export default Review
