import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    console.log('Starting the process of generating contacts...');

    const data = await fs.readFile(PATH_DB, 'utf8');
    console.log('Successfully read existing contacts from the database.');

    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
      console.log('Generated new contact:', newContact);
    }

    const stringifyContacts = JSON.stringify(contacts, null, 2);

    await fs.writeFile(PATH_DB, stringifyContacts, 'utf8');
    console.log('Successfully wrote updated contacts back to the database.');

    console.log(`Successfully added ${number} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);