import react from "react"
import {  useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text,View, StyleSheet } from "react-native"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const MainHeader = ({title}) =>{
return(
    <View style= {[styles.container]}>
        <Text style={[styles.title]}>{title}</Text>
    <SimpleLineIcons style={styles.bell} name="bell" size={22}/>
    </View>
)

}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom: 26,
        marginTop: 44
    },
    title:{
        width: 244,
        color:"#4A4A4A",
        fontWeight: 600,
        marginLeft:"3%",
        fontSize: 22,
        fontFamily: 'Roboto',
        fontStyle: "normal",
    },
    bell:{
        width: 24,
        height:24,
        flexShrink: 0,
        marginRight:"3%"
    }
    })
    export default MainHeader;