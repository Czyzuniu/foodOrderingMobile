import React, { Component,} from 'react';
import {FlatList, StyleSheet, Text, View,DeviceEventEmitter} from "react-native";
import Utills from "../components/Utills";
import {Icon, ListItem} from 'react-native-elements'
import { Dialog, DialogStackedActions } from 'react-native-material-ui';
import NumericInput from 'react-native-numeric-input'
import { AsyncStorage } from "react-native"


export default class SelectFood extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foodItems:[],
      foodCategory:this.props.navigation.getParam('foodCategory'),
      restaurantId:this.props.navigation.getParam('restaurantId'),
      selectedProduct:null,
      quantity:1
    }
  }

  componentDidMount() {
    Utills.getData(`${Utills.endPoint}/getFoodByCategory?restaurantId=${this.state.restaurantId}&foodCategory=${this.state.foodCategory.value}`).then((data) => {
      this.setState({
        foodItems:data.menuItems
      })
    })
  }

  addToBasket = () => {
    console.log('trying to add')
    Utills.retrieveItem('myBasket').then((data) => {
      this.state.selectedProduct.quantity = this.state.quantity
      data.push(this.state.selectedProduct)
      Utills.saveItem('myBasket', data).then(() => {
        console.log('added to basket successfully')
        DeviceEventEmitter.emit('addedToBasket');
        this.setState({
          selectedProduct:null,
          quantity:1
        })
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.selectedProduct &&
          <View style={styles.loading}>
            <Dialog >
              <Dialog.Content>
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <Text style={{fontWeight:'bold', fontSize:15}}>{this.state.selectedProduct.PRODUCT_NAME}</Text>
                      <Text style={{fontWeight:'bold', fontSize:15}}>£{this.state.selectedProduct.PRODUCT_PRICE}</Text>
                  </View>
                  <View style={{justifyContent: 'center', alignItems: 'center', marginTop:25}}>
                  <NumericInput minValue={1} value={this.state.quantity}
                                onChange={quantity => this.setState({quantity})}
                                initValue={this.state.quantity} maxValue={5}/>
                  </View>
                </View>
              </Dialog.Content>
              <Dialog.Actions>
                <DialogStackedActions
                  actions={['Cancel','Customize', 'Add to basket']}
                  onActionPress={(action) => {
                    if (action == 'Cancel') {
                      this.setState({
                        selectedProduct:null
                      })
                    } else if (action == 'Add to basket') {
                      this.addToBasket()
                    }
                  }}
                />
              </Dialog.Actions>
            </Dialog>
          </View>
        }
        <FlatList
          data={this.state.foodItems}
          renderItem={({item}) => (
            <ListItem
            containerStyle={{margin:15}}
            key={item.name}
            title={
              <View style={styles.titleContainer}>
                <Text style={{fontSize:20}}>{item.PRODUCT_NAME}</Text>
                <Text style={{fontWeight:'bold'}}>£{item.PRODUCT_PRICE}</Text>
              </View>
            }
            subtitle={
              <Text>{item.PRODUCT_DESCRIPTION}.</Text>
            }
            chevronColor="black"
            onPress={() => {
              this.setState({selectedProduct:item})
            }}
          />)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    zIndex: 0
  },
  titleContainer:{
    flexDirection:'row',
    justifyContent: 'space-between'
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

