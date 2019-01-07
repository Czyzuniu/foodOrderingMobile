import React, { Component,} from 'react';
import {Text, View, StyleSheet} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Slider from "react-native-slider";
import { CheckBox } from 'react-native-elements'
import Utills from "../components/Utills";
import MarkerCallout from '../components/MarkerCallout'

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
      restaurants:[]
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((data) => {
      console.log('success location', data)
      this.setState({
        LATLNG:{
          latitude: data.coords.latitude,
          longitude:data.coords.longitude,
        }
      })
      // Utills.postData(`${Utills.endPoint}/getRestaurants`, {currentLocation:this.state.LATLNG}).then((data) => {
      //   console.log(data)
      // }).catch((err) => {
      //   console.log(err)
      // })

      Utills.getData(`${Utills.endPoint}/getRestaurants?lat=${this.state.LATLNG.latitude}&lng=${this.state.LATLNG.longitude}`).then((data) => {
        let parsedData = JSON.parse(data)
        this.setState({restaurants:parsedData.results})
        console.log(this.state)
      })
    })
  }

  render() {
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
          {/*<MapView.Circle*/}
            {/*center = { this.state.LATLNG }*/}
            {/*radius = { this.state.radius * 1609.34 }*/}
            {/*strokeWidth = { 1 }*/}
            {/*strokeColor = { '#1a66ff' }*/}
            {/*fillColor = { 'rgba(230,238,255,0.5)' }*/}
          {/*/>*/}
          {this.state.restaurants.map(marker => (
            <Marker
              coordinate={{
                latitude: marker.restaurant.restaurantLat,
                longitude: marker.restaurant.restaurantLong,
              }}
              title={marker.title}
              description={marker.description}
              calloutOffset={{ x: 0, y: 55 }}
            >
              <MapView.Callout tooltip style={styles.callout}>
                <MarkerCallout
                  name={marker.restaurant.restaurantName}
                  restaurantId={marker.restaurant.restaurantId}
                  navigation={this.props.navigation}
                />
              </MapView.Callout>
            </Marker>
          ))}
        </MapView>
        <View style={styles.sliderContainer}>
          {/*<Slider*/}
            {/*value={this.state.radius}*/}
            {/*onValueChange= {*/}
              {/*value => {this.setState({ radius:value })}*/}
            {/*}*/}
          {/*/>*/}
          {/*<Text>*/}
            {/*Radius: {this.state.radius}*/}
          {/*</Text>*/}
          <CheckBox
            title='Show by food preference?'
            checked={this.state.showByPref}
            onPress={() => this.setState({showByPref: !this.state.showByPref})}
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
