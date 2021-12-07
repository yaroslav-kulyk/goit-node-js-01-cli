const fs = require('fs');
const path = require('path');

// console.log(path.resolve('./db/contacts.json'));

const contactsPath = path.resolve('./db/contacts.json');
console.log(contactsPath);

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath, 'utf8', (error, data) => {
    console.table(JSON.parse(data).map(contact => contact));
  });
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

listContacts();
