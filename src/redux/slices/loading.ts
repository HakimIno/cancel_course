import { createSlice } from "@reduxjs/toolkit";
// ----------------------------------------------------------------------
export interface ILoadingState {
    isLoading: boolean;
}
const initialState: ILoadingState = {
    isLoading: false,
};

const slice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        endLoading(state) {
            state.isLoading = false;
        },
    },
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, endLoading } = slice.actions;

// ----------------------------------------------------------------------
