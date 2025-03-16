import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Dr. Jay Thom, Ph.D., CISSP</Text>
        <Text style={styles.text}>Adjunct Professor</Text>
        
        <View style={styles.spacer} />
        <Text style={styles.text}>Instructor: MSCS-533-B01</Text>
        <View style={styles.spacer} />

        <Text style={styles.text}>Education:</Text>
        <Text style={styles.text}>
          Ph.D. Computer Science and Engineering {'\n'}
          University of Nevada-Reno (Reno, Nevada)
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>WELCOME TO THE UNIVERSITY OF THE CUMBERLANDS</Text>
        <Text style={styles.text}>Course ID: MSCS 533</Text>
        <Image source={require('./assets/profile.jpg')} style={styles.image} />
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  spacer: {
    height: 15,
  },
  card: {
    backgroundColor: 'white',
    width: width,
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: 30,
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 10,
  },
});
