import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './Tabs'
import Stack from './Stack'

const Nav = createNativeStackNavigator()

const Root = () => (
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen name="Tabs" component={Tabs} />
    <Nav.Screen name="Stacks" component={Stack} />
  </Nav.Navigator>
)
export default Root
