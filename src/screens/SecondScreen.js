import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Second Screen',
        drawIcon: (tintColor) => {
            return(
                <MaterialIcons name="change-history" 
                    size={24} 
                    style={{color: tintColor}}> 
                </MaterialIcons>
            );
        }
    }

    render() {
        return (<View style={styles.label}> 
            <Text style={styles.text}>
                Screen 2
            </Text>
            <Button
                onPress = {() => this.props.navigation.navigate('DrawerOpen')}
                title = 'Open Navigator'>
            </Button>
        </View>);
    }
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    color: 'blue'
  }
});