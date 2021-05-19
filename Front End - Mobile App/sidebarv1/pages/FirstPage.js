import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const FirstPage = ({navigation, route}) => {
  const [
    visible,
    setVisible
  ] = useState(route.params.userType === 'user');
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
            Home
          </Text>
          <Button
            onPress={() => navigation.navigate('LandingPage')}
            title="Go to Login Page"
          />
          {visible ? (
            <Button
              onPress={() => {
                navigation.navigate(
                  'drawerStack',
                  {userType: 'guest'}
                );
                setVisible(false);
              }}
              title="Register New Account"
            />
          ) : null}
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

export default FirstPage;