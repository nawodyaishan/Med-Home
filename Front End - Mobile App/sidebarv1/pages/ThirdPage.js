import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const ThirdPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          
        </View>
        
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          Med At Home
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;