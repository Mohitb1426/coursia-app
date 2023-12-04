/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
import SQLite from 'react-native-sqlite-storage';
import { debugLog } from '../common/Logger';

const TAG = 'DatabaseExecutor: ';
const db = SQLite.openDatabase('QuizDatabase.db', (success) => {
  debugLog(TAG, `database open success : ${success}`);
}, (error) => {
  debugLog(TAG, `database open error : ${JSON.stringify(error)}`);
});

// eslint-disable-next-line import/prefer-default-export
export const executeSql = (sql, params = []) => new Promise((resolve, reject) => {
  db.transaction((tx) => {
    tx.executeSql(sql, params, (sqlTransaction, results) => {
      resolve(results);
    }, (error) => {
      reject(error);
    });
  });
});

export const executeSelectSql = (sql, params = []) => new Promise((resolve, reject) => {
  db.transaction((tx) => {
    tx.executeSql(
      sql,
      params,
      (tx, results) => {
        const temp = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < results.rows.length; ++i) { temp.push(results.rows.item(i)); }
        resolve(temp);
      },
      (error) => {
        reject(error);
      },
    );
  });
});
