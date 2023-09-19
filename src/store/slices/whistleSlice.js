/**
 * 此slice用于存放whistle的实例
 */

import { createSlice } from "@reduxjs/toolkit";

const whistleSlice = createSlice({
    name: "whistle",
    initialState: {
        whistleInstance: false,
        globalProxy: false
    },
    reducers: {
        setWhistleInstance: (state, action) => {
            state.whistleInstance = action.payload
        },
        setGlobalProxy: (state, action) => {
            state.globalProxy = action.payload
        }
    }
})

export const { setWhistleInstance, setGlobalProxy} = whistleSlice.actions;
export default whistleSlice.reducer;
