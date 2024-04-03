import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BigMovieCard from './Components/Cards/BigMovieCard';
import { dummiData } from './Data/dummy_movie_data';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from './Data/Colors';
import { UserProvider } from './app/contexts/UserContext';
import AppLayout from './AppLayout';

export default function App() {
  return (
    <View style={styles.container}>
        <UserProvider>
          <AppLayout />
        </UserProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral,
    alignItems: 'start',
    justifyContent: 'start',
  },
});
