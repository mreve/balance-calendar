import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AppView from './../AppView';

export class MoodSquare extends React.Component {
  static navigationOptions = {
    title: 'Mood Screen'
  };

  render() {
    return (
      <AppView>
        <Text>Mood screen</Text>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>How{'\''}s your</Text>
            <Text style={styles.textHighlighted}>mood</Text>
            <Text style={styles.text}>today?</Text>
          </View>
          <View style={styles.imagery}>
            <Image
              source={require('./../../img/super-sad.png')}
              style={styles.icon}
            />
            <Text style={styles.textHighlighted}>?</Text>
            <Image
              source={require('./../../img/super-happy.png')}
              style={styles.icon}
            />
          </View>
        </View>
      </AppView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 174,
    padding: 12,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
  textHighlighted: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  imagery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
});

module.exports = MoodSquare;
