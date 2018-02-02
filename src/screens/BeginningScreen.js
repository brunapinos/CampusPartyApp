import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const beginningBackgroudImage = require('../images/beginning_background.jpeg') 
const styles = StyleSheet.create({
    beginningBackgroudImage: {
        flex: 1,
        width: null,
    },

    beginningScreen: {
        flex: 1,
        backgroundColor:'transparent',
        shadowOpacity: 1,
    
    },

    loginButton: {
        width: 280,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8e3694',
        borderRadius: 10,
        marginBottom: 55,
    },

    buttonText: {
        fontSize: 16,
        color: 'white',
    },

    registerButton: {
        width: 280,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8e3694',
        borderRadius: 10,
    },

    titleText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: "black",
        marginTop: 160,
    },
});
export default class MainScreen extends React.Component {
render() {
    return  (
            // <Text> hello </Text>
            <ImageBackground style={styles.beginningBackgroudImage} source={beginningBackgroudImage}>
                <View style={styles.beginningScreen}> 
                    <View style={{ flex: 1, alignItems: "center" }}> 
                         <Text style={styles.titleText}>Campus Party</Text>
                    </View>
                
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={styles.loginButton}
                            activeOpacity={0}
                            onPress = {() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.registerButton}
                            activeOpacity={0}
                            onPress = {() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Text style={styles.buttonText}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
