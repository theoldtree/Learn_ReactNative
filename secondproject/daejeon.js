//import React from 'react';
//import {  StyleSheet, View, Text,ScrollView, SafeAreaView  } from 'react-native';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { AntDesign } from '@expo/vector-icons';
//import { Actions } from 'react-native-router-flux';
//
//export default function DaejeonWeather() {
//
//  return (
//            <View style = {styles.scroll}>
//              <View style = {styles.header}>
//                  <Text style = {styles.headerText1}> 대전< /Text>
//                  <Text style = {styles.headerText2}> 2월 3일 월요일 오후 11시 39분 </Text>
//                  <View style = {styles.weather}>
//                    <AntDesign name = 'leftcircleo' size = {20} />
//                    <MaterialCommunityIcons name = 'weather-night' size = {40} />
//                    <Text style = {styles.weatherText}> 3도 </Text>
//                    <AntDesign name = 'rightcircleo' size = {20} />
//                  </View>
//                  <Text style = {styles.headerText3}> 차가운 공기가 머무르는 밤\n실내를 따뜻하게 해주세요 </Text>
//
//              </View>
//
//              <Text style = {styles.contentBoxTitle}> 시간별 </Text>
//              <View style = {styles.content}>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText}>-3도</Text>
//                <MaterialCommunityIcons name = 'weather-night' size = {20} color = 'gold'/>
//                <Text style = {styles.contentText}>3시</Text>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText}>-4도</Text>
//                <MaterialCommunityIcons name = 'weather-night' size = {20} color ='gold'/>
//                <Text style = {styles.contentText}>6시</Text>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText}>-5도</Text>
//                <MaterialCommunityIcons name = 'weather-sunny' size = {20} color ='gold'/>
//                <Text style = {styles.contentText}>9시</Text>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText}>3도</Text>
//                <MaterialCommunityIcons name = 'weather-sunny' size = {20} color ='gold'/>
//                <Text style = {styles.contentText}>12시</Text>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText}>6도</Text>
//                <MaterialCommunityIcons name = 'weather-sunny' size = {20} color ='gold'/>
//                <Text style = {styles.contentText}>15시</Text>
//                </View>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText}>-1도</Text>
//                <MaterialCommunityIcons name = 'weather-sunny' size = {20} color ='gold'/>
//                <Text style = {styles.contentText}>18시</Text>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText}>-1도</Text>
//                <MaterialCommunityIcons name = 'weather-night' size = {20} color ='gold'/>
//                <Text style = {styles.contentText}>21시</Text>
//                </View>
//              </View>
//
//              <Text style = {styles.contentBoxTitle}> 요일별 </Text>
//              <View style = {styles.content}>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText1}>-6도</Text>
//                <Text style = {styles.contentText2}>6도</Text>
//                <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = '#bbb'/>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText1}>12도</Text>
//                <Text style = {styles.contentText2}>0도</Text>
//                <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = '#bbb'/>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText1}>14도</Text>
//                <Text style = {styles.contentText2}>-2도</Text>
//                <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = '#bbb'/>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText1}>10도</Text>
//                <Text style = {styles.contentText2}>5도</Text>
//                <MaterialCommunityIcons name = 'weather-rainy' size = {20} color = 'white'/>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText1}>12도</Text>
//                <Text style = {styles.contentText2}>5도</Text>
//                <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = '#bbb'/>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText1}>-6도</Text>
//                <Text style = {styles.contentText2}>6도</Text>
//                <MaterialCommunityIcons name = 'weather-sunny' size = {20} color = 'gold'/>
//                </View>
//                <View style = {styles.contentBoxBox}>
//                <Text style = {styles.contentText1}>-6도</Text>
//                <Text style = {styles.contentText2}>6도</Text>
//                <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = 'gold'/>
//                </View>
//              </View>
//
//              <View style = {styles.table}>
//                <View style = {styles.tableBox}>
//                  <Text style = {styles.tableText1}> 미세먼지 </Text>
//                  <Text style = {styles.tableText1}> 31㎍/㎥ </Text>
//                </View>
//                <View style = {styles.tableBox}>
//                  <Text style = {styles.tableText1}> 초미세먼지 </Text>
//                  <Text style = {styles.tableText1}> 41㎍/㎥ </Text>
//                </View>
//              </View>
//              <View style = {styles.table}>
//                <View style = {styles.tableBox}>
//                  <Text style = {styles.tableText1}> 통합대기환경지수 </Text>
//                  <Text style = {styles.tableText1}> 72(보통) </Text>
//                </View>
//                <View style = {styles.tableBox}>
//                  <Text style = {styles.tableText1}> 일출 </Text>
//                  <Text style = {styles.tableText1}> 오전 7 : 26 </Text>
//                </View>
//              </View>
//              <View style = {styles.table}>
//                <View style = {styles.tableBox}>
//                  <Text style = {styles.tableText1}> 체감온도 </Text>
//                  <Text style = {styles.tableText1}> -4도 </Text>
//                </View>
//                <View style = {styles.tableBox}>
//                  <Text style = {styles.tableText1}> 감기지수 </Text>
//                  <Text style = {styles.tableText1}> 3 </Text>
//                </View>
//              </View>
//            </View>
//         </View>
//  );
//}
//
//const styles = StyleSheet.create({
//      scroll : {
//        flex : 1,
//        backgroundColor : 'lightSteelBlue'
//      },
//      header :{
//        alignItems : 'center',
//        justifyContent : 'center'
//      },
//      weather : {
//        padding : 10,
//        flexDirection : 'row',
//        alignItems : 'center',
//        justifyContent : 'center'
//      },
//      weatherText : {
//        fontSize : 60,
//        padding : 10
//      },
//      headerText1 : {
//        fontSize : 30,
//        color : 'white',
//        padding : 5
//      },
//      headerText2 : {
//        fontSize : 20,
//        color : 'white',
//        padding : 5
//      },
//      headerText3 : {
//        fontSize : 30,
//        color : 'white',
//        fontWeight : 'bold',
//        padding : 5
//      },
//      content : {
//        paddingLeft : 10,
//        paddingRight : 19,
//        justifyContent : 'center',
//        alignItems : 'center',
//        flexDirection : 'row'
//      },
//      contentText : {
//        color : 'white',
//        fontSize : 15
//      },
//      contentText1 : {
//        color : 'red',
//        fontSize : 15
//      },
//      contentText2 : {
//        color : 'blue',
//        fontSize : 15
//      },
//      contentBox : {
//        flex : 1,
//        justifyContent : 'center',
//        alignItems : 'center',
//        marginTop : 40,
//        marginBottom : 40,
//        borderColor : 'white'
//        borderRadius : 10,
//        borderStyle : 'dashed'
//      },
//      contentBoxTitle ;{
//        fontSize : 10,
//
//});

import React from 'react';
import {  StyleSheet, View, Text,ScrollView, SafeAreaView  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

export default function DaejeonWeather() {

  return (
  <SafeAreaView style = {styles.scroll}>
    <ScrollView style = {styles.scroll}>
                <View style = {styles.header}>
                    <Text style = {styles.headerText1}> 대전< /Text>
                    <Text style = {styles.headerText2}> 2월 3일 월요일 오후 11시 39분 </Text>
                    <View style = {styles.weather}>
                      <AntDesign name = 'leftcircleo' size = {20} style = {{paddingRight : 20}} color = 'white'
                      onPress = {() => Actions.ys()}/>
                      <MaterialCommunityIcons name = 'weather-night' size = {40} color = 'gold'/>
                      <Text style = {styles.weatherText}> 3도 </Text>
                      <AntDesign name = 'rightcircleo' size = {20} color = 'white'
                      onPress = {() => Actions.se()}/>
                    </View>
                    <Text style = {styles.headerText3}> 차가운 공기가 머무르는 밤 </Text>
                    <Text style = {styles.headerText3}>실내를 따뜻하게 해주세요 </Text>
                </View>

              <Text style = {styles.contentBoxTitle}> **시간별**</Text>
              <View style = {styles.content}>
                <View style = {styles.contentBox}>
                <Text style = {styles.contentText}>-3도</Text>
                <MaterialCommunityIcons name = 'weather-night' size = {20} color = 'gold'/>
                <Text style = {styles.contentText}>3시</Text>
                </View>
                <View style = {styles.contentBox}>
                <Text style = {styles.contentText}>-4도</Text>
                <MaterialCommunityIcons name = 'weather-night' size = {20} color ='gold'/>
                <Text style = {styles.contentText}>6시</Text>
                </View>
                <View style = {styles.contentBox}>
                <Text style = {styles.contentText}>-5도</Text>
                <MaterialCommunityIcons name = 'weather-sunny' size = {20} color ='gold'/>
                <Text style = {styles.contentText}>9시</Text>
                </View>
                <View style = {styles.contentBox}>
                <Text style = {styles.contentText}>3도</Text>
                <MaterialCommunityIcons name = 'weather-sunny' size = {20} color ='gold'/>
                <Text style = {styles.contentText}>12시</Text>
                </View>
                <View style = {styles.contentBox}>
                <Text style = {styles.contentText}>6도</Text>
                <MaterialCommunityIcons name = 'weather-sunny' size = {20} color ='gold'/>
                <Text style = {styles.contentText}>15시</Text>
                </View>
                <View style = {styles.contentBox}>
                <Text style = {styles.contentText}>-1도</Text>
                <MaterialCommunityIcons name = 'weather-sunny' size = {20} color ='gold'/>
                <Text style = {styles.contentText}>18시</Text>
                </View>
                <View style = {styles.contentBox}>
                <Text style = {styles.contentText}>-1도</Text>
                <MaterialCommunityIcons name = 'weather-night' size = {20} color ='gold'/>
                <Text style = {styles.contentText}>21시</Text>
                </View>
              </View>

                            <Text style = {styles.contentBoxTitle}> **요일별** </Text>
                            <View style = {styles.content}>
                              <View style = {styles.contentBox}>
                              <Text style = {styles.contentText1}>-6도</Text>
                              <Text style = {styles.contentText2}>6도</Text>
                              <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = '#bbb'/>
                              </View>
                              <View style = {styles.contentBox}>
                              <Text style = {styles.contentText1}>12도</Text>
                              <Text style = {styles.contentText2}>0도</Text>
                              <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = '#bbb'/>
                              </View>
                              <View style = {styles.contentBox}>
                              <Text style = {styles.contentText1}>14도</Text>
                              <Text style = {styles.contentText2}>-2도</Text>
                              <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = '#bbb'/>
                              </View>
                              <View style = {styles.contentBox}>
                              <Text style = {styles.contentText1}>10도</Text>
                              <Text style = {styles.contentText2}>5도</Text>
                              <MaterialCommunityIcons name = 'weather-rainy' size = {20} color = 'white'/>
                              </View>
                              <View style = {styles.contentBox}>
                              <Text style = {styles.contentText1}>12도</Text>
                              <Text style = {styles.contentText2}>5도</Text>
                              <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = '#bbb'/>
                              </View>
                              <View style = {styles.contentBox}>
                              <Text style = {styles.contentText1}>-6도</Text>
                              <Text style = {styles.contentText2}>6도</Text>
                              <MaterialCommunityIcons name = 'weather-sunny' size = {20} color = 'gold'/>
                              </View>
                              <View style = {styles.contentBox}>
                              <Text style = {styles.contentText1}>-6도</Text>
                              <Text style = {styles.contentText2}>6도</Text>
                              <MaterialCommunityIcons name = 'weather-cloudy' size = {20} color = 'gold'/>
                              </View>
                            </View>

              <Text style = {styles.contentBoxTitle}> **생활 지수** </Text>
              <View style = {styles.table}>
                <View style = {styles.tableBox}>
                  <Text style = {styles.tableText1}> 미세먼지 </Text>
                  <Text style = {styles.tableText1}> 31㎍/㎥ </Text>
                </View>
                <View style = {styles.tableBox}>
                  <Text style = {styles.tableText1}> 초미세먼지 </Text>
                  <Text style = {styles.tableText1}> 41㎍/㎥ </Text>
                </View>
              </View>
              <View style = {styles.table}>
                <View style = {styles.tableBox}>
                  <Text style = {styles.tableText1}> 통합대기환경지수 </Text>
                  <Text style = {styles.tableText1}> 72(보통) </Text>
                </View>
                <View style = {styles.tableBox}>
                  <Text style = {styles.tableText1}> 일출 </Text>
                  <Text style = {styles.tableText1}> 오전 7 : 26 </Text>
                </View>
              </View>
              <View style = {styles.table}>
                <View style = {styles.tableBox}>
                  <Text style = {styles.tableText1}> 체감온도 </Text>
                  <Text style = {styles.tableText1}> -4도 </Text>
                </View>
                <View style = {styles.tableBox}>
                  <Text style = {styles.tableText1}> 감기지수 </Text>
                  <Text style = {styles.tableText1}> 3 </Text>
                </View>
              </View>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
      container : {
        flex : 1
      },
      scroll : {
        paddingTop : 30,
        flex : 1,
        backgroundColor : '#000080'
      },
      header :{
        alignItems : 'center',
        justifyContent : 'center'
      },
      weather : {
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
      },
      weatherText : {
        fontSize : 60,
        padding : 10,
        color : 'white'
      },
      headerText1 : {
        fontSize : 30,
        color : 'white',
        padding : 5
      },
      headerText2 : {
        fontSize : 20,
        color : 'white',
        padding : 5
      },
      headerText3 : {
        fontSize : 30,
        color : 'white',
        fontWeight : 'bold',
        padding : 5
      },
      content : {
        paddingLeft : 10,
        paddingRight : 19,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
      },
      contentText : {
        color : 'white',
        fontSize : 15,
        marginVertical : 30
      },
      contentText1 : {
        color : 'red',
        fontSize : 15,
        marginVertical : 30
      },
      contentText2 : {
        color : 'skyblue',
        fontSize : 15,
        marginVertical : 30,
      },
      contentBox : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 40,
        borderColor : 'white',
        borderStyle : 'dashed',
        borderWidth : 1
      },
      contentBoxTitle : {
        fontSize : 15,
        padding : 20,
        marginTop : 50,
        fontWeight : 'bold',
        paddingLeft : 10,
        color : 'white',
        borderTopColor : 'white',
        borderWidth : 1,
        borderStyle : 'dotted'
      },
      table : {flexDirection : 'row'},
      tableBox : {
      flex : 1,
      marginVertical : 30,
      alignItems : 'center',
      justifyContent : 'center',
      borderWidth : 1,
      borderStyle : 'dashed',
      borderBottomColor : 'snow'
      },
      tableText1 : {
      color : 'white',
      fontSize : 25,
      fontWeight : '200',
      paddingBottom : 30
      }
});