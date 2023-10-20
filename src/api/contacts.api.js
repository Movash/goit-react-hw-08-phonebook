import axios from 'axios';

export async function fetchContacts() {
  console.log('fetch')
  const { data } = await axios.get('contacts');
  return data;
}

export async function addContact(contactData) {
  const { data } = await axios.post(`contacts`, contactData);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}