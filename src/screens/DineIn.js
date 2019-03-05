import React, { Component,} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity, AsyncStorage, DeviceEventEmitter} from "react-native";
import { Dialog, DialogStackedActions } from 'react-native-material-ui';
import Utills from "../components/Utills";
import MainMenuCategoryItem from "../components/MainMenuCategoryItem";
import {Icon} from "react-native-elements";
import Snackbar from 'react-native-snackbar';
import { Dropdown } from 'react-native-material-dropdown';
import AppContext from "../components/AppContext";


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
      isFavourite:false,
      showTablePick: false,
      selectedTable:1,
      tableList:[]
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

    DeviceEventEmitter.addListener('openTablePick', () => {
        this.setState({
          showTablePick:true
        })
    });

  }

  componentDidMount() {
    Utills.getData(`${Utills.endPoint}/getRestaurant?id=${this.restaurantId}`).then((res) => {

      let tableList = []

      console.log(res.resData)

      for (let i = 1; i <= res.resData.RESTAURANT_TABLE_COUNT; i++) {
        tableList.push({value:i})
      }

      console.log(tableList)

      this.setState({
        restaurant:res.resData,
        tableList:tableList
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
    if (this.context.table) {
      this.props.navigation.push('SelectFood', {foodCategory:type, restaurantId:this.restaurantId})
    } else {
      this.setState({
        showTablePick:true
      })
    }
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
        {this.state.showTablePick &&
        <View style={styles.loading}>
          <Dialog>
            <Dialog.Content>
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Select the table number</Text>
                <View style={{marginTop: 25}}>
                  <Dropdown
                    label='Table number'
                    value={this.state.selectedTable}
                    data={this.state.tableList}
                    onChangeText={(v) => this.setState({selectedTable: v})}
                  />
                </View>
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <DialogStackedActions
                actions={['Cancel', 'Ok']}
                onActionPress={(action) => {
                  if (action == 'Cancel') {
                    this.setState({
                      showTablePick: false
                    })
                  } else {
                    this.setState({
                      showTablePick:false
                    })
                    this.context.setTable(this.state.selectedTable)
                    Snackbar.show({
                      title: `You have selected table number ${this.state.selectedTable}`,
                      duration: Snackbar.LENGTH_SHORT,
                    });
                  }
                }}
              />
            </Dialog.Actions>
          </Dialog>
        </View>
        }
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

DineIn.contextType = AppContext
