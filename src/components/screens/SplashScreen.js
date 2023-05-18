import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';

// constants
import {SIZES, COLORS, IMAGES} from '../constants/Constants';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DEFAULT_GREEN}
        translucent
      />
      <View style={styles.imageView}>
        <Image
          source={IMAGES.PLATE}
          resizeMode={'cover'}
          style={styles.imageStyle}
        />
      </View>
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
    width: 150,
    height: 150,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
