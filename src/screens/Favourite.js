import React, { Component,} from 'react';
import {StyleSheet, View} from "react-native";
import Utills from "../components/Utills";
import { ListItem, Text } from 'react-native-elements'
import RestaurantOverlay from "../components/RestaurantOverlay";

export default class Favourite extends Component {

  constructor() {
    super()
    this.state = {
      favouritePlaces:[],
      showOverlay: false,
      selectedRestaurant: {
        data:null,
        images:null
      }
    }
  }

  componentDidMount() {
    Utills.retrieveItem('favouritePlaces').then((data) => {

      let ids = data.map((elem) => {
        return elem.restaurantId
      })

      console.log(ids)

      Utills.getData(`${Utills.endPoint}/getMultipleRestaurants?ids=${ids}`).then((data) => {
        this.setState({
          favouritePlaces: data
        })
      })
    })
  }


  render() {

    const {favouritePlaces, selectedRestaurant} = this.state

    const restaurantData = selectedRestaurant.data
    const restaurantImages = selectedRestaurant.images

    return (
      <View style={styles.container}>
        <Text h4 style={{alignSelf:'center'}}>Favourite places</Text>
        {favouritePlaces.map((elem) => {
          return (
            <ListItem
              key={elem.RESTAURANT_ID.toString()}
              title={elem.RESTAURANT_NAME}
              subtitle={elem.RESTAURANT_CATEGORIES}
              chevron={true}
              chevronColor={'black'}
              bottomDivider={true}
              onPress={() => {
                Utills.getData(`${Utills.endPoint}/getRestaurant?id=${elem.RESTAURANT_ID.toString()}`).then((data) => {
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
              }}
            />
          )
        })}
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
              this.props.navigation.navigate('DineIn', {restaurantId: restaurantData.RESTAURANT_ID})
              this.setState({
                showOverlay: false
              })
            }
          }
          }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

