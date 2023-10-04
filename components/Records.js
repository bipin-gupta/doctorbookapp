import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const PrevRecords = () => {
  return (
    <View>
         <View style={[styles.overridestabBaritem, styles.itemPosition]}>
          <Text style={[styles.label, styles.labelTypo]}>Label</Text>
          <Image
            style={[
              styles.overridestabBariconsunsele,
              styles.overridestabPosition,
            ]}
            source={require("../assets/images/previmg1.png")}
          />
        </View>
       <Text style={[styles.emrsPreviousRec, styles.emrsPreviousRecTypo]}>
        EMR’s / Previous Records
      </Text>
      <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/img1.png')}
                  style={styles.circularImage}
                />
              </View>
    </View>
  )
}
const styles = StyleSheet.create({
    circularImage:{
        
    },
     // previous records start
  emrsPreviousRecTypo: {
    fontSize: 20,
    textAlign: "left",
    color:"#4A4A4A",
    fontWeight: "600",
    fontFamily: "Roboto",
    position: "absolute",
  },
  emrsPreviousRec: {
    top: 39,
    left: 20,
    textAlign: "left",
    color:"#4A4A4A",
    fontWeight: "600",
  },
})

export default PrevRecords;