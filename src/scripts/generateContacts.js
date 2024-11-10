import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  let addContacts = [];

  for (let i = 0; i < number; i++) {
    const contacts = createFakeContact();
    addContacts.push(contacts);
  }

  try {
    const allContacts = await readContacts();
    const newContacts = [...allContacts, ...addContacts];
    await writeContacts(newContacts);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
