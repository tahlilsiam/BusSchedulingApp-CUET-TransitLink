import React from "react";
import { View, Text } from "react-native";

const BusCard = ({ bus }) => {
  const renderBusDetails = () => {
    const tripKeys = Object.keys(bus).filter((key) => key.startsWith("trip"));
    const tripDetailsArray = [];

    tripKeys.forEach((tripKey) => {
      const tripDetails = bus[tripKey];
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
      <View style={styles.container} key={index}>
        <Text style={styles.title}>{bus.busName}</Text>
        <Text>Bus Number: {bus.busNumber}</Text>
        <Text>Driver Name: {bus.staffName.driverName}</Text>
        <Text>Helper Name: {bus.staffName.helperName}</Text>

        <Text style={styles.title}>
          Trip Details for {day} - {trip} Trip
        </Text>
        <Text>Trip Type: {details.tripType}</Text>
        <Text>Start Time: {details.startTime}</Text>
        <Text>End Time: {details.endTime}</Text>
      </View>
    ));
  };

  return <>{renderBusDetails()}</>;
};

const styles = {
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
};

export default BusCard;
