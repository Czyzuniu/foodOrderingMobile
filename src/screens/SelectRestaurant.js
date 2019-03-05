import React, { Component,} from 'react';
import {View, StyleSheet, Image} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import {Button, CheckBox, Icon, ListItem, Overlay, Text} from 'react-native-elements'
import Utills from "../components/Utills";
import Carousel, {Pagination} from 'react-native-snap-carousel'
import { Rating, AirbnbRating } from 'react-native-elements';
import RestaurantOverlay from "../components/RestaurantOverlay";
import AppContext from "../components/AppContext";
import socketIOClient from "socket.io-client";

export default class SelectRestaurant extends Component {

  constructor(props) {
    super(props)
    this.state = {
      LATLNG:{
        latitude: 37.78825,
        longitude: -122.4324,
      },
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
      radius:1,
      showByPref:false,
      restaurants:[],
      selectedRestaurant: {
        data:null,
        images:null
      },
      showOverlay:false,
      showFullList:false
    }
  }

  showByPreference = () => {
      const myCategories = this.context.profile.cuisines.filter(cat => cat.selected);
      let filtered = []
      this.state.restaurants.map((rest) => {
        myCategories.map((myCat) => {
          if (rest.restaurant.categories.some(cat => cat.CATEGORY_ID === myCat.CATEGORY_ID)) {
            filtered.push(rest)
          }
        })
      })

      this.setState({
        restaurants:filtered,
        showByPref: true
      })
  }

  componentDidMount() {
    this.setUpFavourites()
    this.setUpOrders()
    this.getRestaurants()


    //connect to socket
    this.socket = socketIOClient('http://localhost:3001');
    this.context.setSocket(this.socket)

  }

  setUpFavourites() {
    Utills.retrieveItem('favouritePlaces').then((data) => {
      if (!data) {
        Utills.saveItem('favouritePlaces', [])
      }
    })
  }


  setUpOrders() {
    Utills.retrieveItem('myOrders').then((data) => {
      if (!data) {
        Utills.saveItem('myOrders', [])
      }
    })
  }

  getRestaurants = () => {
    navigator.geolocation.getCurrentPosition((data) => {

      //Utills.clearStorage()

      console.log('success location', data)
      this.setState({
        LATLNG:{
          latitude: data.coords.latitude,
          longitude:data.coords.longitude,
        }
      })
      Utills.getData(`${Utills.endPoint}/getRestaurants?lat=${this.state.LATLNG.latitude}&lng=${this.state.LATLNG.longitude}`).then((data) => {
        let parsedData = JSON.parse(data)
        this.setState({restaurants:parsedData.results, showByPref:false})
      })
    })
  }

  getRestaurant(restaurantId) {
    Utills.getData(`${Utills.endPoint}/getRestaurant?id=${restaurantId}`).then((data) => {
      const finalImages = []
      let promises = data.images.map((img) => {
        return new Promise((res) => {
          finalImages.push(`${Utills.endPoint}/${img.PATH}`)
          res()
        })
      })
      Promise.all(promises).then(() => {
        this.setState({
          selectedRestaurant:{
            data:data.resData,
            images:finalImages,
          },
          showOverlay:true,
          showFullList:false
        })
      })
    })
  }

  render() {
    const restaurantData = this.state.selectedRestaurant.data
    const restaurantImages = this.state.selectedRestaurant.images

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.LATLNG.latitude,
            longitude: this.state.LATLNG.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          zoomControlEnabled={true}
          showsScale={true}
          zoomEnabled={true}
        >
          {this.state.restaurants.map(marker => (
            <Marker
              coordinate={{
                latitude: marker.restaurant.RESTAURANT_LATITUDE,
                longitude: marker.restaurant.RESTAURANT_LONGITUDE,
              }}
              title={marker.title}
              description={marker.description}
              calloutOffset={{ x: 0, y: 55 }}
              onPress={() => {this.getRestaurant(marker.restaurant.RESTAURANT_ID)}}
            >
            </Marker>
          ))}
        </MapView>
        <View style={styles.sliderContainer}>
          <CheckBox
            title='Show by food preference?'
            checked={this.state.showByPref}
            onPress={() => {
              if (!this.state.showByPref) {
                this.showByPreference()
              } else {
                this.getRestaurants()
              }
            }}
          />
          <Button
            type={'solid'}
            title="Show full list of restaurants"
            textStyle={{fontSize:14}}
            containerStyle={{margin:10}}
            onPress={() => {
              this.setState({
                showFullList:true
              })
            }}
          />
        </View>
        {restaurantData &&
        <RestaurantOverlay
          showOverlay={this.state.showOverlay}
          restaurantData={restaurantData}
          restaurantImages={restaurantImages}
          onClose={() => {
            this.setState({
              showOverlay: false
            })
          }
          }
          onDineIn={() => {
            if (restaurantData) {
              this.props.navigation.push('DineIn', {restaurantId: restaurantData.RESTAURANT_ID})
              this.setState({
                showOverlay: false
              })
            }
          }
          }
        />
        }
        <Overlay
          isVisible={this.state.showFullList}
          overlayBackgroundColor="white"
          containerStyle={{flex: 0.9}}
        >
          <Icon
            name='clear'
            raised
            type='MaterialIcons'
            size={20}
            containerStyle={{position:'absolute', top:-30, right:-30}}
            onPress={() => this.setState({
              showFullList:false
            })}
          />
          {this.state.restaurants.map((rest) => {
            return (
            <ListItem
                key={rest.restaurant.RESTAURANT_ID.toString()}
                title={rest.restaurant.RESTAURANT_NAME}
                // subtitle={elem.RESTAURANT_CATEGORIES}
                chevron={true}
                chevronColor={'black'}
                onPress={() => {this.getRestaurant(rest.restaurant.RESTAURANT_ID)}}
              />
            )
          })}
        </Overlay>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
  map: {
    flex:0.8
  },
  sliderContainer: {
    flex: 0.2,
    marginLeft: 10,
    marginRight: 10
  },
  callout: {
    width: 200,
  },
});


SelectRestaurant.contextType = AppContext
