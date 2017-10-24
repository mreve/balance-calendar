// @flow

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Slider from 'react-native-slider';

import AppView from './../AppView';
import DateUtils from './../utils/DateUtils';

type Props = {
  navigation: Object,
};
type State = {
  moodValue: ?number,
  selectedDate: Date,
};

export default class MoodScreen extends React.Component<void, Props, State> {
  state: State;

  static navigationOptions = {
    title: 'Mood Screen'
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      moodValue: null,
      selectedDate: this.props.navigation.state.params.selectedDate,
    };
  }

  render() {
    return (
      <AppView>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>How{'\''}s your</Text>
            <Text style={styles.textHighlighted}>mood</Text>
            <Text style={styles.text}>today?</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={this.state.moodValue}
            style={styles.slider}
            onValueChange={(value) => this.setState({moodValue: value})}
          />
          <View style={styles.imagery}>
            <Image
              source={require('./../../img/super-sad.png')}
              style={styles.icon}
            />
            <Text>
              {this.state.moodValue != null
                ? this.state.moodValue + '%'
                : 'Move the slider'}
            </Text>
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
  slider: {
    width: 200,
  },
});
