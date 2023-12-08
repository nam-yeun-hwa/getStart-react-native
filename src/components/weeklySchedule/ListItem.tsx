import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ACTIVE_MODE } from '../../constants/constant';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';

interface UserWeeklyData {
  id: number;
  weekNumber: number;
  content: string;
  done: boolean;
}

interface WeeklyItemProps {
  item: UserWeeklyData;
  mode: ACTIVE_MODE;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
}

/**
 * ListItem 컴포넌트
 * Week마다 개별 아이템
 */
function ListItem({ item, mode, onDone, onRemove }: WeeklyItemProps) {
  const width = Dimensions.get('window').width;

  /**
   * mode가 ACTIVE_MODE.DONE 값일때는 -44 만큼 이동
   * 그외에는 0으로 이동
   */
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(mode === ACTIVE_MODE.DONE ? -44 : 0, {
            duration: 150,
            easing: Easing.ease,
          }),
        },
      ],
    };
  });

  return (
    <Animated.View style={[, styles.container, animatedStyle]}>
      <View style={[{ width: width }, styles.item]}>
        <TouchableOpacity onPress={() => onDone(item.id)}>
          <View style={[styles.checkBasic, item.done && styles.done]}>
            {item.done ? (
              <Image
                source={require('../../assets/icon/ico_check_active.png')}
                style={styles.iconCheck}
              />
            ) : (
              <Image
                source={require('../../assets/icon/ico_check_basic.png')}
                style={styles.iconCheck}
              />
            )}
          </View>
        </TouchableOpacity>
        <Text
          style={[styles.txt, item.done && styles.lineThrough]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.content}
        </Text>

        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <View style={styles.del}>
            <Image
              source={require('../../assets/icon/ico_minus.png')}
              style={styles.iconMinus}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    flexDirection: 'row',
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

  checkBasic: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: 20,
  },

  done: {
    backgroundColor: '#44CEC6',
  },

  lineThrough: {
    color: '#C4C4C4',
    textDecorationLine: 'line-through',
  },

  del: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: '#FF5146',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -8,
  },

  txt: {
    flexWrap: 'wrap',
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    marginVertical: 5,
    marginRight: 48,
  },
});

export default ListItem;
