import moment from 'moment';
import uuid from 'react-native-uuid';

export const getRandomID = () => {
  return uuid.v4();
};
//*
// *
//* @param {*} dateString
//* @param {*} field (date/month)
// */
export const getFieldsInDate = (dateString, field, translations) => {
  const date = moment(dateString, 'DD-MM-YYYY').toDate();
  let result = '';
  switch (field) {
    case 'date':
      result = date.getDate();
      break;
    case 'month':
      result = getMonthShortName(date.getMonth(), translations);
      break;
    default:
      result = date.getDate();
  }
  return result;
};

function getMonthShortName(monthNumber, translations) {
  switch (monthNumber) {
    case 0:
      return translations.MONTH_JAN;
    case 1:
      return translations.MONTH_FEB;
    case 2:
      return translations.MONTH_MAR;
    case 3:
      return translations.MONTH_APR;
    case 4:
      return translations.MONTH_MAY;
    case 5:
      return translations.MONTH_JUN;
    case 6:
      return translations.MONTH_JUL;
    case 7:
      return translations.MONTH_AUG;
    case 8:
      return translations.MONTH_SEP;
    case 9:
      return translations.MONTH_OCT;
    case 10:
      return translations.MONTH_NOV;
    case 11:
      return translations.MONTH_DEC;
    default:
      return '';
  }
}
export const getName = (string, type) => {
  let result = '';
  if (string) {
    const a = string.split(' ');
    if (type === 'lastname' && a.length > 1) {
      result = a[a.length - 1];
    }

    if (type === 'firstname' && string.includes(' ')) {
      const lastIndex = string.lastIndexOf(' ');
      result = string.substring(0, lastIndex);
    }
  }
  return result.trim();
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
