import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export class HomeHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableHighlight onPress={() => {this.props.onTapPrevious();}}>
          <View style={styles.previousDay}>
            <Icon name="triangle-left" size={30} color="#900" />
          </View>
        </TouchableHighlight>
        <View style={styles.month}>
          <Text style={styles.monthText}>{this.props.month}</Text>
        </View>
        <TouchableHighlight onPress={() => {this.props.onTapNext();}}>
          <View style={styles.nextDay}>
            <Icon name="triangle-right" size={30} color="#900" />
          </View>
        </TouchableHighlight>
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
  previousDay: {
    flexGrow: 0,
    flexShrink: 1,
    alignSelf: 'center',
    paddingLeft: 6,
  },
  nextDay: {
    flexGrow: 0,
    flexShrink: 1,
    alignSelf: 'flex-end',
    paddingRight: 6,
  },
});

module.exports = HomeHeader;
