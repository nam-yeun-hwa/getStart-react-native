import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from './ListItem';
import { ACTIVE_MODE } from '../../constants/constant';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import WarningNoPost from '../warningSign/WarningNoPost';
import { WeeklyItem } from '../../pages/WeeklySchedule';

interface UserWeeklyDataProps {
  data: Array<WeeklyItem>;
  mode: ACTIVE_MODE;
  slideDirection: number;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
}

/**
 * WeekContent 컴포넌트
 * @description 주관련 전체 리스트 컨텐츠, ProgressBar와 FlatList컴포넌트로 구성
 */
function WeekContent({ data, mode, slideDirection, onDone, onRemove }: UserWeeklyDataProps) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSequence(
            withTiming(slideDirection >= 0 ? -800 : 800, {
              duration: 0,
            }),
            withTiming(0, {
              duration: 600,
              easing: Easing.ease,
            }),
          ),
        },
      ],
    };
  });

  const renderItem = ({ item }: { item: WeeklyItem }) => {
    return <ListItem item={item} mode={mode} onDone={onDone} onRemove={onRemove} />;
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {data.length > 0 ? (
        <ProgressBar totalStep={data.length} nowStep={data.filter((v) => v.done).length} />
      ) : (
        <WarningNoPost />
      )}

      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,

    marginBottom: 10,
    marginHorizontal: 20,
  },

  iconCheck: {
    width: 16,
    height: 16,
  },

  iconMinus: {
    width: 18,
    height: 18,
  },

  check: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#44CEC6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: 12,
  },

  del: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: '#FF5146',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  txt: {
    width: '89.2%',
    fontSize: 14,
    lineHeight: 21,
    marginVertical: 5,
  },
});

export default WeekContent;
