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

type State = {
  fontsLoaded: boolean,
};

export default class AppView extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {fontsLoaded: false};
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'SteelCityComic': require('./../fonts/SteelCityComic.ttf'),
      'Amatic-Regular': require('./../fonts/Amatic-Regular.ttf'),
      'Amatic-Bold': require('./../fonts/Amatic-Bold.ttf'),
    });
    this.setState({fontsLoaded: true});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsLoaded
          ? this.props.children
          : <Text>'Loading...'</Text>}
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
