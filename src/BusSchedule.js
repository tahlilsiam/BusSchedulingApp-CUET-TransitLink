import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BusCard = ({ busData, tripKey }) => {
  const tripDetails = busData[tripKey];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Details </Text>
      <Text>Bus Number: {busData.busNumber}</Text>
      <Text>Bus Name: {busData.busName}</Text>
      <Text>Driver Name: {busData.staffName.driverName}</Text>
      <Text>Helper Name: {busData.staffName.helperName}</Text>

      <Text style={styles.title}>Trip Details </Text>
      <Text>Trip Type: {tripDetails.tripType}</Text>
      <Text>Start Time: {tripDetails.startTime}</Text>
      <Text>End Time: {tripDetails.endTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
});

export default BusCard;
