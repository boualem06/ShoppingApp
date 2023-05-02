import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", price: 0, description: "",imageUrl:"" };

export const EditElementSlice = createSlice({
  name: "EditElement",
  initialState: { value: initialStateValue ,edit:false},
  reducers: {
    setEditElement: (state, action) => {
      state.value = action.payload;
    },
    setEdit: (state, action) => {
        state.edit = action.payload;
      },
  },
});

export const { setEditElement,setEdit } = EditElementSlice.actions;

export default EditElementSlice.reducer;