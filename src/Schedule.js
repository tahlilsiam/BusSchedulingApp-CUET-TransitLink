import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BusCard from "./BusCard";

const Schedule = () => {
  const [busData, setBusData] = useState([]);
  const [selectedTripType, setSelectedTripType] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [days, setDays] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://busschedulingapp-cuet-transitlink-3.onrender.com/buses"
      );
      const data = await response.json();
      setBusData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderBusCards = () => {
    let filteredBusData = busData;

    if (selectedTripType) {
      filteredBusData = filteredBusData.filter((bus) => {
        for (let key in bus) {
          if (
            key.startsWith("trip") &&
            bus[key].tripType.toLowerCase() === selectedTripType
          ) {
            return true;
          }
        }
        return false;
      });
    }

    if (selectedDay) {
      filteredBusData = filteredBusData.filter((bus) => {
        return (
          bus[`trip${selectedDay.toLowerCase()}1`].tripType.toLowerCase() !== ""
        );
      });
    }

    return filteredBusData.map((bus, index) => (
      <BusCard key={index} bus={bus} />
    ));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.heading}>Schedule of Buses</Text>

      <Picker
        selectedValue={selectedTripType}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedTripType(itemValue)}
      >
        <Picker.Item label="Select Trip Type" value={null} />
        <Picker.Item label="Teacher" value="teacher" />
        <Picker.Item label="Student" value="student" />
        <Picker.Item label="Staff" value="staff" />
      </Picker>

      <Picker
        selectedValue={selectedDay}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
      >
        <Picker.Item label="Select Day" value={null} />
        {days.map((day, index) => (
          <Picker.Item key={index} label={day} value={day} />
        ))}
      </Picker>

      {renderBusCards()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  picker: {
    marginBottom: 20,
    height: 50,
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default Schedule;
