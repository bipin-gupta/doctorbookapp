import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MainHeader from "./Header";
import HorizontalCardGrid from "./Cards";
import Records from "./Records";
import PrevRecords from "./Records";

const Homescreens = () =>{
    return ( <View style={styles.container}>
        <MainHeader title="Upcoming Appointments"/>
        <HorizontalCardGrid/>
        {/* <PrevRecords/> */}
    </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        flex:1
    }
})
export default Homescreens;