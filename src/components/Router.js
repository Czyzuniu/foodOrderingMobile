import SideMenu from './Menu'
import SelectRestaurant from '../screens/SelectRestaurant'
import React from "react"
import HeaderBar from './HeaderBar'
import {createStackNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation';
import DineIn from "../screens/DineIn";
import SelectFood from "../screens/SelectFood";



// wrap your screen inside the drawer into StackNavigator
const SelectRestaurantNavigator = createStackNavigator({
  SelectRestaurant: {
    screen: SelectRestaurant,
    navigationOptions: {
      header: null
    }
  },
  DineIn: {
    screen:DineIn,
    navigationOptions: {
      header:<HeaderBar/>
    }
  },
  SelectFood: {
    screen:SelectFood,
    navigationOptions: {
      header:<HeaderBar backButton={true}/>
    }
  },
});


const drawerScreens = createDrawerNavigator({
  SelectRestaurant: SelectRestaurantNavigator
}, {
  initialRouteName: 'SelectRestaurant',
  contentComponent: SideMenu,
  drawerWidth: 250,
  drawerPosition: 'left',
  gesturesEnabled: false
})


export default AppStack = createStackNavigator({
    drawer: {
      screen: drawerScreens,
    }
  },
  {
    initialRouteName: 'drawer',
    headerMode:'none'
  });