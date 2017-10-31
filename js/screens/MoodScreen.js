// @flow

import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import {
  BCText,
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
  scale: number,
  selectedDate: Date,
  timeElapsed: number,
};

const TIME_INTERVAL = 15.0;
const TIME_FINISH = 750.0;
const MAX_SCALE = 1.1;

export default class MoodScreen extends React.Component<void, Props, State> {
  state: State;

  timer: ?number;

  static navigationOptions = {
    title: 'Mood'
  };

  constructor(props: Props) {
    super(props);

    const mood = this.props.navigation.state.params.moodValue;
    this.state = {
      moodValue: mood,
      scale: mood == null ? 0 : MAX_SCALE,
      selectedDate: this.props.navigation.state.params.selectedDate,
      timeElapsed: 0,
    };
    this.timer = null;
    this._onFacePress = this._onFacePress.bind(this);
    this._onFacePressEnd = this._onFacePressEnd.bind(this);
  }

  render() {
    return (
      <AppView>
        <View style={styles.selectedMoodSpace}>
          <CenteredRow fullWidth={true}>
            <View
              style={
                this.state.scale >= MAX_SCALE
                  ? null
                  : styles.selectedMoodOutline
              }>
              {this.state.moodValue != null
                ? <Animated.Image
                    source={IconUtils.getIconByName(this.state.moodValue)}
                    style={[
                      styles.largeIcon,
                      {transform: [{scale: this.state.scale}]},
                    ]}
                  />
                : null}
              </View>
          </CenteredRow>
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <BCText type={'PRIMARY'} style={styles.text}>How are you</BCText>
            <BCText
              type={'PRIMARY-HIGHLIGHTED'}
              style={styles.textHighlighted}>
              feeling
            </BCText>
            <BCText type={'PRIMARY'} style={styles.text}>today?</BCText>
          </View>
          <CenteredRow>
            {this._getMoodsList()}
          </CenteredRow>
          <CenteredRow>
            <BCText type={'HINT'}>
              {this.state.moodValue != null ? null : 'Hold face to set mood'}
            </BCText>
          </CenteredRow>
        </View>
      </AppView>
    );
  }

  _onFacePress = (
    mood: string,
  ) => {
    if (this.state.mood != null && this.state.scale >= MAX_SCALE) {
      // Mood is already set
      return;
    }

    const timeElapsed = this.state.timeElapsed + TIME_INTERVAL;
    let scale = timeElapsed / TIME_FINISH;

    scale = Math.sqrt(scale) * 1.7; // Faster
    scale = Math.max(scale, 0.2); // Make it not grow from 0, so it's faster
    scale = Math.min(scale, MAX_SCALE); // Don't let it grow too much

    if (scale >= MAX_SCALE) {
      // Set the mood, clear everything
      clearTimeout(this.timer);
      this.setState({
        moodValue: mood,
        scale: MAX_SCALE,
        timeElapsed: timeElapsed,
      });
      return;
    }

    this.setState({moodValue: mood});

    // Grow the selected emoji while user holds the right face
    this.setState({
      scale: scale,
      timeElapsed: timeElapsed,
    });
    this.timer = setTimeout(this._onFacePress.bind(this, mood), TIME_INTERVAL);
  };

  _onFacePressEnd = (
    mood: string,
  ) => {
    if (this.state.scale >= MAX_SCALE && this.state.moodValue == mood) {
      // Mood is set, don't clear the scale
      this.setState({
        timeElapsed: 0,
      });
      this.props.navigation.state.params.onMoodValueChange(mood);
    } else {
      this.setState({
        moodValue: null,
        timeElapsed: 0,
        scale: 0,
      });
    }
    clearTimeout(this.timer);
  };

  _getMoodsList = () => {
    const moods = IconUtils.getMoods();
    let icons = [];
    for (let i = 0; i < moods.length; i++) {
      icons.push(
        <TouchableHighlight
          key={moods[i]}
          underlayColor={'transparent'}
          onPressIn={() => this._onFacePress(moods[i])}
          onPressOut={() => this._onFacePressEnd(moods[i])}>
          <Image
            source={IconUtils.getIconByName(moods[i])}
            style={styles.icon}
          />
        </TouchableHighlight>
      );
    }
    return icons;
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
  selectedMoodOutline: {
    borderRadius: 50,
    borderStyle: 'dotted',
    borderWidth: 2,
    height: 68,
    margin: 12,
    width: 68,
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
