import React from 'react'
import { Center, Heading, Image, Text, View } from 'native-base'
import Colors from '../colors';
import Tabs from '../Components/Profile/Tabs';
const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri:"https://res.cloudinary.com/dby5zzxin/image/upload/v1683526371/idovtncavvn04ba0lmn2.png"
          }}
          alt='profile'
          w={24}
          h={24}
          resizeMode='cover'
          />
        <Heading bold fontSize={20} isTruncated my={2} color={Colors.white} >
          Admin Doe
        </Heading>
        <Text italic fontSize={16} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  )
}

export default ProfileScreen;