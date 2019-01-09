import React, { Component,} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView} from "react-native";
import { AsyncStorage } from "react-native"
import Utills from "../components/Utills";
import {Icon, ListItem} from "react-native-elements";
import NumericInput from "react-native-numeric-input";
import { Button } from 'react-native-material-ui';

export default class Checkout extends Component {

  constructor(props) {
    super(props)

    this.state = {
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

    this.rawBasketData = []
  }

  componentWillMount() {
    Utills.retrieveItem('myBasket').then((data) => {
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

        console.log(this.state)
      }
    })
  }

  order = () => {
    Utills.postData(`${Utills.endPoint}/createOrder`, {orderedItems:this.rawBasketData}).then((res) => {
      console.log(res)
    })
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        {Object.keys(this.state.basketItems).map((category) => {
          const cat = this.state.basketItems[category]
          if (cat.value.length) {
            return (
              <View style={styles.section}>
                <Text style={styles.sectionText}>{cat.name} ({cat.value.length})</Text>
                {
                  cat.value.map((item) => {
                    return (
                      <View style={styles.checkoutItem}>
                        <View style={{flexDirection:'row', justifyContent: 'space-between', margin:10}}>
                          <Text style={{fontSize:15}}>{item.PRODUCT_NAME}</Text>
                          <Text style={{fontSize:15}}>Quantity : {item.quantity}</Text>
                        </View>
                        <View style={{alignItems:'flex-end', margin:10}}>
                          <Text style={styles.sectionText}>Price £{(item.quantity * item.PRODUCT_PRICE).toFixed(2)}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          }
        })}
        { this.state.totalPrice ?
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Total: £{this.state.totalPrice.toFixed(2)}</Text>
            <Button style={{container: {margin: 10}}} raised primary text="Pay by card & order" onPress={this.order}/>
          </View> : <Text>You have no items</Text>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
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
    marginTop:15
  }
});