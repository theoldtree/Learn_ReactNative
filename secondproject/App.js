import React, {useState} from 'react';
import {  StyleSheet, View, Text,FlatList,TouchableOpacity,TextInput,Button,
          TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Router, Scene} from 'react-native-router-flux';
import MainPageScreen from './mainPage';
import DaejeonWeather from'./daejeon';
import SeoulWeather from './seoul';
import DaeguWeather from './daegu';
import YeasuWeather from './yeasu';

export default function App() {
  return (
         <Router>
            <Scene key = "root">
              <Scene
                key = "main"
                component = {MainPageScreen}
                title ="main"
                initial
              />
              <Scene
                key = "dj"
                component = {DaejeonWeather}
                title = "대전의 날씨"
              />
              <Scene
              key = "se"
              component = {SeoulWeather}
              title ="서울의 날씨"
              />
              <Scene
              key = "dg"
              component = {DaeguWeather}
              title ="대구의 날씨"
              />
              <Scene
              key = "ys"
              component = {YeasuWeather}
              title ="여수의 날씨"
              />
            </Scene>
         </Router>
  );
}

const styles = StyleSheet.create({
      container : {
        flex : 1,
        backgroundColor : '#fff'
      },
      content : {
        padding : 10,
      },
      list : {
        marginTop : 20,
      },
      title : {
        height : 80,
        paddingTop : 30,
        backgroundColor : 'skyblue'
      },
      titleText : {
        textAlign : 'center',
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold'
      },
      listText : {
        paddingLeft : 16,
        paddingTop: 16,
        paddingBottom : 16,
        marginTop : 16,
        borderColor : '#bbb',
        borderWidth : 1,
        borderStyle : 'dashed',
        borderRadius : 10,
      },
      inputText : {
        marginTop : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd'
      }
});
