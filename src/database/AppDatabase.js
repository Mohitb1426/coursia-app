/* eslint-disable no-unused-vars */

import { create_table_migrations, register_migration } from './migrations';

const TAG = 'AppDatabase: ';
// eslint-disable-next-line import/prefer-default-export
export const run_database_migrations = async () => {
  await create_table_migrations();
};
