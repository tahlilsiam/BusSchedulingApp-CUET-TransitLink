import React, { useState } from 'react';
import { ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import data from './dataset/data.json';

const Schedule = ({ navigation }) => {
  const [schedule, setSchedule] = useState(data.schedule);
  const [filterSchedule, setFilterSchedule] = useState(data.schedule);

  const onClick = (type) => {
    const results = schedule.filter((bus) => {
      return bus.type == type;
    });
    setFilterSchedule(results);
  };

  const onClickAll = () => {
    setFilterSchedule(data.schedule);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Bus Schedule</Text>
        </View>

        <View style={styles.typesSection}>
          <Pressable onPress={onClickAll}>
            <Text style={styles.typesTextActive}>All</Text>
          </Pressable>
          <Pressable onPress={() => onClick('Teacher')}>
            <Text style={styles.typesTextActive}>Teacher</Text>
          </Pressable>

          <Pressable onPress={() => onClick('Student')}>
            <Text style={styles.typesTextActive}>Student</Text>
          </Pressable>

          <Pressable onPress={() => onClick('Office Staff')}>
            <Text style={styles.typesTextActive}>Office Staff</Text>
          </Pressable>
        </View>

        <View style={styles.listSection}>
          <Text style={styles.headText}>First Shift</Text>

          <ScrollView style={styles.elementPallet}>
            {filterSchedule.map((schedule) => {
              return (
                schedule.shift == 'First' && (
                  <TouchableOpacity
                    style={styles.element}
                    key={schedule.id}
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('Details', { id: schedule.bus_no })
                    }
                  >
                    <View style={styles.infoArea}>
                      <View style={styles.topInfoArea}>
                        <Text style={styles.infoTitle}>
                          Bus No: {schedule.bus_no}
                        </Text>
                        <Text style={styles.infoTitle}>
                          {schedule.type} bus
                        </Text>
                      </View>
                      <Text style={styles.infoSub}>
                        Start Time - {schedule.start_time}
                      </Text>
                      <Text style={styles.infoSub}>
                        Start Place - {schedule.start_place}
                      </Text>
                      <Text style={styles.infoSub}>
                        Destination - {schedule.destination}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              );
            })}
          </ScrollView>

          <Text style={styles.headText}>Second Shift</Text>
          <ScrollView style={styles.elementPallet}>
            {filterSchedule.map((schedule) => {
              return (
                schedule.shift == 'Second' && (
                  <TouchableOpacity
                    style={styles.element}
                    key={schedule.id}
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('Details', { id: schedule.bus_no })
                    }
                  >
                    <View style={styles.infoArea}>
                      <View style={styles.topInfoArea}>
                        <Text style={styles.infoTitle}>
                          Bus No: {schedule.bus_no}
                        </Text>
                        <Text style={styles.infoTitle}>
                          {schedule.type} bus
                        </Text>
                      </View>
                      <Text style={styles.infoSub}>
                        Start Time - {schedule.start_time}
                      </Text>
                      <Text style={styles.infoSub}>
                        Start Place - {schedule.start_place}
                      </Text>
                      <Text style={styles.infoSub}>
                        Destination - {schedule.destination}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              );
            })}
          </ScrollView>

          <Text style={styles.headText}>Third Shift</Text>
          <ScrollView style={styles.elementPallet}>
            {filterSchedule.map((schedule) => {
              return (
                schedule.shift == 'Third' && (
                  <TouchableOpacity
                    style={styles.element}
                    key={schedule.id}
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('Details', { id: schedule.bus_no })
                    }
                  >
                    <View style={styles.infoArea}>
                      <View style={styles.topInfoArea}>
                        <Text style={styles.infoTitle}>
                          Bus No: {schedule.bus_no}
                        </Text>
                        <Text style={styles.infoTitle}>
                          {schedule.type} bus
                        </Text>
                      </View>
                      <Text style={styles.infoSub}>
                        Start Time - {schedule.start_time}
                      </Text>
                      <Text style={styles.infoSub}>
                        Start Place - {schedule.start_place}
                      </Text>
                      <Text style={styles.infoSub}>
                        Destination - {schedule.destination}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e7e7e7',
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
    width: 30,
  },
  faceIconStyle: {
    width: 40,
  },

  titleSection: {
    marginTop: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },

  typesSection: {
    marginTop: 15,
    flexDirection: 'row',
  },

  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontWeight: '500',
    color: '#696969',
  },

  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    width: '110%',
  },
  element: {
    height: 110,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 13,
  },
  infoArea: {
    flex: 1,
  },

  topInfoArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoTitle: {
    fontSize: 13,
    color: '#696969',
    fontWeight: 'bold',
  },

  infoSub: {
    fontSize: 15,
    fontWeight: '600',
    fontWeight: 'bold',
  },
});
