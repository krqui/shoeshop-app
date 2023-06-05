import React from 'react'
import { Box, Heading, ScrollView } from 'native-base'
import Colors from '../colors'
import OrderInfo from '../Components/OrderInfo'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderItem from '../Components/OrderItem';
import PlaceOrderModel from '../Components/PlaceOrderModel';
const PlaceOrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
            <OrderInfo
              title="CUSTOMER"
              subtitle="Diego Krqui"
              text="diego.carcaustor@gmail.com"
              icon={<FontAwesome name='user' size={30} color={Colors.white}/>}
              />
            <OrderInfo
              title="SHIPPING INFO"
              subtitle="Shipping: Tanzania"
              text="Pay Method: Paypal"
              icon={<FontAwesome5 name='shipping-fast' size={30} color={Colors.white}/>}
              />
            <OrderInfo
              title="DELIVER TO"
              subtitle="Address:"
              text="Arusha Tz, Ngaramtoni Crater, P.O BOX 1234"
              icon={<Ionicons name='location-sharp' size={30} color={Colors.white}/>}
              />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* Total */}
        <PlaceOrderModel />
      </Box>
    </Box>
  )
}
export default PlaceOrderScreen