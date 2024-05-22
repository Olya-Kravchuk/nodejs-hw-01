import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    // await fs.writeFile(PATH_DB, '[]', 'utf8');
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2), 'utf8');
    console.log('All contacts have been successfully removed.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

await removeAllContacts();

