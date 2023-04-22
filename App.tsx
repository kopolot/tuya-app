import React, { useState} from 'react';
import RenderHTML from 'react-native-render-html';
import { ColorSchemeName, useWindowDimensions } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import TestComponent from './components/Test';
import LoginComponent from './components/LoginComponent'
import UserModule , {User} from "./ts/userModule"

type AppStateI={
  currentUsedComponent:React.ReactElement<any,any>|null
  user:User,
  theme:ColorSchemeName
}

const App:React.FC=()=>{
  var AppState:AppStateI={
    currentUsedComponent: UserModule.hasSession()?TestComponent({}):LoginComponent(),
    user:UserModule,
    theme:useColorScheme()
  }
  const isDark=AppState.theme==="dark"
  return (
    <SafeAreaView style={{width:"100%",height:"100%"}}>
      <ScrollView style={[isDark?styles.darkTheme:styles.lightTheme,styles.mainCont]}>
          {AppState.currentUsedComponent}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  darkTheme:{
    backgroundColor:"#000",
    color:"#fff"
  },
  lightTheme:{
    backgroundColor:"#fff",
    color:"#000"    
  },
  mainCont:{
    width:"100%",
    minHeight:"100%"
  }
});

export default App;
