##React Native small practice one
##Introduction to the practice
In this practice, we will get to know about the navigation which allow us to move from one screen to another.
To set the navigation in our project, we need help from other library. There are libraries for navigation in react native
which include react native router flux, react native router, react navigation, react native navigation and so on.
In this practice, we will use react navigation since it is easy to use do not need much configure and can integrated with redux.
##Practice
To do start our practice, we need to create a new react native project
###Create new react native project
By here We assume that you have setted up react native in your computer. In case you have not installed 
[this is the link](https://facebook.github.io/react-native/docs/getting-started.html)

There are two ways to create new project 
###For Version Lower than 0.50

````
  react-native init ProjectName
````  
###For Version Upper than 0.50
````
  react-native create ProjectName
````

after installed the project please have a run whether there is any errors. (Optional)

### Install react navigation

````
 npm install react-navigation --save
````
or 
````
 yarn add react-navigation
````

###Description
* In this practice, we will introduce you to use Stack Navigators of react navigation.

#### step by step guideline

First go to your project
````
  cd ROUTE_TO_YOUR_PROJECT
````
create a "App" folder in the root of the project you can create by using Interface or command below

````
  mkdir App
````
create a "components" folder in your App folder

````
  mkdir components
````
In components project we create a file name 'Home.js' and fill it with below code

````
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

class Home extends Component <{}> {
  render (){
    return (
      <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:30, color:'#33A2B6'}}>Home Page</Text>
        <TouchableOpacity onPress={() => {}} style={{justifyContent:'center', alignItems:'center', marginTop:10}}> 
          <Text style={{textAlign:'center', color:'#fff', width:150,height:40,fontSize:20, backgroundColor:'#33A2B6',  paddingTop:5}}> 
            Go to Feed
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomePage;
````
By now we have a Component Home which will render the View which include a Text 'Home Page' and a button 'Go to Feed'
now go to your 'App.js' file in root directory
add this line of code to 'App.js'

````
...
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './components/Home'; /* <--- add this line */ 

````
and change the return of 'render()' as below
````
  render() {
    return (
      <Home />
      )
  }
````
now run 
````
  react-native run-ios
````
You will see your screen change and got the display as below

<!-- Add image of the home screen -->
Right now we will begin the journey with React Navigation
Firstly What is stacknavigator?
#### What is Stack Navigator?
Stack Navigators provides a way for your app to transition between screens where each new screen is placed on top of a stack.
<!-- should include stack image here -->

#### Route Configuration
The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route.
Structure for :

````
StackNavigator({
  key: {
    screen: component,
  },
  key: {
    screen: component,
  },
  ...
  key:{
    screen: component,
  }
  
}
````

'key' is a String that represent the route you would like to navigate to which is similar to path in Web application
'component' is a React component which is the main content of the screen
Here is the example:

````
StackNavigator({
  Home: {
    screen: Home,
  },
  Feed: {
    screen: Feed,
  },
  Sport:{
    screen: Sport,
  },
  Technology: {
    screen: Technology
  }
}
````

Generally, on Web application we can set the initial page for our app and we can do that in our react native app by adding the 'initialRouteName' props in our configuration

initialRouteName - Sets the default screen of the stack. Must match one of the keys in route configs.

Structure:

````
  initialRouteName: key
````

Example:

````
StackNavigator(
  {
    Home: {
      screen: HomePage,
    },
    Feed: {
      screen: Feed,
    },
    Sport:{
      screen: Sport,
    },
    Technology: {
      screen: Technology
    }
  },
  {
    initialRouteName: 'Home' //<-- this line is used to set the initial page of the app 
   })
````

#### Useful properties for our StackNavigatorConfig
* initialRouteName - Sets the default screen of the stack. Must match one of the keys in route configs.
* initialRouteParams - The params for the initial route
* [navigationOptions](https://reactnavigation.org/docs/navigators/stack#Screen-Navigation-Options) - Default navigation options to use for screens
[For more](https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig) 


#### Practice StackNavigators
now head back to our project, we create a folder 'navigation' in our 'App' folder and create a 'route.js'
In 'route.js' we config the StackNavigators that we have learnt above.

Add the following lines to our 'route.js'

````
import React from 'react';
import { StackNavigator, navigationOptions } from 'react-navigation';
import HomePage from '../components/Home';

const MyNavigations = StackNavigator({
  Home: {
    screen: HomePage,
  }
},{
   initialRouteName: 'Home',
   navigationOptions:
    {
      headerStyle: { // <-- set style for header of the navigator
        backgroundColor: '#33A2B6',
        justifyContent: 'center',
      },
      headerTitleStyle: { // <-- set style for title of navigator
        color: '#fff',
        alignSelf: 'center',
      },
      headerBackTitleStyle: { // <-- set style for back title of navigator
        color: '#fff',
      },
      headerTintColor: '#fff', // <-- set background color for header of the navigator
    }
});

export default MyNavigations;

````

now go to 'App.js' and adjust code to be same as below

````

import Route from './App/navigation/route';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import navigation from 'react-navigation'

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    return (
      <Route {...this.props}/>
      )
  }
}

````

As you can see we have changed from calling the component directly

````
  render() {
    return (
      <Home {...this.props}/>
      )
  }

````

To call the route to have the React navigation handle the screen dynamically for our application

````
render() {
    return (
      <Route {...this.props}/>
      )
  }

````

So now when we start to run this application, it will direct to route.js and look for the key in initialRouteName and render the view of that key to our application

<!-- should design an image for that  -->

Now adjust our Home.js and create more screen for our application

#### Home.js

````

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { navigationOptions, navigate } from 'react-navigation'; //<-- Add this line

class Home extends Component <{}> {
  // add this block of code to set the title for our navigator
  static navigationOptions = {
    title: 'Home',
  };
  // end of block
  render (){
    const { navigate } = this.props.navigation;
    return (
      <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:30, color:'#33A2B6'}}>Home Page</Text>
        <TouchableOpacity onPress={() => navigate('Feed')} style={{justifyContent:'center', alignItems:'center', marginTop:10}}> //<-- change the onPress action 
          ...
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home;

````
In the code above, we use navigate function to redirect our application to a specific screen by 'key' name that have been set on 'route.js'

Instead of using navigate, we can use NavigationActions in which we can merge/pass params to destination route and customize the navigate action. (we will talk about this in other practice)
[More for NavigationActions](https://reactnavigation.org/docs/navigators/navigation-actions) 


Now get back to our project, we create a few more screens ('Feed.js', 'Sport.js', 'Technology.js') by copy the code in 'Home.js' and adjust the class name and 'title' in navigationOptions and 'OnPress' action to navigate to the specific page you want

````
  
  class CLASS_NAME extends Component <{}> { //<-- Adjust CLASS_NAME
  
  static navigationOptions = {
    title: TITLE_NAME, //<-- title name
  };

  render (){
    ...
    return (
        ...
        <TouchableOpacity onPress={() => navigate(KEY_IN_ROUTE)}  //<-- change the onPress action 
        style={{justifyContent:'center', alignItems:'center', marginTop:10}}>  
          ...
        </TouchableOpacity>
      </View>
    )
  }
}

export default CLASS_NAME; // <--- CLASS_NAME


````

Now edit your 'route.js' to look as below

````

import React from 'react';
import { StackNavigator, navigationOptions } from 'react-navigation';

import Sport from '../components/Sport';
import Technology from '../components/Technology'
import Feed from '../components/Feed';
import HomePage from '../components/Home';

const MyNavigations = StackNavigator({
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

export default MyNavigations

````

now close your server and run your application again

For iOS

````

react-native run-ios

````

For Android

````
  
  react-native run-android

````
