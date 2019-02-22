import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { w } from '../../../constants';

const ImageBigCard = ({ data }) => {
  const { container, sub, cover } = styles;
  const { image } = data;
  const img = `https${image.medium.slice(4)}`;
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: img}}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  sub: {
    shadowColor: '#000',
    shadowRadius: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    elevation: 2
  },
  cover: {
    width: w / 1.67,
    height: w * 0.9,
    borderRadius: 10
  }
});
export { ImageBigCard }