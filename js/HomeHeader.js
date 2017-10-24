// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

type Props = {
  month: string,
};

export default class HomeHeader extends React.Component<void, Props, void> {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.month}>
          <Text style={styles.monthText}>{this.props.month}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 40,
  },
  monthText: {
    fontSize: 30,
  },
  month: {
    alignItems: 'center',
    flexGrow: 1,
  },
});
