// @flow

import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import {
  BCText,
  CenteredRow,
  CenteredColumn,
  Column,
} from './../Components';
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
              onMoodValueChange: (mood) => this.onMoodValueChange(mood),
            },
          )}>
          {this.state.moodValue == null
            ? this._getContentForUnsetMood()
            : this._getContentForSelectedMood(this.state.moodValue)}
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

  _getContentForUnsetMood = () => {
    return (
      <View style={styles.innerContainer}>
        <View style={styles.content}>
          <BCText
            type={'PRIMARY'}
            style={styles.text}>
            How{'\''}s your
          </BCText>
          <BCText
            type={'PRIMARY-HIGHLIGHTED'}
            style={styles.textHighlighted}>
            mood
          </BCText>
          <BCText
            type={'PRIMARY'}
            style={styles.text}>
            today
          </BCText>
        </View>
        <View style={styles.imagery}>
          <Image
            source={IconUtils.getIconByName('MISERABLE')}
            style={styles.icon}
          />
          <BCText
            type={'PRIMARY-HIGHLIGHTED'}
            style={styles.textHighlighted}>
            ?
          </BCText>
          <Image
            source={IconUtils.getIconByName('AMAZING')}
            style={styles.icon}
          />
        </View>
      </View>
    );
  };

  _getContentForSelectedMood = (
    mood: string,
  ) => {
    return (
      <View style={styles.innerContainer}>
        <CenteredRow fullWidth={true}>
          <Image
            source={IconUtils.getIconByName(mood)}
            style={styles.largeIcon}
          />
        </CenteredRow>
        <View>
          <CenteredRow fullWidth={true}>
            <BCText type={'SECONDARY'}>
              mood today:
            </BCText>
          </CenteredRow>
          <CenteredRow fullWidth={true}>
            <BCText type={'PRIMARY'}>
              {mood}
            </BCText>
          </CenteredRow>
        </View>
      </View>
    );
  }
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
  contentWithSetMood: {

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
  largeIcon: {
    height: 64,
    width: 64,
  }
});
