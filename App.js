import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './src/navigtion/screensNav';
import { Provider } from 'react-redux';
import { store } from './api/storeRedux';


export default function App() {
  return (
    <Provider store={store}>
    <Nav></Nav>
    </Provider>
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
