import React, { Component,} from 'react';
import {View, StyleSheet, Image} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import {Button, CheckBox, Icon, Overlay, Text} from 'react-native-elements'
import Utills from "../components/Utills";
import Carousel, {Pagination} from 'react-native-snap-carousel'
import { Rating, AirbnbRating } from 'react-native-elements';
import RestaurantOverlay from "../components/RestaurantOverlay";

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
      showByPref:true,
      restaurants:[],
      selectedRestaurant: {
        data:null,
        images:null
      },
      showOverlay:false
    }

  }

  componentDidMount() {
    this.setUpFavourites()
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
        this.setState({restaurants:parsedData.results})
      })
    })
  }

  setUpFavourites() {
    Utills.retrieveItem('favouritePlaces').then((data) => {
      if (!data) {
        Utills.saveItem('favouritePlaces', [])
      }
    })
  }

  render() {
    const restaurantData = this.state.selectedRestaurant.data
    const restaurantImages = this.state.selectedRestaurant.images

    console.log(restaurantData)

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
              onPress={() => {
                Utills.getData(`${Utills.endPoint}/getRestaurant?id=${marker.restaurant.RESTAURANT_ID}`).then((data) => {
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
                      showOverlay:true
                    })
                  })
                })
              }
              }
            >
            </Marker>
          ))}
        </MapView>
        <View style={styles.sliderContainer}>
          <CheckBox
            title='Show by food preference?'
            checked={this.state.showByPref}
            onPress={() => this.setState({showByPref: !this.state.showByPref})}
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
