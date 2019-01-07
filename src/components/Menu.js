import React, { Component,} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import { Drawer, Avatar,Badge, Icon, ListItem} from 'react-native-material-ui';
import StatusBar from './StatusBar'


export default class MenuComponent extends Component {

  constructor(props) {
    super(props)

  }



  navigateToScreen = (route) => {

    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  menuList = [
    {
      value: 'Select restaurant',
      icon: 'home',
      onPress: () => {
        this.navigateToScreen('SelectRestaurant')
      }
    },
  ];

  render () {
    return (
      <Drawer>
        <StatusBar backgroundColor="#BE2625" barStyle="light-content" />
        <Drawer.Header>
          <Drawer.Header.Account
            style={{
              container: {
                backgroundColor:  '#1795ee',
              }
            }}
            avatar={<Avatar icon="person" />}
            footer={{
              dense: true,
              centerElement: {
                primaryText: 'Konrad Kolpak',
              }
            }}
          />
        </Drawer.Header>
        <Drawer.Section
          divider
          items={this.menuList}
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