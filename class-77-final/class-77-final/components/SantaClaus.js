import React from 'react';
import LottieView from 'lottie-react-native';
import {Image,View,Text} from 'react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <View>
      
      <Image
      source={require('../assets/s2.png')}
      style={{width:60,height:100}}>
      </Image>
      </View>
      /*<LottieView
      source={require('../assets/13015-santa-claus.json')}
      style={{width:"60%"}}
      autoPlay loop />*/
    )
  }
}
