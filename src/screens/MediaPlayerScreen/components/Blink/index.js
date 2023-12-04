/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Animated, View } from 'react-native';

export class Blink extends Component {
  constructor(props) {
    super(props);
    this.fadeAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.fadeAnimation, {
          toValue: 0,
          // eslint-disable-next-line react/destructuring-assignment, react/prop-types
          duration: this.props.duration,
          useNativeDriver: true,
        }),
        Animated.timing(this.fadeAnimation, {
          toValue: 1,
          // eslint-disable-next-line react/destructuring-assignment, react/prop-types
          duration: this.props.duration,
          useNativeDriver: true,
        }),
      ]),
      {
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        iterations: this.props.repeat_count,
      },
    ).start();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      <View style={{ ...this.props.style }}>
        <Animated.View style={{ opacity: this.fadeAnimation }}>
          {children}
        </Animated.View>
      </View>
    );
  }
}
