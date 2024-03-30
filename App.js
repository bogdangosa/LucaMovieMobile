import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BigMovieCard from './Components/Cards/BigMovieCard';
import { dummiData } from './Data/dummy_movie_data';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  sub_title:{
    color: 'white',
    fontSize: 28,
  },
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'start',
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'start',
  },
});
