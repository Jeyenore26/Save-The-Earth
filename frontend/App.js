import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <View className="mt-6 bg-white">
     <Text>
        <Navbar></Navbar>
     </Text>
  </View>
  );
}


