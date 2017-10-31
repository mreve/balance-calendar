// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type RCProps = {
  children: any,
  fullHeight?: boolean,
  fullWidth?: boolean,
  height?: ?number,
  width?: ?number,
};

export class CenteredRow extends React.Component<void, RCProps, void> {
  render() {
    const styleFromRCProps = get_style_from_rcprops(this.props);

    return (
      <View style={[styles.center, styles.row, styleFromRCProps]}>
        {this.props.children}
      </View>
    );
  }
}

export class CenteredColumn extends React.Component<void, RCProps, void> {
  render() {
    const styleFromRCProps = get_style_from_rcprops(this.props);

    return (
      <View style={[styles.center, styles.column, styleFromRCProps]}>
        {this.props.children}
      </View>
    );
  }
}

export class Row extends React.Component<void, RCProps, void> {
  render() {
    const styleFromRCProps = get_style_from_rcprops(this.props);

    return (
      <View style={[styles.row, styleFromRCProps]}>
        {this.props.children}
      </View>
    );
  }
}

export class Column extends React.Component<void, RCProps, void> {
  render() {
    const styleFromRCProps = get_style_from_rcprops(this.props);

    return (
      <View style={[styles.column, styleFromRCProps]}>
        {this.props.children}
      </View>
    );
  }
}

function get_style_from_rcprops(
  props: RCProps,
): Object {
  let styleFromRCProps = {};

  if (props.width != null) {
    styleFromRCProps.width = props.width;
  } else if (props.fullWidth === true) {
    styleFromRCProps.width = '100%';
  }

  if (props.height != null) {
    styleFromRCProps.height = props.height;
  } else if (props.fullHeight === true) {
    styleFromRCProps.height = '100%';
  }

  return styleFromRCProps;
}

type TextProps = {
  type: 'PRIMARY' | 'SECONDARY' | 'PRIMARY-HIGHLIGHTED' | 'HINT',
  style: Object,
}

export class BCText extends React.Component<void, TextProps, void> {
  render() {
    let style = {fontFamily: 'SteelCityComic'};

    switch (this.props.type) {
      case 'PRIMARY': style.fontSize = 22; break;
      case 'SECONDARY': style.fontSize = 18; break;
      case 'PRIMARY-HIGHLIGHTED': style.fontSize = 26; break;
      case 'HINT': style.fontSize = 16; break;
      default: throw new Error('Unknown BCText type: ' + this.props.type);
    }

    return (
      <Text style={[style, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});
