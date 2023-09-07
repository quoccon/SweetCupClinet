import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/auth/signIn';
import Nav from './src/navigtion/screensNav';


export default function App() {
  return (
    <Nav></Nav>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
