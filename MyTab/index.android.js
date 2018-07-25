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

const MainScreenNavigator = TabNavigator({
    HomeVC:{screen:HomeVC},
    FindVC:{screen:FindVC},
    MyVC:{screen:MyVC},
});

const MyTab = StackNavigator({
    Main:{screen:MainScreenNavigator},
    DetailVC:{screen:DetailVC},
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF',
    }
});

AppRegistry.registerComponent('MyTab', () => MyTab);
