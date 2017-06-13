import React, { Component } from 'react';
import ReactNative from 'react-native';
import { StackNavigator } from 'react-navigation';
import Request from '../../util';
import Util from '../../util/util';
import OpenWebView from '../../component/OpenWebView';
const {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	FlatList,
	TouchableOpacity,
	RefreshControl
} = ReactNative;

 class HomeView extends Component {
	static navigationOptions = {
		title: 'Home',
		headerTitleStyle:{color:'#f4f6f9'},
		headerStyle: {backgroundColor:'#003366'},
	}
	state = {
		dataSource:[],
		refreshing:false
	}
	refresh= false;
	componentDidMount(){
		let url = "http://wangyi.butterfly.mopaasapp.com/news/api?type=war&page=1&limit=2000";
		//let url = "http://wangyi.butterfly.mopaasapp.com/news/api";
		//this.setState({refreshing:true});
		this.refresh = true
		Request.get(url,data=>{
			if (data) {
				let results = data.list;
				this.refresh = false
				this.setState({
					dataSource : this.state.dataSource.concat(results),
				});
			}
		},error=>{
			console.log(error);
		});
	}
	_renderView=(item)=>{
		let { navigate } = this.props.navigation;
		navigate('Web',{uri:item.docurl,isVisible:true})
	}
	_renderitem=({item,index})=>{
		return <TouchableOpacity 
				style={styles.viewlistbox} 
				activeOpacity={0.8}
				onPress={this._renderView.bind(this,item)}
			>
			<View style={styles.content}>
				<Text style={styles.title} numberOfLines={1}>{item.title}</Text>
				<Text style={styles.time}>{item.time}</Text>
			</View>
			<Image source={{uri:item.imgurl}} style={styles.listimg}/>
		</TouchableOpacity>
	}
	_keyExtractor=(key)=>{
		return key.id;
	}
	_onRefresh(){
		this.setState({
			refreshing:true
		});
		setTimeout(()=>this.setState({refreshing:false}),5000);
	}
	render(){
		return(
			<View style={styles.container}>
				<FlatList
					data={this.state.dataSource}
					keyExtractor={this._keyExtractor}
					//refreshing={this.refreshing}
					renderItem={this._renderitem}
					initialNumToRender={10}
					refreshing={false}
					onRefresh={()=>{
						<RefreshControl
				            refreshing={this.state.refreshing}
				            onRefresh={this._onRefresh}
				            tintColor="#ff0000"
				            title="Loading..."
				            titleColor="#00ff00"
				            colors={['#ff0000', '#00ff00', '#0000ff']}
				            progressBackgroundColor="#ffff00"
				          />
					}}
				/>
			</View>
		);
	}
} 
export default Home = StackNavigator({
  Home: { 
  	screen: HomeView
  },
  Web: {
  	screen: OpenWebView
  }
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	viewlistbox:{
		flexDirection:'row',
		width:WIDTH,
		paddingHorizontal:13,
		paddingVertical:5,
		backgroundColor:'#fff',
		borderBottomWidth:StyleSheet.hairlineWidth,
		borderColor:'#ddd'
	},
	content:{
		flex:1,
		justifyContent:'space-around',
		paddingRight:13,
	},
	listimg:{
		width:50,
		height:50
	},
	title:{
		color:'#1f1f1f',
		fontSize:15
	},
	time:{
		color:'#bbb',
		fontSize: 13
	}
});