import React from 'react';
import { Text, View, Button, Image,  StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Main Screen',
        drawIcon: (tintColor) => {
            return(
                <MaterialIcons name="code" size={24} style={{color: tintColor}}> </MaterialIcons>
            );
        }
    }

    render() {
        return  (<View style={styles.label}> 
                    <Text style={styles.text}>
                        Screen 1
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