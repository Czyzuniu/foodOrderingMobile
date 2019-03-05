import React, { Component } from 'react';
import { Text } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class Tile extends Component<Props> {

  constructor(props){
    super(props)
  }

  render() {

    let styleOptions = [styles.container]

    if (this.props.selected) {
      styleOptions = [styles.container, styles.selected]
    }

    console.log(this.props.selected)

    return (
      <View style={styleOptions}>
        <View style={styles.overlay}>
          <Text style={styles.itemText} >{this.props.text}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderColor:'#4286f4',
    margin:5,
    backgroundColor: '#4286f4',
    borderRadius:5
  },
  overlay: {
    height:120,
    width:100,
    backgroundColor:'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color:'white',
    fontSize:18
  },
  selected: {
    backgroundColor: 'green',
  }

})
