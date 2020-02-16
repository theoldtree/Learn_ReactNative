import React from 'react';
import {  StyleSheet, View, Text } from 'react-native';
import {Actions, Router, Scene} from 'react-native-router-flux';

export default function WelcomeScreen(){
    return(
        <View style = {styles.container}>
          <View style = {styles.loginContainer}>
            <Text style = {styles.title}> PETLAB </Text>
          </View>
          <View style = {style.accountContainer}>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    loginContainer : {
        flex : 2,
    },
    accountContainer : {
        flex : 3,
    }
})