import React, { Component,} from 'react';
import {StyleSheet, ScrollView, View} from "react-native";
import Utills from "../components/Utills";
import {Icon, ListItem, Text} from 'react-native-elements'
import RestaurantOverlay from "../components/RestaurantOverlay";
import AppContext from "../components/AppContext";

export default class Reviews extends Component {

  constructor() {
    super()
    this.state = {
      reviews:[]
    }
  }

  componentDidMount() {

    let id = this.context.profile.profileId

    Utills.getData(`${Utills.endPoint}/getReviewsPerId?id=${id}`).then((data) => {
      this.setState({
        reviews: data
      })
    })
  }

  getStarsIconPerRating = (rating) => {
    let stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Icon
          name='star'
          color='yellow'
          type='MaterialIcons'
        />
      )
    }

    for (let i = 0; i < 5-rating; i++) {
      stars.push(
        <Icon
          name='star-border'
          color='yellow'
          type='MaterialIcons'
        />
      )
    }

    return stars
  }



  render() {
    const {reviews} = this.state
    return (
      <ScrollView style={styles.container}>
        <Text h4 style={{alignSelf:'center'}}>My Reviews</Text>
        {reviews.map((elem) => {
          const stars = this.getStarsIconPerRating(elem.REVIEW_RATING)
          return (
            <ListItem
              key={elem.REVIEW_ID.toString()}
              title={
                <View style={{flexDirection: 'column', justifyContent: 'space-around', height:75}}>
                  <View style={{flexDirection:'column'}}>
                    <Text>Review comments : {elem.REVIEW_COMMENTS}</Text>
                  </View>
                  <View style={{flexDirection:'column'}}>
                    <Text>Reviewed restaurant name : {elem.RESTAURANT_NAME}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignSelf:'flex-start'}}>
                    {stars}
                  </View>
                </View>
              }
              containerStyle={{margin:10}}
              chevron={false}
              chevronColor={'black'}
              bottomDivider={true}
            />
          )
        })}
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  }
});



Reviews.contextType = AppContext
