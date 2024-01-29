import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import data from './dataset/data.json';

const Schedule = ({ navigation }) => {
  const [schedule, setSchedule] = useState(data.schedule);
  const [filterSchedule, setFilterSchedule] = useState([]);
  const [userType, setUserType] = useState();
  const [weekDay, setWeekDay] = useState();

  const selectedDay = (day) => {
    setWeekDay(day);
    const results = schedule.filter((bus) => {
      return bus.day == day && bus.type == userType;
    });
    setFilterSchedule(results);
  };

  const selectedType = (type) => {
    setUserType(type);
    const results = schedule.filter((bus) => {
      return bus.type == type && bus.day == weekDay;
    });
    setFilterSchedule(results);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Bus Schedule</Text>
        </View>

        <View style={styles.pickerSection}>
          <Text style={styles.pickerText}>Select Day:</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={weekDay}
              onValueChange={(itemValue, itemIndex) => selectedDay(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="--- Select Day ---" value="day" />
              <Picker.Item label="Sunday" value="Sunday" />
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Satarday" value="Satarday" />
            </Picker>
          </View>
        </View>

        <View style={styles.pickerSection}>
          <Text style={styles.pickerText}>User Type:</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={userType}
              onValueChange={(itemValue, itemIndex) => selectedType(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="--- User Type ---" value="utype" />
              <Picker.Item label="Teacher" value="Teacher" />
              <Picker.Item label="Student" value="Student" />
              <Picker.Item label="Office Staff" value="Office Staff" />
            </Picker>
          </View>
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
                      navigation.navigate('ScheduleDetails', {
                        id: schedule.bus_no,
                      })
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
                      navigation.navigate('ScheduleDetails', {
                        id: schedule.bus_no,
                      })
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
                      navigation.navigate('ScheduleDetails', {
                        id: schedule.bus_no,
                      })
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

  titleSection: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    padding: 5,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  pickerSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pickerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  pickerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray', // Border color
    borderWidth: 1, // Border width
    borderRadius: 5, // Border radius
    color: 'black',
    height: 25,
    width: 200,
  },

  picker: {
    height: 50,
    borderColor: 'gray', // Border color
    borderWidth: 1, // Border width
    borderRadius: 5, // Border radius
    color: 'black',
    height: 30,
    width: 200,
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
