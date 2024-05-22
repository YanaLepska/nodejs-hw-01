import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import chalk from 'chalk';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB);
    const dataParse = JSON.parse(data);
    for (let i = 0; i < number; i += 1) {
      dataParse.push(createFakeContact());
    }
    const newData = JSON.stringify(dataParse, null, 2);
    await fs.writeFile(PATH_DB, newData);
      console.log(chalk.blue.bold('Contacts was generated successfully!'));
  } catch (error) {
    console.log(chalk.red.bold('Ooops, something went wrong 😥', error));
  }
};

await generateContacts(8);
