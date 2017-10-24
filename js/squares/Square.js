// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  children: any,
};

export default class Square extends React.Component<void, Props, void> {
  render() {
    return (
      <View style={styles.square}>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#ff7230',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
  },
  text: {
    color: '#ff7230',
  },
});
