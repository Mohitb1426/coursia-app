import React, {
  createContext,
  useCallback, useMemo, useState,
} from 'react';
import propTypes from 'prop-types';
import ButtonInterceptor from './ButtonInterceptor';
import Config from '../../Config';

export const NetworkLoggerContext = createContext({});

function NetworkLoggerConsumer({ children }) {
  return (
    <NetworkLoggerContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error(
            'NetworkLoggerConsumer must be used within a NetworkLoggerProvider',
          );
        }
        return children(context);
      }}
    </NetworkLoggerContext.Consumer>
  );
}

function NetworkLoggerProvider({ children }) {
  const [isOpen, setOpen] = useState(true);

  const toggleInterceptor = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const mProps = useMemo(() => ({
    toggleInterceptor,
    isOpen,
  }), [isOpen]);

  return (
    <NetworkLoggerContext.Provider value={mProps}>
      {children}
      <ButtonInterceptor show={Config.useInterceptor} />
    </NetworkLoggerContext.Provider>
  );
}

NetworkLoggerProvider.propTypes = {
  children: propTypes.any,
};

NetworkLoggerConsumer.propTypes = {
  children: propTypes.any,
};
export default NetworkLoggerProvider;
