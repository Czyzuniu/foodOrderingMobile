
import React, { Component } from 'react';
import { Header, Icon} from 'react-native-elements'
import {
  StyleSheet,
  View,
} from 'react-native';
import StatusBar from './StatusBar'
import { SearchBar } from 'react-native-elements'

import { withNavigation } from 'react-navigation';

class HeaderBar extends React.Component {

  constructor(props) {
    super(props)
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

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#BE2625" barStyle="light-content" />
        <Header
          leftComponent={this.renderLeftComponent()}
          centerComponent={
            <SearchBar
              lightTheme
              icon={{ type: 'MaterialIcons', name: 'search' }}
              placeholder='Search menu'
              containerStyle={{backgroundColor:'transparent', borderTopWidth:0, borderBottomWidth:0, minWidth:200, maxWidth:250}}
            />
          }
          rightComponent={
            <Icon
            name='shopping-cart'
            type='MaterialIcons'
            size={30}
          />
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