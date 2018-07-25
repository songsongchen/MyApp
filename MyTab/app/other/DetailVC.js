/**
 * Created by chenjs on 2018/7/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default class DetailVC extends Component {
    //接收上一个页面传过来的title显示出来
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    // 点击返回上一页方法
    backVC=()=>{
        //返回首页方法
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{
                    height:40,
                    backgroundColor:'green',
                    justifyContent: 'center'}}
                                  onPress={() =>{this.backVC()}}>
                    <Text>{this.props.navigation.state.params.des}</Text>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});