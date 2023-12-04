import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { debugLog } from './Logger';
import { captureComponentErrors } from '../utilities/Sentry';

const TAG = 'ErrorHandler: ';
class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    debugLog(TAG, { error, info });
    const { componentName } = this.props;
    const fileName = componentName || '';
    captureComponentErrors(error, fileName);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children, onErrorComponent } = this.props;

    if (onErrorComponent && hasError) {
      return (
        <View>
          {onErrorComponent}
        </View>
      );
    }

    return hasError ? <View /> : children;
  }
}

ErrorHandler.propTypes = {
  children: PropTypes.any,
  componentName: PropTypes.string,
  onErrorComponent: PropTypes.any, // should be a component eg. <Text>
};

export default ErrorHandler;
