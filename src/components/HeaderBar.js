
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
import AppContext from "./AppContext";

class HeaderBar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      basketSize:0,
      searchField:''
    }

    DeviceEventEmitter.addListener('addedToBasket', () => {
      Utills.retrieveItem('myBasket').then(data => this.setState({basketSize:data.length}))
    });


    DeviceEventEmitter.addListener('basketCleared', () => {
       this.setState({basketSize:0})
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

      if (this.props.isTableIcon) {
        return (
          <Icon
            name='event-seat'
            type='MaterialIcons'
            onPress={() => {
              DeviceEventEmitter.emit('openTablePick');
            }}
          />
        )
      } else {
        return (
          <SearchBar
            lightTheme
            value={this.state.searchField}
            icon={{type: 'MaterialIcons', name: 'search'}}
            onChangeText={(search) => this.setState({searchField: search})}
            placeholder='Search menu'
            containerStyle={{
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              borderBottomWidth: 0,
              width: '100%',
              display: 'flex',
              alignSelf: 'center',
              marginBottom: 5
            }}
          />
        )
      }
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
                size={30}
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
