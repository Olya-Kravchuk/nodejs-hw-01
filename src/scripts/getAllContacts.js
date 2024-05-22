import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {

    const data = await fs.readFile(PATH_DB, 'utf8');
    console.log('Successfully read contacts from the database.');

    const contacts = JSON.parse(data);

    if (!Array.isArray(contacts)) {
      throw new Error('Data is not an array');
    }

    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());