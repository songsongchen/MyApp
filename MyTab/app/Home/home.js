/**
 * Created by chenjs on 2018/7/25.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class home extends Component {

    static navigationOptions = {
        headerTitle: '首页',
        tabBarLabel: '首页',
        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}/>
    };

    nextVC(){
        let {navigate} = this.props.navigation;
        navigate('DetailVC', { title: '详情',des:'我是返回点击我' });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                                  onPress={() =>this.nextVC()} >
                    <Text>点击进详情页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});