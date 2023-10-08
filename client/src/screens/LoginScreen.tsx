import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

type Props = {}

const LoginScreen = (props: Props) => {
  return (
    <View className='flex-[1] items-center justify-center'>
      <View className='w-[70%]'>
        <Text className='test-[25px] font-[600] text-center'>Login</Text>
        <TextInput placeholder='Enter you eMail'
          className='w-full h-[30px] border border-[#000000072 px-2 my-2]'></TextInput>
        <TextInput placeholder='Enter you eMail'
          className='w-full h-[30px] border border-[#000000072 px-2 my-2'
          secureTextEntry={true}></TextInput>
        <Button title='Login' />
      </View>
    </View>
  )
}

export default LoginScreen