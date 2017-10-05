import React from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, View } from 'react-native';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 'September',
      day: '26',
      weekday: 'Thursday',
      year: '2018',
    };
  }

  render() {
    let squares = this.getSquares();
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.month}>{this.state.month}</Text>
          <View style={styles.squarelist}>
            {squares}
          </View>
        </View>
      </ScrollView>
    );
  }

  getSquares(): array<React.Component> {
    return [
      this.getLeftSquare(),
      this.getCenterSquare(),
      this.getRightSquare(),
      this.getLeftSquare(),
      this.getCenterSquare(),
      this.getRightSquare(),
    ];
  }

  getLeftSquare(): React.Component {
    return (
      <View style={styles.squarerow}>
        <View style={styles.leftsquare}>
          <View style={styles.square}>
            <Text>Aligned to the left</Text>
          </View>
        </View>
      </View>
    );
  }

  getCenterSquare(): React.Component {
    return (
      <View style={styles.squarerow}>
        <View style={styles.centersquare}>
          <View style={styles.square}>
            <Text>Aligned to the center</Text>
          </View>
        </View>
      </View>
    );
  }

  getRightSquare(): React.Component {
    return (
      <View style={styles.squarerow}>
        <View style={styles.rightsquare}>
          <View style={styles.square}>
            <Text>Aligned to the right</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEC0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 30,
  },
  month: {
    fontSize: 30,
    marginBottom: 40,
  },
  squarerow: {
    flexDirection: 'row',
    width: '100%',
    height: 224,
    paddingHorizontal: 24,
  },
  leftsquare: {
    alignItems: 'flex-start',
    width: '100%',
  },
  centersquare: {
    alignItems: 'center',
    width: '100%',
  },
  rightsquare: {
    alignItems: 'flex-end',
    width: '100%',
  },
  square: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

module.exports = Home;
