import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const LandingPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Welcome Page
          </Text>
          <Button
            onPress={() =>
              navigation.navigate('drawerStack', {userType: 'user'})
            }
            title="Login"
          />
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 16,
            }}>
            ------------- OR -------------
          </Text>
          <Button
            onPress={() =>
              navigation.navigate('drawerStack', {userType: 'guest'})
            }
            title="Register as a New User"
          />
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

export default LandingPage;