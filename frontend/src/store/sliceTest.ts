import { ISliceTest } from "@packages/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {} as ISliceTest;

const instanceSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    initAction: (state, action: { type: string; payload: ISliceTest }) => {
      console.log(state, action.payload);
    },
  },
});

export const { initAction } = instanceSlice.actions;
export default instanceSlice.reducer;
