import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    console.log('Successfully read contacts from the database.');

    const contacts = JSON.parse(data);

    if (!Array.isArray(contacts)) {
      throw new Error('Data is not an array');
    }

    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0;
  }
};

console.log(await countContacts());