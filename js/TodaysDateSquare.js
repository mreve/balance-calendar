import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class TodaysDateSquare extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.dateContent}>
          <Text style={styles.weekday}>{this.props.weekday.toUpperCase()}</Text>
          <View style={styles.dateRow}>
            <Text style={styles.day}>{this.props.day}</Text>
            <Text style={styles.dayDot}>·</Text>
            <View style={styles.monthYearContainer}>
              <Text style={styles.monthYear}>
                {this.props.month.slice(0, 3).toUpperCase()}
              </Text>
              <Text style={styles.monthYear}>{this.props.year}</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>{'2 of 5 events finished'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: 174,
    height: 174,
    justifyContent: 'space-between',
  },
  dateContent: {
    alignItems: 'center',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weekday: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  day: {
    fontSize: 64,
  },
  dayDot: {
    fontSize: 64,
    color: '#ff7230',
  },
  monthYear: {
    fontSize: 24,
  },
  monthYearContainer: {
    alignItems: 'center',
  },
  footer: {
    borderTopColor: '#ff7230',
    borderTopWidth: 1,
    paddingTop: 12,
    alignItems: 'center'
  },
});

module.exports = TodaysDateSquare;
