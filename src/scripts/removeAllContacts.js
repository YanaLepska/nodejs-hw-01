import chalk from 'chalk';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const removeAllContacts = async () => {
    try {

        const dataRemove = await fs.writeFile(PATH_DB, "[]");
        console.log("Data Base is ampty");
        return dataRemove;

    } catch (error) {
               console.error(chalk.red.bold('Data cannot be deleted', error));

    }

};

await removeAllContacts();
