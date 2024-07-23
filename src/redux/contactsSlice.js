import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, actions) {
        state.items.push(actions.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, actions) {
      state.items = state.items.filter(
        (contact) => contact.id !== actions.payload
      );
    },
  },
});

export default slice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = slice.actions;
