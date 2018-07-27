/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
    StyleSheet
} from 'react-native';

import {
     StackNavigator,
     TabNavigator
} from 'react-navigation'

import HomeVC from './app/Home/home'
import FindVC from './app/Find/findVC'
import MyVC   from './app/My/myVC'
import DetailVC from './app/other/DetailVC'
import PersonVC from './app/other/personVC'

const MainScreenNavigator = TabNavigator({
    HomeVC:{
        screen:HomeVC,
        navigationOptions:({navigation,screenProps}) => ({
        headerTitle:'jack',
        headerTitleStyle:{
           fontSize:30,
           color:'red'
            },
        tabBarLabel:'识兔',
        })
    },
    FindVC:{screen:FindVC},
    MyVC:{screen:MyVC},
});

const MyTab = StackNavigator({
    Main:{screen:MainScreenNavigator},
    DetailVC:{screen:DetailVC},
    PersonVC:{screen:PersonVC,navigationOptions: {
        title: '绑卡收款',
    }},
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF',
    }
});

AppRegistry.registerComponent('MyTab', () => MyTab);
