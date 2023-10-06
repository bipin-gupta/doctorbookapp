import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import AppointmentBookingPage from "./Booknow";

const data = [
  {
    id: 1,
    name: `Dr.
Aashis Prasad`,
    content: "Neurosurgeon",
    date: "27th jan, ",
    image: require("../assets/images/bottomimg1.png"),
  },
  {
    id: 2,
    name: `Dr. 
Vaishnavi Todkar`,
    content: "Neurosurgeon",
    date: "17th jan, ",
    image: require("../assets/images/bottomimg2.png"),
  },
  {
    id: 3,
    name: `Dr.
  Rahul Mondal`,
    content: "Neurosurgeon",
    date: "27th jan, ",
    image: require("../assets/images/bottomimg2.png"),
  },

  // Add more card data as needed
];

const HorizontalCardGrid = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.records34}>
      <ScrollView horizontal style={styles.scrollView}>
        {data.map((card) => (
          <View style={styles.cardContainer} key={card.id}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/img1.png")}
                    style={styles.circularImage}
                  />
                </View>
                <View style={[styles.group3860, styles.groupPosition]}>
                  <Text style={styles.in5DaysToGo}>in - 5 days to go</Text>
                  <Text style={styles.monJan21}>
                    <Text style={styles.text43}>{`23 `}</Text>
                    <Text style={styles.mon}>Mon</Text>
                    <Text style={styles.text43}>{`, `}</Text>
                    <Text style={styles.jan}>Jan</Text>
                    <Text style={styles.text43}>{` `}</Text>
                    <Text style={styles.text46}>21</Text>
                  </Text>
                  <View style={[styles.group3858, styles.groupLayout]}>
                    <View style={[styles.rectangle41, styles.groupLayout]} />
                    <Text style={[styles.texttime, styles.text47Typo]}>
                      13:30
                    </Text>
                  </View>
                </View>
                <View style={[styles.group3861, styles.groupPosition]}>
                  <Text
                    style={[styles.arrundathiClinicOfLasorT, styles.text47Typo]}
                  >{`Arrundathi Clinic of Laproscopy & Lasor Treatments`}</Text>
                  <Text style={styles.c66MedicalCenterLinkCor}>
                    C/66, Medical Center, Link Corner Mall, Behind KFC, Linking
                    Road, Bandra West
                  </Text>
                </View>
                <Text style={[styles.drSwapnilKatare, styles.groupLayout]}>
                  Dr. Swapnil Katare
                </Text>
                <Text style={styles.neurosurgeon}>Neurosurgeon</Text>
                <View style={[styles.group3851, styles.groupLayout]}>
                  <Text style={[styles.text3750, styles.groupLayout]}>
                    3750
                  </Text>
                  <Text style={styles.rupee}> ₹</Text>
                </View>
                <FontAwesome
                  style={[styles.phonecard, styles.phonecardlayout]}
                  name="phone"
                  size={22}
                />
              </Card.Content>
            </Card>
          </View>
        ))}
      </ScrollView>
      <Text style={[styles.emrsPreviousRec, styles.emrsPreviousRecTypo]}>
        EMR’s / Previous Records
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/previmg1.png")}
          horizontal
          style={styles.prevrecimg}
        />
        <Image
          source={require("../assets/images/previmg2.png")}
          horizontal
          style={styles.prevrecimg}
        />
        <Image
          source={require("../assets/images/previmg3.png")}
          style={styles.prevrecimg}
        />
      </View>
      <View style={styles.group3844}>
        <Text style={[styles.text2]}>+</Text>
      </View>
      <ScrollView horizontal style={styles.scrollView}>
        {data.map((card) => (
          <View style={styles.cardContainer} key={card.id}>
            <Card style={styles.bottomcard}>
              <Card.Content style={styles.cardContent}>
                <View style={[styles.imageContainer]}>
                  <Image
                    source={card.image}
                    style={[
                      styles.circularImage,
                      styles.rectangle1654Icon,
                      styles.iconPosition1,
                    ]}
                    resizeMode="cover"
                  />
                </View>

                <View style={styles.circleContainer}>
                  <View style={styles.circle} />
                </View>

                <Text style={[styles.text7, styles.text13]}>13</Text>
                <View style={[styles.ellipse267, styles.ellipse267Layout]}>
                  <Text style={[styles.bottomplus, styles.bookTypo]}>+</Text>
                </View>
                <Text style={[styles.bottomdocname]}>{card.name}</Text>

                <Text style={[styles.ayurveda]}>Ayurveda</Text>
                <Text style={[styles.thJan20, styles.bookLayout]}>
                  <Text style={styles.bookTypo}>
                    <Text style={styles.jan27}>{card.date}</Text>
                    <Text style={styles.text20}>20</Text>
                  </Text>
                </Text>
                <Text style={[styles.videoWednesday, styles.bookLayout]}>
                  <Text style={styles.jan27}>Video</Text>
                  <Text style={styles.text5}> - Wednesday</Text>
                </Text>

                <View style={[styles.phonecircle, styles.bottomphonecircle]}>
                  <FontAwesome
                    style={styles.bottomphone}
                    name="phone"
                    size={34}
                  />
                </View>
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    setVisible(true);
                  }}
                >
                  <View style={[styles.group3883, styles.booklayout]}>
                    <View style={[styles.bookborder]}>
                      <Text style={[styles.book]}>Book</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <Modal
                  // transparent={false}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Increase the opacity here
                    width: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    //top: "45%",
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                  }}
                  isVisible={visible}
                  onBackButtonPress={() => {
                    setVisible(false);
                  }}
                >
                  <AppointmentBookingPage />
                </Modal>
              </Card.Content>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // card calender start
  in5DaysToGo: {
    color: "#4A90E2",
    fontFamily: "Roboto",
    fontSize: 15,
    top: 179,
    textAlign: "left",
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  mon: {
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  jan: {
    fontFamily: "Roboto",
  },
  text46: {
    fontWeight: "300",
    fontFamily: "Roboto",
  },
  monJan21: {
    left: 123,
    fontSize: 16,
    top: 179,
    textAlign: "left",
    color: "#000",
    position: "absolute",
  },
  rectangle41: {
    borderRadius: 5,
    backgroundColor: "#DAFFBD",
    width: 45,
    height: 19,
    top: 181,
    left: 0,
  },
  texttime: {
    left: "4.44%",
    color: "#5B9021",
    fontFamily: "Roboto",
    fontSize: 15,
    top: 180,
  },
  group3858: {
    left: 256,
    width: 45,
    height: 19,
    top: 0,
  },
  group3860: {
    width: "92.9%",
    top: "1.65%",
    right: "3.7%",
    bottom: "5.26%",
    height: "9.09%",
    left: "3.4%",
  },
  // card calender end
  arrundathiClinicOfLasorT: {
    // marginTop: 80,

    fontFamily: "Roboto",
    fontSize: 15,
    top: 60,
    color: "#4A4A4A",
    left: "0%",
    width: "100%",
  },
  c66MedicalCenterLinkCor: {
    height: "",
    top: 107,
    fontFamily: "Roboto",
    fontSize: 15,
    textAlign: "left",
    color: "#4A4A4A",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  group3861: {
    height: "35.89%",
    width: "93.21%",
    top: "40.19%",
    right: "3.4%",
    bottom: "23.92%",
  },
  text47Typo: {
    fontWeight: "700",
    fontFamily: "Roboto",
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    left: "3.4%",
    position: "absolute",
  },
  drSwapnilKatare: {
    width: 139,
    top: 11,
    left: 79,
    fontSize: 15,
    textAlign: "left",
    color: "black",
    fontWeight: "600",
  },
  neurosurgeon: {
    marginTop: 11,
    left: 78,

    color: "black",
    fontFamily: "Roboto",
    fontSize: 15,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 19,
    position: "absolute",
  },
  scrollView: {
    flexDirection: "row",
  },
  cardContainer: {
    margin: 8,
  },
  card: {
    width: 324,
    height: 209,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    marginHorizontal: 0,
    bottom: 11,
    flexDirection: "row",
  },
  circularImage: { marginTop: 5 },
  textContainer: {
    marginLeft: 8,
  },

  doctor: {
    fontSize: 17,
    color: "#4A4A4A",
  },
  content: {
    fontSize: 15,
    color: "#393939",
    fontStyle: "normal",
    fontWeight: "400",
  },
  phone: {
    marginLeft: "auto",
    marginBottom: 11,
    color: "#C08A53",
  },
  phonecard: {
    color: "#CD9C68",
    top: 19,
    bottom: "85.65%",
    left: 295,
  },
  phonecardlayout: {
    width: "5.86%",

    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text3750: {
    left: 13,
    textAlign: "right",
    width: 37,
    fontFamily: "Roboto",
    fontSize: 15,
    color: "black",
    top: 0,
    fontWeight: "500",
  },

  group3851: {
    left: 263,
    width: 50,
    height: 19,
    top: 47,
  },
  rupee: {
    color: "#CD9C68",
  },

  // previous records start
  emrsPreviousRecTypo: {
    fontSize: 20,

    textAlign: "left",
    color: "#4A4A4A",
    fontWeight: "600",
    fontFamily: "Roboto",
    position: "absolute",
  },
  emrsPreviousRec: {
    top: 280,
    left: 20,
    textAlign: "left",
    color: "#4A4A4A",
    fontWeight: "600",
  },
  prevrecimg: {
    left: 20,
    bottom: 39,
    width: 60, // Set the width of the images as needed
    height: 60, // Set the height of the images as needed
    marginRight: 8, // Add margin between images if needed
    borderRadius: 25,
    flexShrink: 0,
    marginRight: 17,
    // Make the images circular if desired
  },

  group3844: {
    top: 385,
    left: 261,
    height: 26,
    width: 15,
    position: "absolute",
  },
  text2: {
    fontSize: 22,
    color: "#cc9b66",
    bottom: 45,
    textAlign: "left",
    fontWeight: "600",
    left: 0,
    position: "absolute",
    textAlign: "left",
  },
  // prev records end
  // bottom card start
  bottomcard: {
    width: 249,
    height: 237,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 4,
  },
  text7: {
    top: 0,
  },
  text13: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    textAlign: "left",
    left: 8,
    position: "absolute",
  },
  rectangle1654Icon: {
    borderRadius: 22,
    borderWidth: 3,
    borderColor: "#FF006B",
  },
  iconPosition1: {
    marginLeft: 10,

    height: 56,
    width: 56,
    left: 6,
    top: 3,
    position: "absolute",
  },
  circleContainer: {
    left: 58,
    right: 0,
    width: 11, // Width of the container view
    height: 11, // Height of the container view
  },
  circle: {
    width: 11, // Diameter of the circle
    height: 11, // Diameter of the circle
    borderRadius: 13, // Radius of the circle
    backgroundColor: "#89FF09", // Color of the circle
    shadowColor: "rgba(214, 214, 214, 0.25)", // Shadow color (iOS)
    shadowOffset: { width: 1, height: 1 }, // Shadow offset (iOS)
    shadowOpacity: 1, // Shadow opacity (iOS)
    shadowRadius: 25, // Shadow blur radius (iOS)
    elevation: 5, // Shadow depth (Android)
  },

  bottomdocname: {
    top: 33,
    fontFamily: "Roboto",
    left: 100,
    fontSize: 17,
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    position: "absolute",
  },
  ayurveda: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: "black",
    textAlign: "left",
    position: "absolute",
    top: 81,
    left: 34,
  },
  jan27: {
    color: "#390969",
    fontWeight: "500",
  },
  thJan20: {
    top: 107,
    left: 19,
    fontSize: 25,
    lineHeight: 25,
  },
  bookLayout: {
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
  },
  text20: {
    color: "#77539B",
  },
  videoWednesday: {
    top: 140,
    fontFamily: "Roboto",
    left: 19,
    fontSize: 17,
  },
  phonecircle: {
    backgroundColor: "fill: rgba(33, 188, 8, 0.20)",
    top: 0,
    left: 0,
  },
  bottomphonecircle: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 175,
    left: 19,
    borderRadius: 25,
  },
  bottomphone: {
    marginLeft: "auto",
    width: 27,
    height: 37,
    marginBottom: 11,
    color: "#21BC08",
    top: 9,
    left: 11,
    position: "absolute",
  },
  bookborder: {
    borderRadius: 50,
    backgroundColor: "rgba(255, 219, 94, 0.20)",
    bottom: 22,
    right: 18,
    width: 133,
    height: 50,
    position: "absolute",
  },

  book: {
    top: 12,
    left: 35,
    color: "#FFDB5E",
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  group3883: {
    left: 98,
    top: 175,
  },
  booklayout: {
    width: 133,
    height: 50,
    position: "absolute",
  },
  bottomplus: {
    left: 3.2,
    right: 3,
    color: "#454545",
    lineHeight: 25,
    textAlign: "left",
    position: "absolute",
    fontSize: 25,
    fontWeight: "500",
    width: 18,
    height: 25,
    bottom: 2,
  },

  ellipse267Layout: {
    top: 8,
    backgroundColor: "white",
    height: 24,
    width: 24,
    left: 210,
    borderRadius: 12,
    position: "absolute",
    shadowColor: "rgba(69, 69, 69, 0.20)", // Shadow color (iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
    shadowOpacity: 1, // Shadow opacity (iOS)
    shadowRadius: 4, // Shadow blur radius (iOS)
    elevation: 4, // Shadow depth (Android)
  },
});

export default HorizontalCardGrid;
