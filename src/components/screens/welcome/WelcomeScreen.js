import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
const {width, height} = Dimensions.get('window');

// includes
import SliderItem from './includes/SliderItem';
import Paginator from './includes/Paginator';

// contants
import {
  COLORS,
  FONTS,
  IMAGES,
  setHeight,
  setWidth,
  SIZES,
} from '../../constants/Constants';

const WelcomeScreen = () => {
  const Details = [
    {
      image: IMAGES.DISCOVER,
      title: 'Discover places near you',
      content:
        'We make it simple to find your favorite food. Enter your address and let us do the rest.',
    },
    {
      image: IMAGES.FAVORITE,
      title: 'Order your favorite',
      content:
        'We will store your favorite foods based on your search and orders.',
    },
    {
      image: IMAGES.DELIVER,
      title: 'Fastest Delivery',
      content:
        'We make food ordering fast, easy and free. No matter you paid online or cash.',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  // function for scroll
  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);
    setCurrentIndex(index);
  };

  // function for skip button
  const handleSkip = () => {
    if (currentIndex === 0) {
      slidesRef.current.scrollToIndex({index: currentIndex + 2});
    } else if (currentIndex === 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };

  // function for next button
  const handleNext = () => {
    if (currentIndex === 0) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else if (currentIndex == 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.DEFAULT_WHITE}
        translucent
      />
      <View style={styles.mainContainer}>
        <FlatList
          data={Details}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <SliderItem key={item.title} item={item} />}
          pagingEnabled={true}
          overScrollMode="never"
          ref={slidesRef}
          onScroll={handleScroll}
        />
        <View>
          <Paginator currentIndex={currentIndex} />
          <View style={styles.bottomView}>
            {currentIndex === 2 ? (
              <View style={styles.bottom}>
                <TouchableOpacity
                  style={styles.getStartButton}
                  activeOpacity={0.8}>
                  <Text style={styles.getStartText}>get started</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.skipView}
                  activeOpacity={0.8}
                  onPress={handleSkip}>
                  <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextView}
                  onPress={handleNext}
                  activeOpacity={0.8}>
                  <Text style={styles.nextText}>next</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.DEFAULT_WHITE,
  },
  mainContainer: {
    height: SIZES.hp('95%'),
  },
  bottomView: {
    marginTop: SIZES.hp('6%'),
  },
  bottom: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.wp('6%'),
  },
  skipView: {},
  skipText: {
    fontSize: 16,
    fontFamily: FONTS.Poppins_Medium,
    textTransform: 'uppercase',
  },
  nextView: {
    width: SIZES.wp('14%'),
    height: SIZES.wp('14%'),
    borderRadius: 100,
    backgroundColor: COLORS.DEFAULT_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontSize: 16,
    fontFamily: FONTS.Poppins_Medium,
    textTransform: 'uppercase',
    color: COLORS.DEFAULT_WHITE,
  },
  getStartButton: {
    width: SIZES.wp('45%'),
    height: SIZES.wp('12%'),
    backgroundColor: COLORS.DEFAULT_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  getStartText: {
    textTransform: 'capitalize',
    fontSize: 20,
    color: COLORS.DEFAULT_WHITE,
  },
});
