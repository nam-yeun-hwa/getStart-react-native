import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

interface StepProps {
  totalStep: number;
  nowStep: number;
}

/**
 * ProgressBar 컴포넌트
 *@description  프로그레스 바 관련
 */
function ProgressBar({ totalStep, nowStep }: StepProps) {
  const loaderValue = useRef(new Animated.Value(0)).current;

  const load = (count: number) => {
    Animated.timing(loaderValue, {
      toValue: (count / totalStep) * 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    load(nowStep);
  }, [nowStep, totalStep]);

  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.txt}>
          {totalStep} of {nowStep} completed
        </Text>

        <Text style={styles.percent}>{Math.floor((nowStep / totalStep) * 100)}%</Text>
      </View>
      <View style={styles.bar}>
        <Animated.View
          style={{
            backgroundColor: '#44CEC6',
            width,
            height: 6,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 36,
  },
  bar: {
    width: '100%',
    height: 6,
    backgroundColor: '#F6F5F8',
    borderRadius: 10,
  },
  step: {
    color: '#AAC9CE',
    fontWeight: '400',
    fontSize: 22,
    padding: 22,
    lineHeight: 22 * 1.3,
    textAlign: 'center',
  },

  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 28,
    paddingBottom: 17,
  },

  txt: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
    color: '#333333',
  },

  percent: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    color: '#00BBBB',
  },
});
export default ProgressBar;
