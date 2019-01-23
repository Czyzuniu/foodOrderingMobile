import React, { Component,} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from "react-native";
import { AsyncStorage } from "react-native"
import Utills from "../components/Utills";
import {Icon, ListItem} from "react-native-elements";
import NumericInput from "react-native-numeric-input";
import { Button } from 'react-native-material-ui';

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
      totalPrice:0
    }

    return initialState;
  }

  resetState = () => {
    this.setState(this.setInitialState());
  }

  componentWillMount() {
    this.sortOutBasket()
  }

  sortOutBasket() {
    Utills.retrieveItem('myBasket').then((data) => {
      this.resetState()
      if (data.length) {
        console.log('this surely does not run')
        this.rawBasketData = data
        let basketItems
        let total = this.state.totalPrice
        console.log(total)
        data.map((item) => {
          basketItems = this.state.basketItems
          basketItems[item.PRODUCT_MENU_TYPE].value.push(item)
          total += item.quantity * item.PRODUCT_PRICE
        })

        console.log(total)


        this.setState({
          basketItems:basketItems,
          totalPrice:total
        })

        console.log(this.state, 'hhh')
      }
    })
  }

  order = () => {
    Utills.postData(`${Utills.endPoint}/createOrder`, {orderedItems:this.rawBasketData}).then((res) => {
      console.log(res)
    })
  }


  deleteFromBasket = (item) => {
    console.log('to dziala?')
    Utills.retrieveItem('myBasket').then((data) => {
      let myBasket = data
      let indexToDelete = null

      myBasket.forEach((i,index) => {
        if (i.PRODUCT_ID === item.PRODUCT_ID) {
          indexToDelete = index
        }
      })

      myBasket.splice(indexToDelete, 1)

      //console.log(myBasket)

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
                    return (
                      <View>
                        <TouchableOpacity onPress={() => {this.deleteFromBasket(item)}}>
                          <Image source={require('../assets/img/delete.png')}
                                 style={{alignSelf:'flex-end',top:10, left:2.5, width:24, height:24}}>

                          </Image>
                        </TouchableOpacity>
                        <View style={styles.checkoutItem}>
                          <View style={{flexDirection:'row', justifyContent: 'space-between', margin:10}}>
                            <Text style={{fontSize:15}}>{item.PRODUCT_NAME}</Text>
                            <Text style={{fontSize:15}}>Quantity : {item.quantity}</Text>
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
      </ScrollView>
        { this.state.totalPrice ?
          <View style={{alignItems: 'center', justifyContent: 'center', flex:0.2}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Total: £{this.state.totalPrice.toFixed(2)}</Text>
            <Button style={{container: {margin: 10}}} raised primary text="Pay by card & order" onPress={this.order}/>
          </View> : <Text>You have no items</Text>
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
  }
});