import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import data from './dataset/data.json';

const back = require('./assets/left-arrow.png');

const Details = ({ route, navigation }) => {
  const bus = data.bus_info.filter(
    (element) => element.bus_no == route.params.id
  )[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.9}
          >
            <Image
              source={back}
              resizeMode="contain"
              style={styles.menuIconStyle}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Bus Information</Text>
        </View>
        <View style={styles.busInfoCard}>
          <View style={styles.headSection}>
            <View style={styles.topTextArea}>
              <Text style={styles.busNameText}>Bus Name - {bus.name}</Text>
            </View>
            <Text style={styles.busInfoText}>Bus No: {bus.bus_no}</Text>
            <Text style={styles.busInfoText}>
              Driver Name: {bus.driver_name}
            </Text>
            <Text style={styles.busInfoText}>
              Helper Name: {bus.helper_name}
            </Text>
            <Text style={styles.busInfoText}>
              Driver's Phone Number: {bus.driver_phone_number}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIconStyle: {
    width: 25,
  },
  HeaderText: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: '500',
  },

  headSection: {},
  topTextArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  busInfoCard: {
    height: 200,
    borderRadius: 20,
    margin: 10,
    padding: 20,
    backgroundColor: 'grey',
  },

  busNameText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    paddingBottom: 3,
  },

  busInfoText: {
    marginTop: 1,
    color: '#696969',
    fontWeight: '600',
    padding: 5,
    fontSize: 15,
    color: 'white',
  },
  backButton: {
    marginTop: 50,
    height: 40,
    // padding: 10,
    alignSelf: 'center',
    width: 250,
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
