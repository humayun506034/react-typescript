import { RootState } from "@/redux/store";
import { IUser } from "./../../../types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "3DA0oA-a9Be4vzL9f0C0x",
      name: "Humayun",
    },
    {
      id: "3DA0oA-a9Be4vzL9f0C0xsfgdfg",
      name: "Juyel",
    },
  ],
};

export type DraftUser = Pick<IUser, "name">;

const createUser = (data: DraftUser): IUser => {
  return {
    id: nanoid(),
    ...data,
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const user = createUser(action.payload);
      state.users.push(user);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => {
  return state.user.users;
};
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
