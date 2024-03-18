import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BusCard from "./BusCard";

const Schedule = () => {
  const [busData, setBusData] = useState([]);
  const [filteredBusData, setFilteredBusData] = useState([]);
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
      setFilteredBusData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [selectedTripType, selectedDay]);

  const applyFilters = () => {
    let filteredData = busData;

    if (selectedTripType) {
      filteredData = filteredData.filter((bus) => {
        return Object.keys(bus).some((key) => {
          if (key.startsWith("trip")) {
            const trip = bus[key];
            return (
              trip.tripType.toLowerCase() === selectedTripType.toLowerCase()
            );
          }
          return false;
        });
      });
    }

    if (selectedDay) {
      const selectedDayAbbreviation = selectedDay.substring(0, 3).toLowerCase();
      filteredData = filteredData.filter((bus) => {
        return Object.keys(bus).some((key) => {
          if (key.startsWith(`trip${selectedDayAbbreviation}`)) {
            const trip = bus[key];
            return trip.tripType.toLowerCase() !== "";
          }
          return false;
        });
      });
    }

    setFilteredBusData(filteredData);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.heading}>Schedule of Buses</Text>

      <Picker
        selectedValue={selectedTripType}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedTripType(itemValue)}
      >
        <Picker.Item label="Select Trip Type" value={null} />
        <Picker.Item label="Teacher" value="Teacher" />
        <Picker.Item label="Student" value="Student" />
        <Picker.Item label="Staff" value="Office Staff" />
      </Picker>

      <Picker
        selectedValue={selectedDay}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedDay(itemValue)}
      >
        <Picker.Item label="Select Day" value={null} />
        {days.map((day, index) => (
          <Picker.Item key={index} label={day} value={day} />
        ))}
      </Picker>

      {filteredBusData.map((bus, index) => (
        <BusCard key={index} bus={bus} />
      ))}
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
