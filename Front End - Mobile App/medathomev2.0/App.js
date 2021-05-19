import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


//Screens
import ClinicContainer from './Screens/Clinics/ClinicContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <ClinicContainer />
    </View>
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
