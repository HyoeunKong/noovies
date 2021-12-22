import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, TouchableOpacity } from 'react-native'

const NativeStatck = createNativeStackNavigator()

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Two')}>
    <Text>One</Text>
  </TouchableOpacity>
)

const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Three')}>
    <Text>Two</Text>
  </TouchableOpacity>
)

const ScreenThree = ({ navigation: { setOptions } }) => (
  <TouchableOpacity onPress={() => setOptions({ title: 'hello' })}>
    <Text>change Title</Text>
  </TouchableOpacity>
)

const Stack = () => (
  <NativeStatck.Navigator>
    <NativeStatck.Screen name="One" component={ScreenOne} />
    <NativeStatck.Screen name="Two" component={ScreenTwo} />
    <NativeStatck.Screen name="Three" component={ScreenThree} />
  </NativeStatck.Navigator>
)

export default Stack
