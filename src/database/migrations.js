/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable quotes */
import { executeSql, executeSelectSql } from './DatabaseExecutor';
import DatabaseTable from './DatabaseTable';
import { debugLog } from '../common/Logger';

const TAG = 'migrations: ';
const table_name = DatabaseTable.TABLE_QUIZ;
export const create_table_migrations = async () => {
  let query = `create table if not exists ${table_name}(`;
  query += `id integer primary key autoincrement, `;
  query += `sectionId CHAR(50),`,
  query += `sectionName CHAR(50),`,
  query += `questionId CHAR(50),`,
  query += `questionName TEXT,`,
  query += `sectionOrder TEXT,`,
  query += `questionOrder TEXT,`,
  query += `options BLOB,`,
  query += `questionTime TEXT,`;
  query += `sectionTime TEXT,`;
  query += `questionNegativeMarks TEXT,`;
  query += `questionMarks TEXT,`;
  query += `questionUnattemptedMarks TEXT,`;
  query += `questionGroupId TEXT,`;
  query += `selectedOption TEXT )`;

  try {
    const dropQuery = `DROP TABLE IF EXISTS ${table_name}`;
    // eslint-disable-next-line no-unused-vars
    const dropResult = await executeSql(dropQuery, []);
    const results = await executeSql(query, []);
    debugLog(TAG, `created ${table_name} success ${JSON.stringify(results)}`);
  } catch (error) {
    debugLog(TAG, `creation error on ${table_name}${JSON.stringify(error)}`);
  }
};

export const register_migration = async (sectionId, sectionName, questionId, questionName, options, sectionOrder, questionOrder, questionTime, sectionTime, questionNegativeMarks, questionMarks, questionUnattemptedMarks, questionGroupId, selectedOption) => {
  let query = `insert into ${table_name}(`;
  query += `sectionId,sectionName,questionId,questionName,sectionOrder,questionOrder,options,questionTime,sectionTime,questionNegativeMarks,questionMarks,questionUnattemptedMarks,questionGroupId,selectedOption)`;
  query += `VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  try {
    await executeSql(query, [sectionId, sectionName, questionId, questionName, sectionOrder, questionOrder, options, questionTime, sectionTime, questionNegativeMarks, questionMarks, questionUnattemptedMarks, questionGroupId, selectedOption]);
    debugLog(TAG, `successfully insert in ${table_name}`);
  } catch (error) {
    debugLog(TAG, `insert error in ${table_name} :${JSON.stringify(error)}`);
  }
};

export const get_register_data = async () => {
  const query = `SELECT * FROM ${table_name}`;
  try {
    const result = await executeSelectSql(query, []);
    return result;
  } catch (error) {
    debugLog(TAG, `insert error in ${table_name} :${JSON.stringify(error)}`);
    return error;
  }
};

export const update_Question_Time = async (questionId, questionTime) => {
  const query = `UPDATE ${table_name} set questionTime=? where questionId=?`;
  try {
    await executeSql(query, [questionTime, questionId]);
    debugLog(TAG, `Update successfully insert in ${table_name}`);
  } catch (error) {
    debugLog(TAG, `Update error in ${table_name} :${JSON.stringify(error)}`);
  }
};

export const get_question_data = async (questionId) => {
  const query = `SELECT * FROM ${table_name} where questionId = ?`;
  try {
    const result = await executeSelectSql(query, [questionId]);
    return result;
  } catch (error) {
    debugLog(TAG, `get error in ${table_name} :${JSON.stringify(error)}`);
    return error;
  }
};

export const get_section_data = async (sectionId) => {
  const query = `SELECT * FROM ${table_name} where sectionId = ?`;
  try {
    const result = await executeSelectSql(query, [sectionId]);
    return result;
  } catch (error) {
    debugLog(TAG, `get error in sectionId ${table_name} :${JSON.stringify(error)}`);
    return error;
  }
};
