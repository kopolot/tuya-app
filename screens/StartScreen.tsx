import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";

const StartScreen:React.FC = ()=>{
    return (
       <SafeAreaView style={styles.mainContainer}>
            <Image 
                style={styles.image} 
                source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}}
            />
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        width:"100%",
        height:"100%",
        flexDirection:"column",
        flexWrap:'nowrap',
        justifyContent:"center",
        backgroundColor:"rgba(0,0,255,.5)"
    },
    image:{
        width:300,
        height:300
    }
});

export default StartScreen;