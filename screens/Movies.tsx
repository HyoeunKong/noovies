import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions } from 'react-native'
import Swiper from 'react-native-web-swiper'
import styled from 'styled-components/native'

const API_KEY = '10923b261ba94d897ac6b81148314a3f'
//https://api.themoviedb.org/3/movie/now_playing?api_key=10923b261ba94d897ac6b81148314a3f&language=en-US&page=1

const Container = styled.ScrollView``

const View = styled.View`
  flex: 1;
`
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = ({
  navigation: { navigate },
}) => {
  const [loading, setLoading] = useState(true)
  const getNowPlaying = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=10923b261ba94d897ac6b81148314a3f&language=en-US&page=1',
    )
    const json = await response.json()
    console.log(json)
  }

  useEffect(() => {
    getNowPlaying()
  }, [])
  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <Container>
      <Swiper
        loop
        timeout={3.45}
        controlsEnabled={false}
        containerStyle={{ width: '100%', height: SCREEN_HEIGHT / 4 }}
      >
        <View style={{ backgroundColor: 'red' }}></View>
        <View style={{ backgroundColor: 'blue' }}></View>
        <View style={{ backgroundColor: 'red' }}></View>
        <View style={{ backgroundColor: 'blue' }}></View>
      </Swiper>
    </Container>
  )
}

export default Movies
