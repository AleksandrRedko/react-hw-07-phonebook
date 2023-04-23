import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: {
    // * Fetch contacts
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    // * ADD contact
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    // * Delete Contact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    },

    [deleteContact.rejected]: handleRejected,
  },
});
// export const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: contactsInitialState,
//   reducers: {
//     // Выполнится в момент старта HTTP-запроса
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     // Выполнится если HTTP-запрос завершился успешно
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     // Выполнится если HTTP-запрос завершился с ошибкой
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     //====================
//     addedInProgress(state) {
//       state.isLoading = true;
//     },
//     // Выполнится если HTTP-запрос завершился успешно
//     addedSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;

//       state.items.push(action.payload);
//     },
//     // Выполнится если HTTP-запрос завершился с ошибкой
//     addedError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     //============delete
//     deleteInProgress(state) {
//       state.isLoading = true;
//     },
//     // Выполнится если HTTP-запрос завершился успешно
//     deleteSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;

//       const index = state.items.findIndex(
//         (contact) => contact.id === action.payload
//       );
//       state.items.splice(index, 1);
//     },
//     // Выполнится если HTTP-запрос завершился с ошибкой
//     deleteError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
// export const {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
//   addedInProgress,
//   addedSuccess,
//   addedError,
//   deleteInProgress,
//   deleteSuccess,
//   deleteError,
// } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
