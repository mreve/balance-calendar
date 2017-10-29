// @flow

import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import {
  CenteredRow,
  Column,
} from './../Components';
import AppView from './../AppView';
import DateUtils from './../utils/DateUtils';
import IconUtils from './../utils/IconUtils';

const { width, height } = Dimensions.get('window');

type Props = {
  navigation: Object,
};
type State = {
  moodValue: ?string,
  selectedDate: Date,
};

export default class MoodScreen extends React.Component<void, Props, State> {
  state: State;

  static navigationOptions = {
    title: 'Mood'
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      moodValue: this.props.navigation.state.params.moodValue,
      selectedDate: this.props.navigation.state.params.selectedDate,
    };
  }

  render() {
    return (
      <AppView>
        <View style={styles.selectedMoodSpace}>
          <CenteredRow fullWidth={true}>
            {this.state.moodValue != null
              ? <Image
                  source={IconUtils.getIconByName(this.state.moodValue)}
                  style={styles.largeIcon}
                />
              : null}
          </CenteredRow>
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>How are you</Text>
            <Text style={styles.textHighlighted}>feeling</Text>
            <Text style={styles.text}>today?</Text>
          </View>
          <CenteredRow>
            {this._getMoodsList()}
          </CenteredRow>
          <CenteredRow>
            <Text>
              {this.state.moodValue != null ? null : 'Hold face to set mood'}
            </Text>
          </CenteredRow>
        </View>
      </AppView>
    );
  }

  _getMoodsList = () => {
    const moods = [
      'MISERABLE', 'GLOOMY', 'MEH',
      'OK', 'CHEERFUL', 'BEAMING', 'AMAZING'
    ];
    let icons = [];
    for (let i = 0; i < moods.length; i++) {
      icons.push(
        <TouchableHighlight
          key={moods[i]}
          underlayColor={'transparent'}
          onPress={() => this._onSelectMood(moods[i])}>
          <Image
            source={IconUtils.getIconByName(moods[i])}
            style={styles.icon}
          />
        </TouchableHighlight>
      );
    }
    return icons;
  };

  _onSelectMood = (
    mood: string,
  ) => {
    this.setState({moodValue: mood});
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    marginBottom: 12,
  },
  text: {
    fontSize: 22,
  },
  textHighlighted: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  icon: {
    width: 32,
    height: 32,
    margin: 8,
  },
  imagery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  largeIcon: {
    width: 64,
    height: 64,
  },
  selectedMoodSpace: {
    minHeight: 140,
    justifyContent: 'center',
    width: width,
  },
  slider: {
    width: 200,
  },
});
