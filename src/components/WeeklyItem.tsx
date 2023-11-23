import {StyleSheet, Text, View} from 'react-native';

interface IWeeklyItem {
  step: string;
  active: boolean;
}

function WeeklyItem(props: IWeeklyItem): JSX.Element {
  const {step, active} = props;
  return (
    <View style={[styles.container, active && styles.activeState]}>
      <Text style={[styles.smallText, active && styles.activeFontColor]}>
        week
      </Text>
      <Text style={[styles.emphasisText, active && styles.activeFontColor]}>
        {step}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderRadius: 60,
    backgroundColor: '#F6F5F8',
    justifyContent: 'center',
    alignItems: 'center',

    // paddingTop: 50,
    // paddingBottom: 5,
    marginLeft: 8,
    marginRight: 8,
  },
  smallText: {
    fontSize: 11.2,
    color: '#999999',
  },
  emphasisText: {
    fontSize: 19,
    color: '#999999',
    fontWeight: '700',
  },
  activeState: {
    backgroundColor: '#44CEC6',
  },
  activeFontColor: {
    color: '#FFF',
  },
});

export default WeeklyItem;
