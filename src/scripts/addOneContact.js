import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    const newContact = createFakeContact();
    contacts.push(newContact);

    const stringifyContacts = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, stringifyContacts, 'utf8');
    // await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('Contact added:', newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

await addOneContact();