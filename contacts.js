const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const contactList = await listContacts();
    return contactList.find(contact => contact.id === contactId.toString());
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const contactList = await listContacts();
    const updatedContactList = contactList.filter(
      contact => contact.id !== contactId.toString(),
    );

    fs.writeFile(contactsPath, JSON.stringify(updatedContactList), 'utf8');
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contactList = await listContacts();
    const data = { id: '11', name, email, phone };
    const newData = [...contactList, data];

    fs.writeFile(contactsPath, JSON.stringify(newData), 'utf8');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
