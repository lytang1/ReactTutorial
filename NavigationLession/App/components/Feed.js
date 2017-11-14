// import 'React', { Component } from 'react';
import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native'

class Feed extends Component <{}> {
	static navigationOptions = {
    title: 'Feed',
  };
	render (){
		const { navigate } = this.props.navigation;
		return (
			<View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
				<Text style={{textAlign:'center', fontWeight:'bold', fontSize:30, color:'#33A2B6'}}>Feed Page</Text>
				<TouchableOpacity onPress={() => navigate('Sport')} style={{justifyContent:'center', alignItems:'center', marginTop:10}}> 
					<Text style={{textAlign:'center', color:'#fff', width:150,height:40,fontSize:20, backgroundColor:'#33A2B6', paddingTop:5}}>Go to Sport</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default Feed;