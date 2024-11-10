import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();
    if (allContacts.length > 0) {
      allContacts.pop();
      await writeContacts(allContacts);
    } else {
      throw new Error('No contacts to remove');
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
