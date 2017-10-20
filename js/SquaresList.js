import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DateSquare from './squares/DateSquare';
import DateUtils from './utils/DateUtils';
import HabitsSquare from './squares/HabitsSquare';
import HydrationSquare from './squares/HydrationSquare';
import MoodSquare from './squares/MoodSquare';
import SleepSquare from './squares/SleepSquare';
import Square from './squares/Square';
import TasksSquare from './squares/TasksSquare';

const { width, height } = Dimensions.get('window');

export default class SquaresList extends React.Component {
  render() {
    let squares = this.getSquares();
    return (
      <View>
        {squares}
      </View>
    );
  }

  getSquares(): array<React.Component> {
    const contents = [
      <DateSquare
        day={this.props.selectedDate.getDate()}
        weekday={DateUtils.getFullDayOfWeek(this.props.selectedDate)}
        month={DateUtils.getFullMonth(this.props.selectedDate)}
        year={this.props.selectedDate.getFullYear()}
      />,
      <MoodSquare
        navigation={this.props.navigation}
        selectedDate={this.props.selectedDate}
      />,
      <HabitsSquare />,
      <TasksSquare />,
      <SleepSquare />,
      <HydrationSquare />,
    ];
    const stylesArray = [
      styles.leftSquare,
      styles.centerSquare,
      styles.rightSquare,
    ];
    let stylePointer = 0;
    let delta = 1;

    let squares = [];
    for (let i = 0; i < contents.length; i++) {
      squares.push(
        <View style={styles.squareRow} key={i}>
          <View style={stylesArray[stylePointer]}>
            <Square>
              {contents[i]}
            </Square>
          </View>
        </View>
      );
      if (stylePointer + delta > 2 || stylePointer + delta < 0) {
        delta *= -1;
      }
      stylePointer += delta;
    }

    return squares;
  }
}

const styles = StyleSheet.create({
  squareRow: {
    flexDirection: 'row',
    width: width,
    height: 224,
    paddingHorizontal: 24,
  },
  leftSquare: {
    alignItems: 'flex-start',
    width: width - 2 * 24,
  },
  centerSquare: {
    alignItems: 'center',
    width: width - 2 * 24,
  },
  rightSquare: {
    alignItems: 'flex-end',
    width: width - 2 * 24,
  },
});
