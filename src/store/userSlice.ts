// userSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/Interfaces";

interface UserState {
  general: User[];
  selected: User[];
}

const initialState: UserState = { general: [], selected: [] };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setGeneral: (state, action: PayloadAction<User[]>) => {
      state.general = action.payload;
    },
    setSelected: (state, action: PayloadAction<User[]>) => {
      state.selected = action.payload;
    },
    moveToSelected: (state, action: PayloadAction<User>) => {
      state.general = state.general.filter(u => u.id !== action.payload.id);
      state.selected.push(action.payload);
    },
    moveToGeneral: (state, action: PayloadAction<User>) => {
      state.selected = state.selected.filter(u => u.id !== action.payload.id);
      state.general.push(action.payload);
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.general.push(action.payload);
    },
  },
});

export const { setGeneral, setSelected, moveToSelected, moveToGeneral, addUser } = userSlice.actions;
export default userSlice.reducer;
