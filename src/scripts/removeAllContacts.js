import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    let allContacts = await readContacts();
    allContacts = [];
    await writeContacts(allContacts);
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
