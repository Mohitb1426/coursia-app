import moment from 'moment';

export const getRelativeTime = (translations) => {
  const relativeTimeEnglish = {
    future: 'in %s',
    past: '%s ago',
    s: translations.FEW_SECONDS_AGO,
    ss: `%d ${translations.SECONDS_AGO}`,
    m: `%d ${translations.MINUTE_AGO}`,
    mm: `%d ${translations.MINUTES_AGO}`,
    h: `%d ${translations.HOUR_AGO}`,
    hh: `%d ${translations.HOURS_AGO}`,
    d: `%d ${translations.DAY_AGO}`,
    dd: `%d ${translations.DAYS_AGO}`,
    w: `%d ${translations.WEEK_AGO}`,
    ww: `%d ${translations.WEEKS_AGO}`,
    M: `%d ${translations.MONTH_AGO}`,
    MM: `%d ${translations.MONTHS_AGO}`,
    y: `%d ${translations.YEAR_AGO}`,
    yy: `%d ${translations.YEARS_AGO}`,
  };
  return relativeTimeEnglish;
};

export const getFormattedDate = (date) => {
  return moment(date, 'DD-MM-YYYY').toDate();
};
