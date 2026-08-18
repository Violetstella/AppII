import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import logo from 'Neptune.jpg';
export default function App() {
  return (
  <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%"}}>
  <Text>Texto no app</Text>
  <Image style={{ width: 500, height: 500 }}source={logo} />
  </View>
  );
}