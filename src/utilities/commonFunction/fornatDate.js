import { format } from 'date-fns';
import moment from 'moment-timezone';

export function formatDate(dateString) {
  const date = new Date(dateString);
  return format(date, 'dd MMM yy');
}

export function getDate(date) {
  return moment(date).format('DD MMM YYYY');
}
