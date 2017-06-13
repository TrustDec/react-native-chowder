import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
	StyleSheet,
	View,
	LayoutAnimation,
	InteractionManager
} = ReactNative;
export default class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.num = 0.9;
		this.state = {
			progress: 0,
			isDis:0.9,
			startDelay: 300,
		}
	}
	componentDidMount() {
		this.timeout && clearTimeout(this.timeout);
		LayoutAnimation.spring();
		this.timeout=setTimeout(() => {
        this.setState({ progress: this.props.progress })
      }, this.state.startDelay)
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ progress: nextProps.progress })
	}
	componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
    }
	componentWillUpdate() {
		LayoutAnimation.spring()
	}
	render(){
		return(
			<View style={this.props.style}>
	            <View style={[styles.flexBox, styles.progressBar, this.props.style]}>
	                <View style={[{ flex: this.state.progress,backgroundColor: this.props.filledColor || 'green',opacity:this.num }]} />
	                <View style={[{ flex: 100 - this.state.progress },
	                    { backgroundColor: this.props.unfilledColor || '#FFF' }]} />
	            </View>
	        </View>
		);
	}
}
const styles = StyleSheet.create({
    flexBox: {
        flexDirection: 'row',
    },
    progressBar: {
        overflow: 'hidden',
        height: 3,
        borderWidth: 1,
        borderColor: '#D50000',
        borderRadius: 10,
    }
});