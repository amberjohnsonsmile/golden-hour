import { Image, StyleSheet, Platform } from 'react-native';

import { SunsetAnimation } from '@/components/SunsetAnimation';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const time = "8:30 pm"
const sunsetRating = 4
const comfortRating = 2
const conditions = "cloudy, cold"

export default function HomeScreen() {
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
        <ThemedText>Sunset rating (1-5): {sunsetRating}</ThemedText>
        <ThemedText>Outdoor comfort rating (1-5): {comfortRating}</ThemedText>
        <ThemedText>Conditions: {conditions}</ThemedText>
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
