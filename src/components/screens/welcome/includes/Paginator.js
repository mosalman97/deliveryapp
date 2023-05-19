import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// constants
import {COLORS} from '../../../constants/Constants';

const Paginator = ({currentIndex}) => {
  const items = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  console.log(currentIndex);
  return (
    <View style={styles.dotContainer}>
      {items.map((item, index) => (
        <View
          style={[
            styles.dot,
            {
              backgroundColor:
                currentIndex === item.id
                  ? COLORS.DEFAULT_GREY
                  : COLORS.DEFAULT_GREEN,
            },
          ]}
          key={item.id}></View>
      ))}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 12,
    width: 20,
    borderRadius: 30,
    marginHorizontal: 10,
  },
});
