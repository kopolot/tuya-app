import React from "react";
import { Image, StyleSheet, Text,View } from "react-native";

type Test = {
    name?: string
    age?: number
}

const TestComponent:React.FC<Test> = ({name="Konrad",age=20})=>{
    return (
        <View>
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}} style={{width:200,height:200}}/>
            <Text style={style.text} >Test componetn {name} {age}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text:{
        color:"#fff",
        backgroundColor:"#000"
    }
})

export default TestComponent