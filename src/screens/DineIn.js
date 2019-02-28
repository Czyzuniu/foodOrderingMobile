import React, { Component,} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from "react-native";
import Utills from "../components/Utills";
import MainMenuCategoryItem from "../components/MainMenuCategoryItem";
import {Icon} from "react-native-elements";
import Snackbar from 'react-native-snackbar';


const menuItems = [
  {
    name:'Starters',
    value:'MT_STARTER',
    path:require('../assets/img/starter.jpg')
  },
  {
    name:'Mains',
    value:'MT_MAIN',
    path:require('../assets/img/food.jpg')
  },
  {
    name:'Desserts',
    value:'MT_DSRT',
    path:require('../assets/img/deserts.jpg')
  },
  {
    name:'Drinks',
    value:'MT_DRINK',
    path:require('../assets/img/drinks.jpg')
  },
  {
    name:'Snacks',
    value:'MT_SNK',
    path:require('../assets/img/snack.jpg')
  }
]

export default class DineIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurant:null,
      isFavourite:false
    }
    this.restaurantId = this.props.navigation.getParam('restaurantId')

    Utills.retrieveItem('favouritePlaces').then((data) => {
      data.map((place) => {
        if (place.restaurantId === this.restaurantId) {
          this.setState({
            isFavourite:true
          })
        }
      })
    })
  }

  componentDidMount() {
    Utills.getData(`${Utills.endPoint}/getRestaurant?id=${this.restaurantId}`).then((res) => {
      this.setState({
        restaurant:res.resData
      })
    })
    this.setUpBasket().then((save) => {
      console.log('basket creation successfull')
    })
  }

  setUpBasket = async () => {
    try {
      await AsyncStorage.setItem('myBasket', JSON.stringify([]));
    } catch (error) {
      // Error saving data
    }
  }

  selectFood(type) {
    this.props.navigation.push('SelectFood', {foodCategory:type, restaurantId:this.restaurantId})
  }

  render() {

    const favouriteIcon = (
      <Icon
        name='favorite'
        type='MaterialIcons'
        color={'red'}
        size={30}
        onPress={() => {
            Utills.retrieveItem('favouritePlaces').then((data) => {
              let inx = null
              data.forEach((elem, index) => {
                if (elem.restaurantId === this.restaurantId) {
                  inx = index
                }
              })
              data.splice(inx, 1)
              Utills.saveItem('favouritePlaces', data).then(() => {
                this.setState({
                  isFavourite:false
                })
                Snackbar.show({
                  title: 'Removed from favourite places!',
                  duration: Snackbar.LENGTH_SHORT,
                });
              })
            })
          }
        }
      />
    )

    const notFavourite = (
      <Icon
        name='favorite-border'
        color={'red'}
        type='MaterialIcons'
        size={30}
        onPress={() =>
          {
            Utills.retrieveItem('favouritePlaces').then((data) => {
              let places = data
              places.push({restaurantId: this.restaurantId})
              Utills.saveItem('favouritePlaces', places).then(() => {
                this.setState({
                  isFavourite: true
                })

                Snackbar.show({
                  title: 'Added to favourite places!',
                  duration: Snackbar.LENGTH_SHORT,
                });
              })
            })
          }
        }
      />
    )

    return (
      <View style={styles.container}>
        {this.state.restaurant &&
          <View style={styles.header}>
              <Text style={{fontSize:25}}>Welcome to {this.state.restaurant.RESTAURANT_NAME}</Text>
            {this.state.isFavourite ? favouriteIcon : notFavourite}
          </View>
        }
        <View style={styles.categories}>
          <FlatList
            data={menuItems}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => {this.selectFood(item)}}>
                <MainMenuCategoryItem menuItemName={item.name}  path={item.path}></MainMenuCategoryItem>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    flex:0.05,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'center'
  },
  categories: {
    flex:0.9
  }
});

