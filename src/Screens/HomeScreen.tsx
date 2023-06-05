import React from 'react'
import { Box } from 'native-base'
import Colors from '../colors'
import HomeSearch from '../Components/HomeSearch'
import HomeProducts from '../Components/HomeProducts'
const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch/>
      <HomeProducts />
    </Box>
  )
}

export default HomeScreen
