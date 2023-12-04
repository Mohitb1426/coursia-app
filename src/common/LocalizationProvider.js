import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import propTypes from 'prop-types';
import { debugLog } from './Logger';
import english from '../assets/lang/en';
import tamil from '../assets/lang/tn';

const TAG = 'LocalizationProvider: ';

export const LANGUAGE_ENGLISH = 'en';
export const LANGUAGE_TAMIL = 'tn';
const DEFAULT_LANGUAGE = LANGUAGE_ENGLISH;

export const LocalizationContext = createContext({});

export function LocalizationConsumer({ children }) {
  return (
    <LocalizationContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error('LocalizationConsumer must be used within a LocalizationProvider');
        }
        return children(context);
      }}
    </LocalizationContext.Consumer>
  );
}

LocalizationConsumer.propTypes = {
  children: propTypes.any,
};

export function LocalizationProvider({ children }) {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);
  const translations = {
    [LANGUAGE_ENGLISH]: english,
    [LANGUAGE_TAMIL]: tamil,
  };

  useEffect(() => {
    debugLog(TAG, `init language : ${appLanguage}`);
  }, [appLanguage]);

  const mProps = useMemo(
    () => ({
      appLanguage,
      setAppLanguage,
      translations: translations[appLanguage],
    }),
    [appLanguage],
  );

  return <LocalizationContext.Provider value={mProps}>{children}</LocalizationContext.Provider>;
}

LocalizationProvider.propTypes = {
  children: propTypes.any,
};
