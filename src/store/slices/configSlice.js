/**
 * 此slice用于项目的全局配置
 */

import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        path: "/"
    },
    reducers: {
        updatePath: (state, action) => {
            state.path = action.payload
        }
    }
})

export const { updatePath } = configSlice.actions;
export default configSlice.reducer;
