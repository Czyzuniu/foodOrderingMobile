import React, { Component } from 'react';

import {View, StyleSheet, Image} from 'react-native'

export default class BurgerLoading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/img/loader.gif')} width={64} height={64}></Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
});



