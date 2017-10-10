import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {get_full_month, get_full_day_of_week} from './utils/DateUtils';
import HomeHeader from './HomeHeader';
import Square from './Square';
import TodaysDateSquare from './TodaysDateSquare';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      selectedDate: today,
    };
    this.onTapPrevious = this.onTapPrevious.bind(this);
    this.onTapNext = this.onTapNext.bind(this);
  }

  render() {
    let squares = this.getSquares();
    return (
      <ScrollView>
        <View style={styles.container}>
          <HomeHeader
            month={get_full_month(this.state.selectedDate)}
            selectedDate={this.state.selectedDate}
            onTapPrevious={this.onTapPrevious}
            onTapNext={this.onTapNext}
          />
          <View style={styles.squarelist}>
            {squares}
          </View>
        </View>
      </ScrollView>
    );
  }

  onTapPrevious() {
    let previousDay = new Date(this.state.selectedDate);
    previousDay.setDate(this.state.selectedDate.getDate() - 1);
    this.setState({selectedDate: previousDay});
  }

  onTapNext() {
    let previousDay = new Date(this.state.selectedDate);
    previousDay.setDate(this.state.selectedDate.getDate() + 1);
    this.setState({selectedDate: previousDay});
  }

  getSquares(): array<React.Component> {
    const contents = Array(9).fill(
      <TodaysDateSquare
        day={this.state.selectedDate.getUTCDate()}
        weekday={get_full_day_of_week(this.state.selectedDate)}
        month={get_full_month(this.state.selectedDate)}
        year={this.state.selectedDate.getUTCFullYear()}
      />,
    );
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
  container: {
    flex: 1,
    backgroundColor: '#FFDEC0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 30,
  },
  squareRow: {
    flexDirection: 'row',
    width: '100%',
    height: 224,
    paddingHorizontal: 24,
  },
  leftSquare: {
    alignItems: 'flex-start',
    width: '100%',
  },
  centerSquare: {
    alignItems: 'center',
    width: '100%',
  },
  rightSquare: {
    alignItems: 'flex-end',
    width: '100%',
  },
});

module.exports = Home;
