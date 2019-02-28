import React, { Component} from 'react';
import { ListItem, List} from 'react-native-elements'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import { StyleSheet, View, Text,Image} from 'react-native';

export default class ImageCarousel extends Component {

  constructor(props){
    super(props)
    this.state = {
      activeSlide: 0
    }
  }

  render () {
    return (
      <View style={{flex:1}}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.props.images}
          renderItem={({item}) => (
            console.log(item)
          )}
          sliderWidth={250}
          itemWidth={250}
          loop={true}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          containerCustomStyle={{alignSelf: 'center'}}
        />
        {/*{this.props.showPagination &&*/}
        {/*<Pagination*/}
          {/*dotsLength={this.props.images.length}*/}
          {/*activeDotIndex={this.state.activeSlide}*/}
        {/*/>*/}
        {/*}*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fitImageHeight: {
    width:'100%',
    height:'100%',
  }
});