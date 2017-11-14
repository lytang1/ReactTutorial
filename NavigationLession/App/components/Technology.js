import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import { navigationOptions, NavigationActions } from 'react-navigation';

class Technology extends Component <{}> {
	static navigationOptions = {
    title: 'Technology',
  };
  resetToHomePage(){
  	NavigationActions.reset('HomePage')
	  
  }
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
				<Text style={{textAlign:'center', fontSize:30, color:'#33A2B6'}}>Technology</Text>
			</View>
			)
	}
}

export default Technology;