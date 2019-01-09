
import React, { Component } from 'react';
import { Header, Icon} from 'react-native-elements'
import {
  StyleSheet,
  View,
  Text,
  DeviceEventEmitter,
  TouchableOpacity
} from 'react-native';
import StatusBar from './StatusBar'
import { SearchBar } from 'react-native-elements'
import IconBadge from 'react-native-icon-badge';

import { withNavigation } from 'react-navigation';
import Utills from "./Utills";

class HeaderBar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      basketSize:0
    }

    DeviceEventEmitter.addListener('addedToBasket', () => {
      Utills.retrieveItem('myBasket').then(data => this.setState({basketSize:data.length}))
    });
  }

  renderLeftComponent() {
    if (this.props.backButton) {
      return (
        <Icon
          name='chevron-left'
          type='MaterialIcons'
          testID='goBackIcon'
          size={35}
          onPress={() => this.props.navigation.pop()}
        />
      )
    } else {
      return (
        <Icon
          name='menu'
          type='MaterialIcons'
          testID='drawerIcon'
          size={30}
          onPress={() => {
            this.props.navigation.openDrawer()
            }
          }
        />
      )
    }
  }

  renderCenterComponent(){
    if (this.props.renderCenterComponent) {
      return (
        <SearchBar
          lightTheme
          icon={{ type: 'MaterialIcons', name: 'search' }}
          placeholder='Search menu'
          containerStyle={{backgroundColor:'transparent', borderTopWidth:0, borderBottomWidth:0, minWidth:200, maxWidth:250}}
        />
      )
    }
  }

  renderRightComponent(){
    if (this.props.renderRightComponent) {
      return (
        <TouchableOpacity onPress={() => {this.props.navigation.push('Checkout')}}>
          <IconBadge
            MainElement={
              <Icon
                name='shopping-cart'
                type='MaterialIcons'
                size={45}
              />
            }
            BadgeElement={
              <Text style={{color:'#FFFFFF'}}>{this.state.basketSize}</Text>
            }
            Hidden={this.state.basketSize==0}
          />
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#BE2625" barStyle="light-content" />
        <Header
          leftComponent={this.renderLeftComponent()}
          centerComponent={
            this.renderCenterComponent()
          }
          rightComponent={
           this.renderRightComponent()
          }
          outerContainerStyles={{ backgroundColor: '#1795ee' }}
        />
      </View>
    );
  }
}

export default withNavigation(HeaderBar);


const styles = StyleSheet.create({
  container: {
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'stretch'
  }
})