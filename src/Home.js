import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: '#00CBF7', fontSize: 40 }}>Welcome to</Text>
        <Text style={{ color: '#00CBF7', fontSize: 40, marginBottom: 60 }}>
          CUET TransitLink
        </Text>
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Index"
          Press={() => props.navigation.navigate('Index')}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Home;
