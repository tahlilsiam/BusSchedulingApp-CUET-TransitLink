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
  const notice = data.notices.filter(
    (element) => element.id == route.params.id
  )[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
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
          <Text style={styles.HeaderText}>Notice Details</Text>
        </View>
      </View>
      <View style={styles.noticeCard}>
        <View style={styles.topTextArea}>
          <Text style={styles.noticeTitle}>{notice.title}</Text>
        </View>
        <Text style={styles.noticeDescription}>{notice.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    marginTop: 50,
  },
  headerContainer: {
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
    fontWeight: '600',
  },

  topTextArea: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: 'lightblue',
  },

  noticeCard: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  noticeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  noticeDescription: {
    marginTop: 1,
    fontWeight: '400',
    padding: 5,
    fontSize: 15,
    color: 'black',
  },
  backButton: {
    marginTop: 50,
    height: 40,
    alignSelf: 'center',
    width: 250,
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
