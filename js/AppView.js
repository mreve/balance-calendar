// @flow

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

type Props = {
  children: any,
};

export default class AppView extends React.Component<void, Props, void> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
