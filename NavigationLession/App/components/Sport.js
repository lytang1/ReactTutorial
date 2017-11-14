import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

class Sport extends Component <{}> {
	static navigationOptions = {
    title: 'Sport',
  };
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
				<Text style={{textAlign:'center', fontSize:30, fontWeight:'bold', color:'#33A2B6'}}>Sport</Text>
				<TouchableOpacity onPress={()=>navigate('Technology')} style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
					<Text style={{textAlign:'center', color:'#fff', width:200,height:40,fontSize:20, backgroundColor:'#33A2B6', paddingTop:5}}>Go to Technology</Text>
				</TouchableOpacity>
			</View>
			)
	}
}

export default Sport;