import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';

const Signup = (props) => {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460, marginTop: 40 }}>
        <Text
          style={{
            color: '#00CBF7',
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 20,
            marginRight: 40,
          }}
        >
          CUET TransitLink
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 30,
            marginTop: 30,
            alignItems: 'center',
            marginRight: 40,
          }}
        >
          <Text
            style={{
              color: 'green',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 20,
              marginRight: 30,
            }}
          >
            Create a new account
          </Text>
          <Field placeholder="Full Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <Field placeholder="User Type eg. Teacher" />

          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Account Created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
            >
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
