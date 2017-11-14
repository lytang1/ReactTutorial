import React from 'react';
import { TabNavigator, StackNavigator, navigationOptions } from 'react-navigation';

import Sport from '../components/Sport';
import Technology from '../components/Technology'
import Feed from '../components/Feed';
import HomePage from '../components/HomePage';

const Tabs = StackNavigator({
  Feed: {
    screen: Feed,
  },
  HomePage: {
    screen: HomePage,
  },
  Sport:{
  	screen: Sport,
  },
  Technology: {
  	screen: Technology
  }
},{
   initialRouteName: 'HomePage',
  navigationOptions:
    {
      headerStyle: {
        backgroundColor: '#33A2B6',
        justifyContent: 'center',
      },
      headerTitleStyle: {
        color: '#fff',
        alignSelf: 'center',
      },
      headerBackTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
    }
});

export default Tabs