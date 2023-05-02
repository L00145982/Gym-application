import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.bodyTitle}> About Motiv8</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.bodyInfo}>
            I have decided to start creating this app as I had come up with the idea in college but never finished year and it has always been a
            regret that I live with ever since.
          </Text>
          <Image style={styles.aboutImg} source={require('./assets/img/aboutImg.png')} />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  title: {
    width: '80%',
    padding: '20px',
  },

  body: {
    alignItems: 'center',
    backgroundColor: '#f6ebf4',
    width: '100%',
    height: '100%'
  },

  bodyTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  content: {
    flex: 1,
    width: '80%',
    paddingLeft: '20px',
    flexDirection: 'row-reverse'
  },

  bodyInfo: {
    fontSize: 14,
    paddingLeft: '20px',
    justifyContent: 'flex-start'
  },

  aboutImg: {
    width: '60%',
    height: '60%',
    alignContent: 'right',
    justifyContent: 'flex-end',
  }
});
