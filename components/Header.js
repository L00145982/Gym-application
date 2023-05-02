import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Motiv8</Text>
            <Image style={styles.logo}source={require('../assets/img/logo.png')} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#373e98',
        width: '100%',
        height: '100px',
        padding: '30px'
    },
    
    headerTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        alignContent: 'left'
    },

    // logo: {
    //     height: '100%',
    //     width: '25%',
    //     backgroundColor: 'transparent',
    //     paddingRight: '20px'
    // }
});