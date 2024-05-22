import chalk from 'chalk';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const contactsParse = JSON.parse(await fs.readFile(PATH_DB));
    const filteredContacts = contactsParse.filter(() => Math.random() > 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts,  null, 2));
    console.log(chalk.magenta.bold('Saved contacts:'));
    console.table(filteredContacts);
  } catch (error) {
    console.error(chalk.red.bold('Data cannot be deleted', error));
  }
};

await thanos();
