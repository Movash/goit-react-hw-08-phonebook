import { createSlice } from '@reduxjs/toolkit';
import { addNewContact, getAllContacts, removeContact } from './thunks';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.items = payload;
      })
      .addCase(addNewContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload);
      })
  },
});

export const contactsReducer = contactsSlice.reducer;