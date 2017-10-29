// @flow

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

type Props = {
  children: any,
  fullHeight?: boolean,
  fullWidth?: boolean,
  height?: ?number,
  width?: ?number,
};

export class CenteredRow extends React.Component<void, Props, void> {
  render() {
    const styleFromProps = get_style_from_props(this.props);

    return (
      <View style={[styles.center, styles.row, styleFromProps]}>
        {this.props.children}
      </View>
    );
  }
}

export class CenteredColumn extends React.Component<void, Props, void> {
  render() {
    const styleFromProps = get_style_from_props(this.props);

    return (
      <View style={[styles.center, styles.column, styleFromProps]}>
        {this.props.children}
      </View>
    );
  }
}

export class Row extends React.Component<void, Props, void> {
  render() {
    const styleFromProps = get_style_from_props(this.props);

    return (
      <View style={[styles.row, styleFromProps]}>
        {this.props.children}
      </View>
    );
  }
}

export class Column extends React.Component<void, Props, void> {
  render() {
    const styleFromProps = get_style_from_props(this.props);

    return (
      <View style={[styles.column, styleFromProps]}>
        {this.props.children}
      </View>
    );
  }
}

function get_style_from_props(
  props: Props,
): Object {
  let styleFromProps = {};

  if (props.width != null) {
    styleFromProps.width = props.width;
  } else if (props.fullWidth === true) {
    styleFromProps.width = '100%';
  }

  if (props.height != null) {
    styleFromProps.height = props.height;
  } else if (props.fullHeight === true) {
    styleFromProps.height = '100%';
  }

  return styleFromProps;
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
