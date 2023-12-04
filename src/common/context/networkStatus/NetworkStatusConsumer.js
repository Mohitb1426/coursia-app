import React from 'react';
import propTypes from 'prop-types';
import NetworkStatusContext from './NetworkStatusContext';

function NetworkStatusConsumer({ children }) {
  return (
    <NetworkStatusContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error(
            'NetworkStatusConsumer must be used within a NetworkStatusProvider',
          );
        }
        return children(context);
      }}
    </NetworkStatusContext.Consumer>
  );
}

NetworkStatusConsumer.propTypes = {
  children: propTypes.any,
};

export default NetworkStatusConsumer;
