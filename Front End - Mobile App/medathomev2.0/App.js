import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


//Screens
import Header from './Shared/Header'
import ClinicContainer from './Screens/Clinics/ClinicContainer'

export default function App() {
  return (
    <View style={styles.container}>
    <Header />
      <ClinicContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DB97E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
