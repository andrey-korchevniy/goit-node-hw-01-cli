const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

const { program } = require('commander');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const list = await listContacts();
      console.log(list);
      break;

    case 'get':
      const oneContact = await getContactById(id);
      console.log(oneContact);
      break;

    case 'add':
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn('Unknown action type!');
  }
}

program
  .option('-a, --action <type>')
  .option('-i, --id <type>')
  .option('-n, --name <type>')
  .option('-e, --email <type>')
  .option('-p, --phone <type>');

program.parse();

const options = program.opts();
invokeAction(options);
