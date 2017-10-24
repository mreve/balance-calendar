// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HabitsSquare extends React.Component<void, {}, void> {
  render() {
    return (
      <View style={styles.content}>
        <Text>Habits square</Text>
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
