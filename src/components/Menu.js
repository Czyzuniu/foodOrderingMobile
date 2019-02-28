import React, { Component,} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {Icon} from "react-native-elements";
import {StyleSheet} from 'react-native';
import { Drawer, Avatar,Badge, ListItem} from 'react-native-material-ui';
import StatusBar from './StatusBar'
import AppContext from "./AppContext";


export default class MenuComponent extends Component {

  constructor(props) {
    super(props)

  }

  navigateToScreen = (route, data) => {

    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: data
    });

    this.props.navigation.dispatch(navigateAction);
  };

  menuList = [
    {
      value: 'Select restaurant',
      icon:
        <Icon
        name='home'
        type='MaterialIcons'
        />
      ,
      onPress: () => {
        this.navigateToScreen('SelectRestaurant')
      }
    },
    {
      value: 'My Profile',
      icon:
        <Icon
          name='person'
          type='MaterialIcons'
        />
      ,
      onPress: () => {
        this.navigateToScreen('Initial', {isEdit:true})
      }
    }
  ];

  restaurantSection = [
    {
      value: 'Favourite Places',
      icon:
        <Icon
          name='favorite'
          type='MaterialIcons'
          color='red'
        />
      ,
      onPress: () => {
        this.navigateToScreen('Favourites', {isEdit:true})
      }
    },
    {
      value: 'My Orders',
      icon:
        <Icon
          name='receipt'
          type='MaterialIcons'
        />
      ,
      onPress: () => {
        this.navigateToScreen('Orders')
      }
    },
    {
      value: 'My Reviews',
      icon:
        <Icon
          name='bookmark'
          type='MaterialIcons'
        />
      ,
      onPress: () => {
        this.navigateToScreen('Reviews')
      }
    }
  ]

  aboutSection = [
    {
      value: 'About app',
      icon:
        <Icon
          name='info'
          type='MaterialIcons'
        />
      ,
      onPress: () => {
        this.navigateToScreen('About')
      }
    },
  ]

  render () {
    return (
      <Drawer>
        <StatusBar backgroundColor="#BE2625" barStyle="light-content" />
        <Drawer.Section
          divider
          title={this.context.profile.name}
          items={this.menuList}
        />
        <Drawer.Section
          title="Restaurants"
          items={this.restaurantSection}
        />
        <Drawer.Section
          title="About us"
          items={this.aboutSection}
        />
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    flex:1,
    paddingTop:25,
    flexDirection:'column',
    backgroundColor:'white'

  },
  listItem: {
    borderBottomWidth: 1,
    margin:5
  }
})



MenuComponent.propTypes = {
  navigation: PropTypes.object
};


MenuComponent.contextType = AppContext
