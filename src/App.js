/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';
export  class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{uri:'http://www.marksmile.com.cn/img/share/ymfw.jpg'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title=""
      />
    );
  }
}
export  class My extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{uri:'http://www.marksmile.com.cn/img/share/ymfw.jpg'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title=""
      />
    );
  }
}
export default Main = TabNavigator({
  Home: {
    screen: Home,
  },
  My: {
    screen: My,
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  tabBarPosition:'bottom'
});
const styles = StyleSheet.create({
  icon: {
      width: 26,
      height: 26,
    },
});


