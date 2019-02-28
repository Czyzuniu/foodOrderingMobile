import React, { Component,} from 'react';
import {StyleSheet, View, ImageBackground, FlatList, TouchableOpacity} from "react-native";
import { Input, Icon, Button, Text, Overlay} from 'react-native-elements'
import SplashScreen from 'react-native-splash-screen'
import BurgerLoading from "../components/BurgerLoading";
import Tile from "../components/Tile";
import AppContext from "../components/AppContext";
import Initial from "./Initial";


const cousines = [
  {
    name:'American'
  },
  {
    name:'British'
  },
  {
    name:'Polish'
  },
  {
    name:'Mexican'
  },
  {
    name:'Spanish'
  },
  {
    name:'Chinese'
  },
  {
    name:'American'
  },
  {
    name:'British'
  },
  {
    name:'Polish'
  },
  {
    name:'Mexican'
  },
  {
    name:'Spanish'
  },
  {
    name:'Chinese'
  }
  ]
  // "Algerian",
  // "Alsatian",
  // "American",
  // "Armenian",
  // "Argentine",
  // "Asian",
  // "Australian",
  // "Austrian",
  // "Auvergne"

  // "Bagels",
  // "Bakery",
  // "Bangladeshi",
  // "Barbecue",
  // "Belgian",
  // "Bistro",
  // "Brazilian",
  // "British",
  // "Burgers",
  // "Burgundy",
  // "Burmese",
  // "Cafe",
  // "Cajun",
  // "Californian",
  // "Calzones",
  // "Cambodian",
  // "Caribbean",
  // "Cheesesteaks",
  // "Chicken",
  // "Chilean",
  // "Chinese",
  // "Chowder",
  // "Coffee",
  // "Colombian",
  // "Contemporary",
  // "Continental",
  // "Corsica",
  // "Creole",
  // "Crepes",
  // "Cuban",
  // "Cuban",
  // "Czech",
  // "Deli",
  // "Dim Sum",
  // "Diner",
  // "Dominican",
  // "Donuts",
  // "Dutch",
  // "Eastern European",
  // "Eclectic",
  // "Egyptian",
  // "English",
  // "Ethiopian",
  // "Ecuadorean",
  // "European",
  // "Fast Food",
  // "Filipino",
  // "Fish and Chips",
  // "Fondue",
  // "French",
  // "Frozen Yogurt",
  // "Fusion",
  // "Gastropub",
  // "German",
  // "Greek",
  // "Grill",
  // "Gyros",
  // "Haitian",
  // "Halal",
  // "Hawaiian",
  // "Healthy",
  // "Hot Dogs",
  // "Ice Cream",
  // "Indian",
  // "Indonesian",
  // "International",
  // "Irish",
  // "Israeli",
  // "Italian",
  // "Jamaican",
  // "Japanese",
  // "Juices",
  // "Korean",
  // "Korean Barbeque",
  // "Kosher",
  // "Latin",
  // "Latin American",
  // "Lebanese",
  // "Lyonnais",
  // "Malaysian",
  // "Mediterranean",
  // "Mexican",
  // "Middle Eastern",
  // "Mongolian",
  // "Moroccan",
  // "Nepalese",
  // "Noodle Bar",
  // "Norwegian",
  // "Organic",
  // "Oysters",
  // "Pacific Rim",
  // "Pakistani",
  // "Pan Asian",
  // "Pasta",
  // "Pastries",
  // "Persian",
  // "Peruvian",
  // "Pho",
  // "Pizza",
  // "Polish",
  // "Polynesian",
  // "Portuguese",
  // "Provençal",
  // "Pub Food",
  // "Puerto Rican",
  // "Raw",
  // "Ribs",
  // "Russian",
  // "Salad",
  // "Salvadoran",
  // "Sandwiches",
  // "Savoy",
  // "Scandinavian",
  // "Seafood",
  // "Senegalese",
  // "Singaporean",
  // "Smoothies",
  // "Soul Food",
  // "Soup",
  // "South American",
  // "South African",
  // "South Pacific",
  // "Southern",
  // "Southwestern",
  // "Spanish",
  // "Steak",
  // "Steakhouse",
  // "Subs",
  // "Sushi",
  // "Taiwanese",
  // "Tapas",
  // "Tea",
  // "Tex Mex",
  // "Thai",
  // "Tibetan",
  // "Traditional",
  // "Tunisian",
  // "Turkish",
  // "Ukrainian",
  // "Vegan",
  // "Vegetarian",
  // "Venezuelan",
  // "Vietnamese",
  // "Wings",
  // "Wraps"


export default class Initial1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading:true,
      cousines:[
        {
          name:'American',
          selected:false
        },
        {
          name:'British',
          selected:false
        },
        {
          name:'Polish',
          selected:false
        },
        {
          name:'Mexican',
          selected:false
        },
        {
          name:'Spanish',
          selected:false
        },
        {
          name:'Chinese',
          selected:false
        }
      ]
    }
  }

  componentDidMount() {
    SplashScreen.hide();
    this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.setFavouriteCategories()
      }
    );
  }


  setFavouriteCategories() {
    if (this.context.profile.cuisines.length) {
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
            <TouchableOpacity onPress={() => {
              let items = this.state.cousines
              let selected = []
              items[c.index].selected = !items[c.index].selected
              this.context.setProfileCuisines(items)
              this.setState({cousines:items})
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
        {renderCuisines}
        <Button
          type={'solid'}
          containerStyle={{flex:0.15, width:300, alignSelf:'center'}}
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