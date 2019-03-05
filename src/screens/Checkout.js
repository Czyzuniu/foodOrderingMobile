import React, { Component,} from 'react';
import {FlatList, StyleSheet, View, ScrollView, Image, TouchableOpacity,ActivityIndicator, DeviceEventEmitter} from "react-native";
import { AsyncStorage } from "react-native"
import Utills from "../components/Utills";
import {Text} from "react-native-elements";
import NumericInput from "react-native-numeric-input";
import { Button } from 'react-native-material-ui';
import AppContext from "../components/AppContext";

export default class Checkout extends Component {

  constructor(props) {
    super(props)
    this.state = this.setInitialState()
    this.rawBasketData = []
  }

  setInitialState = () => {
    const initialState = {
      basketItems: {
        MT_STARTER:{
          name:'Starters',
          value:[]
        },
        MT_MAIN:{
          name:'Mains',
          value:[]
        },
        MT_SNK:{
          name:'Snacks',
          value:[]
        },
        MT_DSRT:{
          name:'Deserts',
          value:[]
        },
        MT_DRINK:{
          name:'Drinks',
          value:[]
        },
      },
      totalPrice:0,
      orderStatus:null
    }

    return initialState;
  }

  resetState = () => {
    this.setState(this.setInitialState());
  }

  componentDidMount() {
    this.sortOutBasket()
  }

  sortOutBasket() {
    Utills.retrieveItem('myBasket').then((data) => {
      this.resetState()
      if (data.length) {
        this.rawBasketData = data
        let basketItems
        let total = this.state.totalPrice
        data.map((item) => {
          basketItems = this.state.basketItems
          basketItems[item.PRODUCT_MENU_TYPE].value.push(item)
          total += item.quantity * item.PRODUCT_PRICE
        })
        this.setState({
          basketItems:basketItems,
          totalPrice:total
        })
      }
    })
  }

  order = () => {

    if (!this.context.table) {
      alert('Please select table')
      this.props.navigation.navigate('DineIn')
      return false
    }

    const socket = this.context.socket

    socket.on('orderConfirmed', () => {
      alert('Your order has been confirmed!')

      this.setState({
        orderStatus:'CONFIRMED'
      })

      Utills.clearBasket()
      this.sortOutBasket()

      this.props.navigation.navigate('DineIn')
      DeviceEventEmitter.emit('basketCleared');
    })

    socket.on('orderDeclined', (data) => {
      alert(`Your order has been declined! reason : ${data.reason}`)
      this.setState({
        orderStatus:'DECLINED'
      })
      this.props.navigation.navigate('DineIn')
    })

    Utills.postData(`${Utills.endPoint}/createOrder`, {table:this.context.table,orderedItems:this.rawBasketData, from:socket.id}).then((res) => {
      this.setState({
        orderStatus:res.orderStatus
      })
    })
  }


  deleteFromBasket = (item) => {
    Utills.retrieveItem('myBasket').then((data) => {
      let myBasket = data
      let indexToDelete = null

      myBasket.forEach((i,index) => {
        if (i.PRODUCT_ID === item.PRODUCT_ID) {
          indexToDelete = index
        }
      })

      myBasket.splice(indexToDelete, 1)

      Utills.saveItem('myBasket', myBasket).then((res) => {
        this.sortOutBasket()
      })

    })
  }


  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={{flex:0.8}}>
        {Object.keys(this.state.basketItems).map((category) => {
          const cat = this.state.basketItems[category]
          if (cat.value.length) {
            return (
              <View style={styles.section}>
                <Text style={styles.sectionText}>{cat.name} ({cat.value.length})</Text>
                {
                  cat.value.map((item) => {
                    console.log(item)
                    return (
                      <View>
                        <TouchableOpacity onPress={() => {this.deleteFromBasket(item)}}>
                          <Image source={require('../assets/img/delete.png')}
                                 style={{alignSelf:'flex-end',top:10, left:2.5, width:24, height:24}}>

                          </Image>
                        </TouchableOpacity>
                        <View style={styles.checkoutItem}>
                          <View style={{flexDirection:'row', justifyContent: 'space-between', margin:10}}>
                            <Text style={{fontSize:15, flex:1, flexWrap: 'wrap'}}>{item.PRODUCT_NAME}</Text>
                            <Text style={{fontSize:15}}>Quantity : {item.quantity}</Text>
                          </View>
                          <View style={{flexDirection:'row', justifyContent: 'space-between', margin:10}}>
                            <Text style={{fontSize:15}}>Customizations : {item.customized}</Text>
                          </View>
                          <View style={{alignItems:'flex-end', margin:10}}>
                            <Text style={styles.sectionText}>Price £{(item.quantity * item.PRODUCT_PRICE).toFixed(2)}</Text>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          }
        })}

        {
          this.context.table ? <Text style={{textAlign:'center'}} h4>Table: {this.context.table}</Text> :
          <Text style={{textAlign:'center'}} h4>No table selected yet.</Text>
        }

      </ScrollView>
        { this.state.totalPrice ?
          <View style={{alignItems: 'center', justifyContent: 'center', flex:0.2}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Total: £{this.state.totalPrice.toFixed(2)}</Text>
            <Button style={{container: {margin: 10}}} raised primary text="Pay by card & order" onPress={this.order}/>
          </View> : (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text>You have no items in basket</Text>
            </View>
          )
        }

        {this.state.orderStatus == "WTFORCONF" &&
          <View style={styles.loading}>
            <Text style={{fontWeight:'bold'}}>
              Waiting for order confirmation
            </Text>
            <ActivityIndicator size={'large'}/>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
  titleContainer:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  section: {
    margin:5
  },
  sectionText:{
    fontWeight:'bold',
    fontSize:20
  },
  checkoutItem:{
    borderWidth: 1,
    marginLeft:5,
    marginRight:5,
    zIndex: -1
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F5FCFF88',
    zIndex:1
  }
});

Checkout.contextType = AppContext
