import React, { Component,} from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import Utills from "../components/Utills";
import MainMenuCategoryItem from "../components/MainMenuCategoryItem";
import {Icon} from "react-native-elements";
import {ListItem } from 'react-native-elements'


export default class SelectFood extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foodItems:[],
      foodCategory:this.props.navigation.getParam('foodCategory'),
      restaurantId:this.props.navigation.getParam('restaurantId')
    }
  }

  componentDidMount() {
    Utills.getData(`${Utills.endPoint}/getFoodByCategory?restaurantId=${this.state.restaurantId}&foodCategory=${this.state.foodCategory.value}`).then((data) => {
      this.setState({
        foodItems:data.menuItems
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You have selected {this.state.foodCategory.name}</Text>
        <FlatList
          data={this.state.foodItems}
          renderItem={({item}) => (
            <ListItem
            key={item.name}
            title={item.PRODUCT_NAME}
            subtitle={<View>
              <Text>{item.PRODUCT_DESCRIPTION}</Text>
              <Text>{item.PRODUCT_PRICE}</Text>
            </View>}
          />)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

