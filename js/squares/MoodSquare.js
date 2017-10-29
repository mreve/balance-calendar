// @flow

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import IconUtils from './../utils/IconUtils';

type Props = {
  navigation: Object,
  selectedDate: Date,
};
type State = {
  moodValue: ?string,
};

export default class MoodSquare extends React.Component<void, Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      moodValue: null,
    };
    this.onMoodValueChange = this.onMoodValueChange.bind(this);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => navigate(
            'Mood',
            {
              selectedDate: this.props.selectedDate,
              moodValue: this.state.moodValue,
            },
          )}>
          <View style={styles.innerContainer}>
            <View style={styles.content}>
              <Text style={styles.text}>How{'\''}s your</Text>
              <Text style={styles.textHighlighted}>mood</Text>
              <Text style={styles.text}>today</Text>
            </View>
            <View style={styles.imagery}>
              <Image
                source={IconUtils.getIconByName('MISERABLE')}
                style={styles.icon}
              />
              <Text style={styles.textHighlighted}>?</Text>
              <Image
                source={IconUtils.getIconByName('AMAZING')}
                style={styles.icon}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  onMoodValueChange = (
    newMoodValue: string,
  ) => {
    this.setState({
      moodValue: newMoodValue,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 174,
  },
  innerContainer: {
    height: 174,
    padding: 12,
    justifyContent: 'space-around',
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
