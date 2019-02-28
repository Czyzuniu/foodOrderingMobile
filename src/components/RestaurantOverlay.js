import React, { Component,} from 'react';
import {Image,View} from "react-native";
import {Button,Text,Icon, Overlay, AirbnbRating} from "react-native-elements";
import Carousel from "react-native-snap-carousel";
import Pagination from "react-native-snap-carousel/src/pagination/Pagination";
import Utills from "./Utills";
import AppContext from "./AppContext";
import Snackbar from "react-native-snackbar";
import DialogInput from 'react-native-dialog-input';

export default class RestaurantOverlay extends Component {

  constructor() {
    super()

    this.state = {
      activeSlide:0,
      rating:0,
      isReviewDialogVisible:false,
      myReview:null
    }
  }

  componentWillReceiveProps() {
    const {restaurantData} = this.props
    if (restaurantData) {
      Utills.getData(`${Utills.endPoint}/getMyReview?restaurantId=${restaurantData.RESTAURANT_ID}&profileId=${this.context.profile.profileId}`).then((data) => {
        this.setState({
          myReview:data.myReview,
        })
      })
    }
  }


  rateRestaurant = (comments, restaurantData) => {

    let record = {
      rating:this.state.rating,
      restaurantId:restaurantData.RESTAURANT_ID,
      profileId:this.context.profile.profileId,
      comments:comments
    }

    Utills.postData(`${Utills.endPoint}/submitReview`,record).then((data) => {
      if (data.status == 'success') {
        Snackbar.show({
          title: 'Thank you for your review!',
          duration: Snackbar.LENGTH_LONG,
        });
        this.setState({
          isReviewDialogVisible:false
        })
      }
    })
  }

  render() {

    let {restaurantData,restaurantImages, showOverlay, onClose, onDineIn, onPreBook} = this.props

    return (
      <Overlay
        isVisible={showOverlay}
        overlayBackgroundColor="white"
        containerStyle={{flex: 0.8}}
      >
        <Icon
          name='clear'
          raised
          type='MaterialIcons'
          size={20}
          containerStyle={{position:'absolute', top:-30, right:-30}}
          onPress={() => onClose()}
        />
        <View style={{flex:1, justifyContent: 'space-between'}}>
          {restaurantData &&
          <View style={{flex: 1}}>
            <Text h4 style={{alignSelf: 'center'}}>{restaurantData.RESTAURANT_NAME}</Text>
            <Text h6 style={{alignSelf: 'center'}}>{restaurantData.RESTAURANT_CATEGORIES}</Text>
            {/*<Text h8>Average review stars</Text>*/}
            <AirbnbRating
              count={5}
              defaultRating={restaurantData.avgReview.avgReview}
              reviews={[]}
              onFinishRating={(r) => this.setState({isReviewDialogVisible:true, rating:r})}
              size={20}
            />
            {restaurantImages &&
            <View>
              <Carousel
                data={restaurantImages}
                renderItem={({item}) => (
                  <Image style={{width: '100%', height: 200, marginTop: 10}} source={{uri: item}} resizeMode={'cover'}/>
                )}
                sliderWidth={250}
                itemWidth={250}
                loop={true}
                onSnapToItem={(index) => this.setState({activeSlide: index})}
                containerCustomStyle={{alignSelf: 'center'}}
                layout={'stack'}
                layoutCardOffset={18}
              />
              <Pagination
                dotsLength={restaurantImages.length}
                activeDotIndex={this.state.activeSlide}
              />
            </View>
            }
          </View>
          }
          <View>
            <Button
              type={'solid'}
              title="Dine in"
              textStyle={{fontSize:20}}
              containerStyle={{margin:10}}
              onPress={onDineIn}
            />
            <Button
              type={'solid'}
              title="Pre-book"
              containerStyle={{margin:10}}
              textStyle={{fontSize:20}}
              onPress={() => {
                alert('pre book')
              }}
            />
          </View>
        </View>
        <DialogInput isDialogVisible={this.state.isReviewDialogVisible}
                     title={this.state.myReview ? 'Update your review' : 'Submit review'}
                     hintInput ={"Amazing food..."}
                     initValueTextInput={this.state.myReview ? this.state.myReview.REVIEW_COMMENTS : ''}
                     submitInput={ (inputText) => {(this.rateRestaurant(inputText, restaurantData))}}
                     closeDialog={ () => {this.setState({isReviewDialogVisible: false})}}
        >
        </DialogInput>
      </Overlay>
    );
  }
}

RestaurantOverlay.contextType = AppContext
