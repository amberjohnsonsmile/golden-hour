import { Image, StyleSheet, Platform } from 'react-native';

import { SunsetAnimation } from '@/components/SunsetAnimation';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import axios from 'axios';

const time = '8:30pm'
const sunsetRating = '40%'
const comfortRating = '20%'
const alarmStatus = 'ON'

const API_URL = ''

export default function HomeScreen() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL)
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/sunset.jpg')}
          style={styles.sunsetImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Golden Hour</ThemedText>
        <SunsetAnimation />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Next Sunset Predictions</ThemedText>
        <ThemedText>Time: {time}</ThemedText>
        <ThemedText>Sunset rating: {sunsetRating}</ThemedText>
        <ThemedText>Comfort rating (1-5): {comfortRating}</ThemedText>
        <ThemedText>Sunset Alarm {alarmStatus}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  sunsetImage: {
    flex: 1,
    width: '100%',
  }
});
