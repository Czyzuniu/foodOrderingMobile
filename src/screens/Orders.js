import React, { Component,} from 'react';
import {StyleSheet, ScrollView, View} from "react-native";
import Utills from "../components/Utills";
import {Icon, ListItem, Text} from 'react-native-elements'
import RestaurantOverlay from "../components/RestaurantOverlay";
import AppContext from "../components/AppContext";

export default class Orders extends Component {

  constructor() {
    super()
    this.state = {
      orders:[]
    }
  }

  componentDidMount() {

    let id = this.context.profile.profileId
    Utills.getData(`${Utills.endPoint}/getOrdersPerId?id=${id}`).then((data) => {
      this.setState({
        orders: data
      })
    })
  }

  render() {
    const {orders} = this.state
    return (
      <ScrollView style={styles.container}>
        {orders.map((elem) => {
          return (
            <ListItem
              key={elem.ORDER_ID.toString()}
              title={
                <View style={{flexDirection: 'column', justifyContent: 'space-around', height:75}}>
                  <View style={{flexDirection:'column'}}>
                    <Text>Order ID: {elem.ORDER_ID}</Text>
                  </View>
                  <View style={{flexDirection:'column'}}>
                    <Text>Order table: {elem.ORDER_TABLE}</Text>
                    <Text>Restaurant Name: {elem.RESTAURANT_NAME}</Text>
                    <Text>Order status: {elem.STATUS_DESCRIPTION}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignSelf:'flex-start'}}>
                  </View>
                </View>
              }
              containerStyle={{margin:10}}
              chevron={false}
              chevronColor={'black'}
              bottomDivider={true}
            />
          )
        })}
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  }
});



Orders.contextType = AppContext
