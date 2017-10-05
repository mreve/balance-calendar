import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Square from './Square';
import TodaysDateSquare from './TodaysDateSquare';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 'September',
      day: '26',
      weekday: 'Thursday',
      year: '2018',
    };
  }

  render() {
    let squares = this.getSquares();
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.month}>{this.state.month}</Text>
          <View style={styles.squarelist}>
            {squares}
          </View>
        </View>
      </ScrollView>
    );
  }

  getSquares(): array<React.Component> {

    const contents = Array(9).fill(
      <TodaysDateSquare
        day={this.state.day}
        weekday={this.state.weekday}
        month={this.state.month}
        year={this.state.year}
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
  month: {
    fontSize: 30,
    marginBottom: 40,
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
