import React, {useState} from 'react';
import {  StyleSheet, View, Text,FlatList,TouchableOpacity,TextInput,Button,
          TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux';


export default function MainPageScreen() {

  const [area, setArea] = useState([
      {text : '대전', key : 1},
      {text : '서울', key : 2},
      {text : '대구', key : 3},
      {text : '여수', key : 4},
    ]);
    const [input , setInput] = useState('');

    const submitHandler = (input) => {
      setArea((prevArea) => {
        return ([
          {text : input, key : Math.random().toString()},
          ...prevArea
        ]);
      })
    }

    const changeHandler = (val) => {
      setInput(val);
    }

  return (
         <View style = {styles.container}>
            {/* title */}
            <View style = {styles.title}>
              <Text style = {styles.titleText}> '당신이 알고 싶은 지역날씨는?' </Text>
            </View>
            <View style = {styles.content}>
               {/*content*/}
               <View>
                  <TextInput
                    style = {styles.inputText}
                    placeholder = '지역을 추가하세요!'
                    onChangeText = {changeHandler}
                  />
                  <Button
                    onPress = {() => submitHandler(input)}
                    title = '추가'
                    color = 'gold'
                  />
               </View>
               <View style = {styles.list}>
                 <Text
                   style = {styles.listText}
                   onPress = {() => Actions.dj()}>
                 <MaterialCommunityIcons name = 'bullhorn' size = {18} color = '#333'/> 대전
                 </Text>
                 <Text
                   style = {styles.listText}
                   onPress = {() => Actions.se()}>
                 <MaterialCommunityIcons name = 'bullhorn' size = {18} color = '#333'/> 서울
                 </Text>
                 <Text
                   style = {styles.listText}
                   onPress = {() => Actions.dg()}>
                 <MaterialCommunityIcons name = 'bullhorn' size = {18} color = '#333'/> 대구
                 </Text>
                 <Text
                   style = {styles.listText}
                   onPress = {() => Actions.ys()}>
                 <MaterialCommunityIcons name = 'bullhorn' size = {18} color = '#333'/> 여수
                 </Text>

               </View >
            </View>
         </View>
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
