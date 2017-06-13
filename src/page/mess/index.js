import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
	StyleSheet,
	Text,
	View,
	Button,
	Image
} = ReactNative
export default class Mess extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text> Mess. </Text>
			</View>
		);
	}
} 
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});