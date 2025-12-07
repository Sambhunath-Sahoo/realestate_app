import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SignIn into Your Account</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="SignIn" onPress={() => {}} />
    </View>
  )
}

export default SignIn