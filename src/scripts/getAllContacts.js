import chalk from 'chalk';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const getAllContacts = async () => {
    try {
    const contacts = await fs.readFile(PATH_DB);
    const contactsParse = JSON.parse(contacts);
    console.table(contactsParse);
    } catch (error) {
    console.log(chalk.red.bold('Unable to read a file:', error));

    }

};

console.log(await getAllContacts());
