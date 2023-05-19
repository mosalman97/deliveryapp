import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';

// constants
import {
  COLORS,
  FONTS,
  IMAGES,
  setHeight,
  setWidth,
} from '../constants/Constants';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent
      />
      <View style={styles.imageView}>
        <Image source={IMAGES.PLATE} style={styles.imageStyle} />
      </View>
      <Text style={styles.title}>Food Delivery</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: setWidth(60),
    height: setHeight(30),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: FONTS.Poppins_Bold,
  },
});
