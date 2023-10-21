import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "api/contacts.api";

export const getAllContacts = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

// export const getAllContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const data = await fetchContacts();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  contactData => addContact(contactData)
);

export const removeContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteContact(id)
);