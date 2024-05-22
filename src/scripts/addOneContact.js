import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import chalk from 'chalk';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const dataParse = JSON.parse(data);
    dataParse.push(createFakeContact());
    const newDataParse = JSON.stringify(dataParse, null, 2);
    await fs.writeFile(PATH_DB, newDataParse);
    console.log(chalk.blue.bold('Contact was added successfully!'));
  } catch (error) {
    console.log(chalk.red.bold('Ooops, something went wrong 😥', error));
  }
};

await addOneContact();
