import React, { Component,} from 'react';
import {StyleSheet, View, ImageBackground, FlatList, TouchableOpacity} from "react-native";
import { Input, Icon, Button, Text, Overlay} from 'react-native-elements'
import SplashScreen from 'react-native-splash-screen'
import BurgerLoading from "../components/BurgerLoading";
import Tile from "../components/Tile";
import AppContext from "../components/AppContext";
import Utills from "../components/Utills";


export default class Initial2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading:true,
      allergies: [
        {
          name:'Eggs',
          selected:false
        },
        {
          name:'Peanuts',
          selected:false
        },
        {
          name:'Shellfish',
          selected:false
        },
        {
          name:'Wheat',
          selected:false
        },
        {
          name:'Soy',
          selected:false
        }
      ],
    }
  }

  componentDidMount() {
    SplashScreen.hide();
    this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.setAlergies()
      }
    );
  }

  setAlergies() {
    if (this.context.profile.allergies.length) {
      this.setState({
        allergies:this.context.profile.allergies
      })
    }
  }


  handleImageLoad = () => {
    this.setState({
      loading:false
    })
  }

  render() {
    const renderAllergies = (
      <View style={{flex:1}}>
        <View style={{flexDirection:'row', flex:0.1, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:15,color:'white', alignSelf: 'center'}}>Choose any allergies (if any)</Text>
        </View>
        <View style={{flex:0.85, alignItems: 'center'}}>
          <FlatList
            data={this.state.allergies}
            renderItem={(c) => (
              <TouchableOpacity onPress={() => {
                let selected = []
                let items = this.state.allergies
                items[c.index].selected = !items[c.index].selected
                this.context.setProfileAllergies(items)
                this.setState({allergies:items})
              }}>
                <Tile text={c.item.name} selected={c.item.selected}></Tile>
              </TouchableOpacity>
            )}
            numColumns={3}
            extraData={this.state}
          />
        </View>
      </View>
    )

    const renderInitialScreen = (
      <View style={{flex:1, marginTop:30}}>
        {renderAllergies}
        <Button
          type={'solid'}
          containerStyle={{flex:0.15, width:300, alignSelf:'center'}}
          title="Finish"
          textStyle={{fontSize:20}}
          onPress={() => {
            Utills.saveItem('profile', this.context.profile)
            this.props.navigation.push('SelectRestaurant')
          }}
        />
      </View>
    )

    return (
      <ImageBackground source={require('../assets/img/bg.jpg')} style={styles.background} blurRadius={7} onLoad={this.handleImageLoad}>
        <View style={styles.overlay}>
          {this.state.loading ? <BurgerLoading/> : renderInitialScreen}
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
});

Initial2.contextType = AppContext