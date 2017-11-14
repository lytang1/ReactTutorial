import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native'
import { navigationOptions, navigate } from 'react-navigation';

class HomePage extends Component <{}> {
	static navigationOptions = {
    title: 'Home',
  };
	render (){
		const { navigate } = this.props.navigation;
		return (
			<View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
				<Text style={{textAlign:'center', fontWeight:'bold', fontSize:30, color:'#33A2B6'}}>Home Page</Text>
				<TouchableOpacity onPress={() => navigate('Feed')} style={{justifyContent:'center', alignItems:'center', marginTop:10}}> 
					<Text style={{textAlign:'center', color:'#fff', width:150,height:40,fontSize:20, backgroundColor:'#33A2B6',  paddingTop:5}}>Go to Feed</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default HomePage;