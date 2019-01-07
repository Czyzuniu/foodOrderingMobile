import React, { Component } from 'react';
import {
  Image,              // Renders images
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  View,               // Container component
} from 'react-native';
import { Button } from 'react-native-elements';

export default class MarkerCallout extends Component {
  render() {
    const { name, image } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Button
              raised
              large
              backgroundColor={'#659D32'}
              title="Dine in"
              containerViewStyle={styles.button}
              textStyle={{fontSize:14}}
              onPress={() => {
                this.props.navigation.push('DineIn', {restaurantId:this.props.restaurantId})
              }}
            />
            <Button
              raised
              large
              backgroundColor={'#659D32'}
              title="Pre book"
              containerViewStyle={styles.button}
              textStyle={{fontSize:14}}
            />
          </View>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  // Callout bubble
  bubble: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    width: 150,
    height:175
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
  },
  // Character name
  name: {
    fontSize: 13,
    textAlign: 'center'
  },
  button: {
    marginTop:5,
  }
});

