import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class SleepSquare extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text>Sleep square</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: 174,
    height: 174,
  },
});

module.exports = SleepSquare;
