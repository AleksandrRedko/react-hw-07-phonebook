import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6443b00e90738aa7c075a964.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteTask",
  async (Id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${Id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
//   addedInProgress,
//   addedSuccess,
//   addedError,
//   deleteInProgress,
//   deleteSuccess,
//   deleteError,
// } from "./sliceContacts";

// export const fetchContacts = () => async (dispatch) => {
// try {
//   dispatch(fetchingInProgress());
//   const response = await axios.get("/contacts");
//   dispatch(fetchingSuccess(response.data));
// } catch (error) {
//   dispatch(fetchingError(error.message));
// }
// };

// export const addContact = (newContact) => async (dispatch) => {
//   try {
//     dispatch(addedInProgress());
//     const response = await axios.post("/contacts", newContact);
//     dispatch(addedSuccess(response.data));
//   } catch (error) {
//     dispatch(addedError(error.message));
//   }
// };
// export const deleteContact = (id) => async (dispatch) => {
//   try {
//     dispatch(deleteInProgress());
//     const response = await axios.delete(`/contacts/${id} `);

//     dispatch(deleteSuccess(response.data));
//   } catch (error) {
//     dispatch(deleteError(error.message));
//   }
// };
