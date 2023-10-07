import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  PixelRatio
} from "react-native";
import { Card } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";


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
  const borderWidth = 1 * PixelRatio.get();
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
    <View>
      <View style={styles.rectangleGroup}>
        <Image
          style={[styles.uppersliderimage, styles.text23Position]}
          resizeMode="cover"
          source={require("../assets/images/imgslider.jpg")}
        />
        <Text style={[styles.text23]}>23</Text>
        <View style={[styles.gouriKarnurkarParent, styles.groupChild7Position]}>
          <Text style={[styles.gouriKarnurkar1, styles.textTypo]}>
            Gouri Karnurkar
          </Text>
          <View style={[styles.groupContainer, styles.gynacologist1Layout]}>
            <View style={styles.dentistWrapper}>
              <Text style={[styles.dentist, styles.bookTypo]}>Dentist</Text>
            </View>
            <Text style={[styles.km7, styles.bookTypo]}>~3.3km</Text>
            <View style={[styles.parent98, styles.parentLayout]}>
              <Text style={[styles.text98, styles.textTypo]}>98%</Text>
              <Text style={[styles.text350, styles.text350Position]}> ₹ 350</Text>

              <Image
                style={[styles.iconsThumbsUp, styles.parentLayout]}
                resizeMode="cover"
                source={require("../assets/images/thumbsup.png")}
              />
            </View>
        
          </View>

          </View>
          </View>
    <ScrollView  contentContainerStyle={styles.container}>
     <View style={styles.card}>
     <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/images/imgslider.jpg")}
      />
       </View>
      <Text style={[styles.bookAppointment, styles.ophtamologistTypo]}>{`Book
Appointment`}</Text>
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
                        item === selectedTime ? "#CC9B66" : "#FFFFFF",
                    },
                  ]}
                  onPress={() => handleTimeSlotClick(item)}
                >
                  <Text
                    style={{
                      color: item === selectedTime ? "#FFFFFF" : "#000000",
                      fontWeight: item === selectedTime ? "700" : "normal"
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
            <View style={styles.groupParent}>

        <View style={[styles.swapnilKatareWrapper, styles.wrapperPosition]}>
          <Text style={[styles.swapnilKatare, styles.nameposition]}>
            Swapnil Katare
          </Text>
        </View>
        <View style={styles.m24Wrapper}>
        <Text style={styles.nameposition}>
            <Text style={[styles.mtext]}>M/</Text>
            <Text style={styles.m24}>24</Text> 
           
          </Text>
          <View>
            <Text style={[styles.text20, styles.textTypo1]}>8735468097</Text>
            </View>
            
        </View>
        
        </View>
        
      <TouchableOpacity
        style={[
          styles.bookNowButton,
          {  borderColor: selectedTime ? "#1A936F" : "#CCCCCC",
          
          borderWidth: 2, 
          borderRadius: 10, 
         },
        ]}
        disabled={!selectedTime}
      >
        <Text
          style={{
            fontWeight: selectedTime ? "700" : "normal", 

            color: selectedTime ? "#1A936F" : "#CCCCCC", 
            height: 35,
            width: 242,
            borderRadius: 2,
            borderColor: "#CACACA",
            fontSize: 22,
            textAlign: "center",
          }}
        >
          Confirm Appointment
        </Text>
        
      </TouchableOpacity>
      
    </ScrollView>
   
      <Text style={[styles.newUser, styles.userTypo]}>New user</Text>
      <Text style={[styles.changeUser, styles.userTypo]}>Change user</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flexGrow: 1,
    height: 457,
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
    top: 41,
    left: 19,
    marginVertical: 10,
    width: 340, 
    backgroundColor: "white",
    
    // Set the width of the card as needed
  },
  cardContent: {
    top: 41,
    
    left: 0,
    alignItems: "center",
  },
  circularImage: {
    height: 59,
    width: 59,
    borderRadius: 20,
  },
  dateRow: {
    flexDirection: "row",
  },
  dateItem: {
    flex: 1, // Equal width for each date
    padding: 10,
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
    
  },
  timeSlotsRow: {
    flexDirection: "row",

  },
  timeSlot: {

    padding: 10,
    margin: 10,
    marginBottom: 19,
    height: 40,
    minWidth: 80, // Minimum width for each time slot
    borderWidth: 1,
    borderColor: "#CC9B66",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bookNowButton: {
    marginTop: 23,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,

  },
  bookAppointment: {
    top: 19,
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    left: 19,
  },
  ophtamologistTypo: {
    color: "black",
    textAlign: "left",
    position: "absolute",
  },
  rectangleIconPosition: {
    right: 305,
    position: "absolute",
  },
  rectangleIcon: {
    top: 60,
    height: 59,
    width: 59,
    borderRadius: 20,
  },
  swapnilKatare: {
    fontWeight: "500",
    fontFamily: "Roboto",
   
  },
  nameposition:{
    color: "#414141",
    lineHeight: 19,
    letterSpacing: 0.3,
    textAlign: "left",
    fontSize: 14,
    left: 0,
    top: 0,
    position: "absolute",
  },
  swapnilKatareWrapper: {
    top: 109,
    marginRight: 12,
  },
  wrapperPosition: {
    height: 19,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    
    left: 90,
    height: 61,
    position: "absolute",
  },

  m24Wrapper: {
    top: 130,
  },

  mtext:{
    color: "#414141",
    fontWeight: "500"
  },
  m24:{
    color:"#414141",
    fontWeight:"300"
  },
  text20:{
    top: 20,
    fontSize: 14,
    letterSpacing: 0.2,
    color:"#414141"
  },
  changeUser: {
    top: 0,
    left: 280,
    color: "#1a936f",
    width: 75,
  },
  // upperslider 
  gouriKarnurkar1: {
    fontSize: 16,
    fontWeight: "500",
    top: 0,
    color:"#FFF",
    fontFamily:"Roboto"
  },
  dentist:{
    color:"#D5D5D5",
    fontSize:14,
    fontWeight: "700",
    fontFamily:"Roboto"
  },
  km7:{
    color:"#0074DF",
    fontSize:14,
    fontWeight: "500",
    fontFamily:"Roboto"
  },
  parent98: {
    left: 58,
    width: 41,
    bottom: 17,

  },
  text98: {
    fontSize: 12,
    width: 26,
    fontWeight: "500",

  },
  textTypo: {
    color: "white",
    textAlign: "left",
    fontFamily: "Roboto",
    left: 0,
  },
  iconsThumbsUp: {
    left: 24,
    bottom: 17,
    height: 15,
    width: 15,
    marginBottom: 60,
  },
  gouriKarnurkarParent: {
    left: 88,
    width: 265,
  },
  groupChild7Position: {
    top: 72,
  },
  uppersliderimage: {
    top: 156,

    height: 59,
    width: 59,
    borderRadius: 10,
    left: 16,
  },
  changeUser: {
    top: 380,

    left: 280,
    color: "#1a936f",
    borderBottomWidth: 1, borderBottomColor: '#1a936f' ,

  },
  newUser: {
    borderBottomWidth: 1, borderBottomColor: '#0074DF' ,
    top: 355,

    left: 300,
    color: "#0074DF",
  },
  userTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    lineHeight: 18,
    fontSize: 13,
    letterSpacing: 0.3,
    fontWeight: "500",
    textDecoration: "underline",
    position: "absolute",
  },
  text23: {
    width: 19,
    fontWeight: "700",
    fontSize: 15,
    color: "white",
    top: 75,
  },
  rectangleGroup: {
    left: 9,
    width: 353,
  },

  text350:{
    left: 160,
    position: "absolute",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#00851D",
    color: "#2cd311",
    fontWeight: "700",
    textAlign: "left",
    fontSize: 14  ,
    bottom:61,
    paddingTop: 3,
    marginTop: -15,
  },
});


export default AppointmentBookingPage;
