import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import data from './dataset/data.json';

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={[styles.title]}>{item.title}</Text>
  </TouchableOpacity>
);

const Notices = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('NoticeBody', { id: item.id })}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>CUET Transport Section Notices</Text>
      </View>
      <FlatList
        data={data.notices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  headingContainer: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#E4E5E7',
  },
  headingText: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#2D3E50',
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: 'lightblue',
  },

  title: {
    fontSize: 20,
    color: 'balck',
  },
});

export default Notices;
