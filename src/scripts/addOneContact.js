import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  let addContacts = [];
  const contacts = createFakeContact();
  addContacts.push(contacts);
  try {
    const allContacts = await readContacts();
    const newContacts = [...allContacts, ...addContacts];
    await writeContacts(newContacts);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
