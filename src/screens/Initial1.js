import React, { Component,} from 'react';
import {StyleSheet, View, ImageBackground, FlatList, TouchableOpacity} from "react-native";
import { Input, Icon, Button, Text, Overlay} from 'react-native-elements'
import SplashScreen from 'react-native-splash-screen'
import BurgerLoading from "../components/BurgerLoading";
import Tile from "../components/Tile";
import AppContext from "../components/AppContext";
import Initial from "./Initial";
import Utills from "../components/Utills";


export default class Initial1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading:true,
      cousines:[]
    }
  }

  componentDidMount() {
    SplashScreen.hide();

    Utills.getFoodCategories().then((data) => {
      data.map((cat) => {
        cat.selected = false
      })
      this.setState({
        cousines: data
      })

      this.setFavouriteCategories()
    })

    this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.setFavouriteCategories()
      }
    );
  }

  setFavouriteCategories() {
    if (this.context.profile.cuisines.length) {
      console.log(this.context.profile.cuisines)
      this.setState({
        cousines:this.context.profile.cuisines
      })
    }
  }


  handleImageLoad = () => {
    this.setState({
      loading:false
    })
  }


  render() {
    const renderCuisines = (
      <View style={{flex:1}}>
          <View style={{flexDirection:'row', flex:0.1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:15,color:'white', alignSelf: 'center'}}>Select your favourite food cousines</Text>
          </View>
          <View style={{flex:0.85, alignItems: 'center'}}>
          <FlatList
          data={this.state.cousines}
          renderItem={(c) => (
            <TouchableOpacity
              testID={'item_' + c.index}
              onPress={() => {
                let items = this.state.cousines
                let selected = []
                items[c.index].selected = !items[c.index].selected
                this.context.setProfileCuisines(items)
                this.setState({cousines:items})
              }
            }>
              <Tile text={c.item.CATEGORY_DESCRIPTION} selected={c.item.selected}></Tile>
            </TouchableOpacity>
          )}
          numColumns={3}
          extraData={this.state}
           disableVirtualization/>
        </View>
      </View>
    )


    const renderInitialScreen = (
      <View style={{flex:1, marginTop:30}} testID={'cuisinesList'}>
        {renderCuisines}
        <Button
          type={'solid'}
          containerStyle={{flex:0.15, width:300, alignSelf:'center'}}
          testID={'initialContinue1'}
          title="Continue"
          textStyle={{fontSize:20}}
          onPress={() => {
            this.props.navigation.push('Initial2')
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



Initial1.contextType = AppContext
