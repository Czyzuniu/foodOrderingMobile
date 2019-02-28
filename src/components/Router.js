import SideMenu from './Menu'
import SelectRestaurant from '../screens/SelectRestaurant'
import React from "react"
import HeaderBar from './HeaderBar'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation';
import DineIn from "../screens/DineIn";
import SelectFood from "../screens/SelectFood";
import Checkout from "../screens/Checkout";
import Initial from "../screens/Initial";
import Initial1 from "../screens/Initial1";
import Initial2 from "../screens/Initial2";
import Utills from "./Utills";
import Favourite from "../screens/Favourite";
import Reviews from "../screens/Reviews";
import Orders from "../screens/Orders";
import About from "../screens/About";

const MainNavigator = createStackNavigator({
  Initial: {
    screen: Initial,
    navigationOptions: {
      header: null
    }
  },
  Initial1: {
    screen: Initial1,
    navigationOptions: {
      header: null
    }
  },
  Initial2: {
    screen: Initial2,
    navigationOptions: {
      header: null
    }
  },
  SelectRestaurant: {
    screen: SelectRestaurant,
    navigationOptions: {
      header:<HeaderBar/>
    }
  },
  DineIn: {
    screen:DineIn,
    navigationOptions: {
      header:<HeaderBar renderRightComponent={true}/>
    }
  },
  SelectFood: {
    screen:SelectFood,
    navigationOptions: {
      header:<HeaderBar backButton={true} renderCenterComponent={true} renderRightComponent={true}/>
    }
  },
  Checkout: {
    screen:Checkout,
    navigationOptions: {
      header:<HeaderBar backButton={true} />
    }
  },
  Favourites: {
    screen:Favourite,
    navigationOptions: {
      header:<HeaderBar backButton={true} />
    }
  },
  Reviews: {
    screen:Reviews,
    navigationOptions: {
      header:<HeaderBar backButton={true} />
    }
  },
  Orders: {
    screen:Orders,
    navigationOptions: {
      header:<HeaderBar backButton={true} />
    }
  },
  About: {
    screen:About,
    navigationOptions: {
      header:<HeaderBar backButton={true} />
    }
  },
});


const drawerScreens = createDrawerNavigator({
  Main:MainNavigator,
}, {
  initialRouteName: 'Main',
  contentComponent: SideMenu,
  drawerWidth: 250,
  drawerPosition: 'left',
  gesturesEnabled: false
})


const AppStack = createStackNavigator({
    drawer: {
      screen: drawerScreens,
    }
  },
  {
    initialRouteName: 'drawer',
    headerMode:'none'
  });


export default createAppContainer(AppStack)
