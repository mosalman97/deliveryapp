import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

// constants
import {setHeight, setWidth, FONTS, COLORS} from '../../../constants/Constants';

const SliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.imageStyle} source={item.image} />
      </View>
      <View style={styles.contantView}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.contentText}>{item.content}</Text>
      </View>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: setWidth(100),
  },
  imageView: {
    width: setWidth(80),
    height: setHeight(40),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  contantView: {
    marginTop: 18,
  },
  titleText: {
    fontSize: 22,
    fontFamily: FONTS.Poppins_Bold,
    color: COLORS.DEFAULT_BLACK,
    textAlign: 'center',
    marginBottom: 8,
  },
  contentText: {
    fontSize: 18,
    fontFamily: FONTS.Poppins_SemiBold,
    color: COLORS.DARK_FIVE,
    textAlign: 'center',
    marginHorizontal: 24,
    marginBottom: 20,
  },
});
