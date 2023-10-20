import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  value: boolean;
}

const initialState: InitialState = {
  value: false,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {
    setCommentStatus: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCommentStatus } = commentSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default commentSlice.reducer;
