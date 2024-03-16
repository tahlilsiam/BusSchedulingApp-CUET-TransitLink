import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

const Schedule = () => {
  const [busData, setBusData] = useState([]);

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

  const renderBusCards = (busData) => {
    const tripKeys = Object.keys(busData).filter((key) =>
      key.startsWith("trip")
    );
    const tripDetailsArray = [];

    tripKeys.forEach((tripKey) => {
      const tripDetails = busData[tripKey];
      if (
        tripDetails.tripType &&
        tripDetails.startTime &&
        tripDetails.endTime
      ) {
        const [day, trip] = tripKey
          .replace("trip", "")
          .match(/([A-Za-z]+)([0-9]+)/)
          .slice(1);
        tripDetailsArray.push({
          day: day.charAt(0).toUpperCase() + day.slice(1),
          trip: `${trip}`,
          details: tripDetails,
        });
      }
    });

    return tripDetailsArray.map(({ day, trip, details }, index) => (
      <BusCard
        key={index}
        busData={busData}
        tripDetails={details}
        day={day}
        trip={trip}
      />
    ));
  };

  const BusCard = ({ busData, tripDetails, day, trip }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{busData.busName}</Text>
        <Text>Bus Number: {busData.busNumber}</Text>
        <Text>Driver Name: {busData.staffName.driverName}</Text>
        <Text>Helper Name: {busData.staffName.helperName}</Text>

        <Text style={styles.title}>
          Trip Details for {day} - {trip} Trip
        </Text>
        <Text>Trip Type: {tripDetails.tripType}</Text>
        <Text>Start Time: {tripDetails.startTime}</Text>
        <Text>End Time: {tripDetails.endTime}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.scrollView}>
      {busData.map((bus, index) => (
        <View key={index}>{renderBusCards(bus)}</View>
      ))}
    </ScrollView>
  );
};

const styles = {
  scrollView: {
    flex: 1,
    padding: 10,
  },
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#FAFAD2",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  busTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
};

export default Schedule;
