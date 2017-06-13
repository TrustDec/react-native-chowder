import React, { Component } from 'react';
import ReactNative from 'react-native';
import { NavigationActions } from 'react-navigation';
import ProgressBar from './ProgressBar';
const {
	StyleSheet,
	View,
	WebView,
	Text
} = ReactNative;
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: 'SearchHistory', params: {
                isVisible: false,
            },
        })
    ]
});
export default class OpenWebView extends Component {
	static navigationOptions = {
		title: 'WebView',
		headerTitleStyle:{color:'#f4f6f9'},
		titleStyle:{textAlign:'center'},
		headerStyle: {backgroundColor:'#003366'},
	}
	constructor(props) {
		super(props);
		this.state={
			progress: 0,
			active:true
		}
	}
	componentWillUnmount() {
        this.setIntervar && clearInterval(this.setIntervar);
    }
	_onLoadStart=()=>{
		//this.setState();
		this.setIntervar = setInterval(()=>{
			if (this.state.progress > 80) {
				return;
			}

			this.setState({
				progress:this.state.progress + 0.1,
			});
		});
	}
	_onLoadEnd=()=>{
		this.setState({
            progress:100,
            active:false
        });
		this.setIntervar && clearInterval(this.setIntervar);
	}
	render(){
		const { params } = this.props.navigation.state;

		return(
			<View style={styles.container}>
				<ProgressBar 
					progress={this.state.progress} 
					filledColor='#003366'
                    unfilledColor='#F5FCFF' 
                    active={this.state.active}
                    style={{
                        height:3,
                        width:WIDTH,
                        borderWidth:0,
                        borderRadius:0,
                        position:'absolute',
                        zIndex:10
                }}/>
				<WebView
					style={{flex:1,width:WIDTH}}
					source={{uri:params.uri}}
					domStorageEnabled={true}
					startInLoadingState={true}
					onLoadStart={this._onLoadStart.bind(this)}
					onLoadEnd={this._onLoadEnd.bind(this)}
					renderError={()=><View style={styles.container}>
						<Text>失败</Text>
					</View>}
				/>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width:WIDTH
	},
});
