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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './page/home';
import Mess from './page/mess';
import User from './page/user';
export default Main = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation})=>TabOptions('Home','home',navigation)
  },
  Mess: {
    screen: Mess,
    navigationOptions: ({navigation})=>TabOptions('Mess','message-text',navigation)
  },
  User: {
    screen: User,
    navigationOptions: ({navigation})=>TabOptions('User','account-settings-variant',navigation)
  }
}, {
  tabBarOptions: {
    activeTintColor: '#188eee',
    lazy:true,
    style: {
            height:49,
            backgroundColor:'white'
        },
  },
  tabBarPosition:'bottom'
});
const TabOptions = (tabBarTitle,normalImage,navigation) => {
  let {state,goBack} = navigation;
  const tabBarLabel = tabBarTitle;
  const tabBarIcon = ({tintColor})=>{
    return(
      <Icon name={normalImage} size={30} color={tintColor} />
    )
  };
  const tabBarVisible = true;
  return {tabBarLabel,tabBarIcon,tabBarVisible}
}



