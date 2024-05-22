import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import chalk from 'chalk';

export const countContacts = async () => {
  try {
    const contactsParse = JSON.parse(await fs.readFile(PATH_DB));
    console.log(chalk.magenta.bold(`Amount of contacts: ${contactsParse.length}.`));
  } catch (error) {
    console.log(chalk.red.bold('Ooops, something went wrong 😥', error));
  }
};

console.log(await countContacts());
