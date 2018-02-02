import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation'

import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

const MainDrawer = DrawerNavigator (
	{
		First: {
			path: '/',
			screen: MainScreen
		},
		Second: {
			path: '/send',
			screen: SecondScreen
		}
	},
	{
		initialRouteName: 'First',
		drawerPosition: 'left'
	}
);

export default MainDrawer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
