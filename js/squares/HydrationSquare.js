// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HydrationSquare extends React.Component<void, {}, void> {
  render() {
    return (
      <View style={styles.content}>
        <Text>Hydration square</Text>
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
