import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const dummyTimings = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Time Slot</Text>
      <View style={styles.timeSlotsContainer}>
        {dummyTimings.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeSlot,
              { backgroundColor: time === selectedTime ? '#4CAF50' : '#FFFFFF' }
            ]}
            onPress={() => handleTimeSlotClick(time)}
          >
            <Text style={{ color: time === selectedTime ? '#FFFFFF' : '#000000' }}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[
          styles.bookNowButton,
          { backgroundColor: selectedTime ? '#4CAF50' : '#CCCCCC' }
        ]}
        disabled={!selectedTime}
      >
        <Text style={{ color: '#FFFFFF' , height: 35,width: 242,  borderRadius: 2, borderColor: "#CACACA", fontSize: 22, fontWeight: "500", textAlign: "center",}}>Confirm Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timeSlotsContainer: {
    
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  timeSlot: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  bookNowButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default AppointmentBookingPage;
