import React, { useState } from 'react'
import { Box, HStack, Heading, Image, ScrollView, Spacer, Text, View } from 'native-base'
import Colors from '../colors';
import Rating from '../Components/Rating'
import NumericInput from 'react-native-numeric-input'
import ButtonR from '../Components/ButtonR'
import Review from '../Components/Review';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const SingleProductScreen = ({ route }: any) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const product = route.params
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          //source={require("../../assets/forumlow2.png")}
          source={{ uri: product.image }}
          alt='Image'
          w="full"
          h={300}
          resizeMode='contain'
        />
        <Heading bold fontSize={20} mb={2} lineHeight={22}>
          {/*New Adidas Forum 84 Low Crew Green*/}
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={4}>
          {product.countInStock > 0 ? (
            <NumericInput
              value={value}
              totalWidth={160}
              totalHeight={40}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ borderColor: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
              onChange={(e) => 0} />

          ) : (
            <Heading bold color={Colors.red} italic fontSize={22}>
              Out of Stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color={Colors.black} fontSize={22}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={16}>
          {/*Remember the epic shots, close games and fierce rivalries that defined '80s B-ball? Even if you weren't around to watch them live, you can relive the era in these adidas Forum shoes. Eye-catching colors give a shoutout to sport while the low top silhouette has all the details you covet: the crisscross design, smooth leather and ankle strap.*/}
          {product.description}
        </Text>
        <ButtonR bg={Colors.main} color={Colors.white} mt={8} onPress={()=>navigation.navigate("Cart")}>
          ADD TO CART
        </ButtonR>
        {/* REVIEW */}
        <Review></Review>
      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen