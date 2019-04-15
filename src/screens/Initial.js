import React, { Component,} from 'react';
import {StyleSheet, View, ImageBackground, FlatList, TouchableOpacity} from "react-native";
import { Input, Icon, Button, Text, Overlay} from 'react-native-elements'
import SplashScreen from 'react-native-splash-screen'
import BurgerLoading from "../components/BurgerLoading";
import Tile from "../components/Tile";
import AppContext from "../components/AppContext";
import Utills from "../components/Utills";

export default class Initial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: ''
    }
  }

  componentDidMount() {
    SplashScreen.hide();

    this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.initialRouting()
      }
    );
  }

  initialRouting() {
    let isEdit = this.props.navigation.getParam('isEdit')
    Utills.retrieveItem('profile').then((profile) => {
      if (profile != null) {
        this.context.setProfile(profile)
        if (isEdit) {
          this.setState({
            name:this.context.profile.name
          })
        } else {
          this.props.navigation.navigate('SelectRestaurant')
        }
      }
    })
  }


  handleImageLoad = () => {
    this.setState({
      loading: false
    })
  }

  render() {

    const renderInitialScreen = (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 35, color: 'white', alignSelf: 'center'}}>Welcome</Text>
        <Text h4 style={{color: 'white', alignSelf: 'center', marginTop: 10}}>What is your name?</Text>
        <Input inputStyle={{color: 'white', fontSize: 20, alignSelf: 'center', textAlign: 'center'}}
               value={this.state.name} maxLength={25}
               containerStyle={{width: '70%', alignSelf: 'center', margin: 5}}
               onChangeText={(text) => {
                 this.setState({name: text})
                 this.context.setProfileName(text)
               }}
               testID={'nameInput'}
        />
        <Button
          type={'solid'}
          testID={'initialContinue'}
          containerStyle={{width: 200, alignSelf: 'center', marginTop: 50}}
          title="Continue"
          textStyle={{fontSize: 20}}
          onPress={() => {
            this.props.navigation.push('Initial1')
          }}
        />
      </View>
    )

    return (
      <ImageBackground source={require('../assets/img/bg.jpg')} style={styles.background} blurRadius={7}
                       onLoad={this.handleImageLoad}>
        <View style={styles.overlay}>
          {renderInitialScreen}
        </View>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  background: {
    width:'100%',
    height:'100%',
    flex:1
  },
  overlay: {
    flex:1,
    width:'100%',
    backgroundColor:'rgba(0,0,0,0.8)',
  },
})


Initial.contextType = AppContext
