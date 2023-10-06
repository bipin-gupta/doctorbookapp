import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";

const dummyDate = [
  "Today",
  "22, Wed",
  "23, Thur",
  "24, Fri",
  "25, Sat",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

const AppointmentBookingPage = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSlotClick = (time) => {
    if (time === selectedTime) {
      setSelectedTime(null); // Unselect the time slot if already selected
    } else {
      setSelectedTime(time); // Select the time slot
    }
  };

  // Split the dummyDate into three rows
  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push(dummyDate.slice(i * 5, (i + 1) * 5));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select a Time Slot</Text>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={require("../assets/images/bottomimg1.png")}
            style={styles.circularImage}
            resizeMode="cover"
          />
        </Card.Content>
      </Card>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex}>
          {/* Separate view for the first row with dates */}
          {rowIndex === 0 ? (
            <View style={styles.dateRow}>
              {row.map((item, index) => (
                <View key={index} style={styles.dateItem}>
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            // Separate view for other rows with time slots
            <View style={styles.timeSlotsRow}>
              {row.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeSlot,
                    {
                      backgroundColor:
                        item === selectedTime ? "#4CAF50" : "#FFFFFF",
                    },
                  ]}
                  onPress={() => handleTimeSlotClick(item)}
                >
                  <Text
                    style={{
                      color: item === selectedTime ? "#FFFFFF" : "#000000",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
      <TouchableOpacity
        style={[
          styles.bookNowButton,
          { backgroundColor: selectedTime ? "#4CAF50" : "#CCCCCC" },
        ]}
        disabled={!selectedTime}
      >
        <Text
          style={{
            color: "#FFFFFF",
            height: 35,
            width: 242,
            borderRadius: 2,
            borderColor: "#CACACA",
            fontSize: 22,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Confirm Appointment
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    top: '45%',
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    marginVertical: 10,
    width: 340, // Set the width of the card as needed
  },
  cardContent: {
    alignItems: "center",
    marginRight: "80%",
  },
  circularImage: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  dateRow: {
    flexDirection: "row",
  },
  dateItem: {
    flex: 1, // Equal width for each date
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  timeSlotsRow: {
    flexDirection: "row",
  },
  timeSlot: {
    padding: 10,
    margin: 5,
    height: 40,
    minWidth: 80, // Minimum width for each time slot
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  bookNowButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
});

export default AppointmentBookingPage;
