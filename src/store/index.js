import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slices/configSlice";
import whistleReducer from "./slices/whistleSlice";

export default configureStore({
    reducer: {
        config: configReducer,
        whistle: whistleReducer
    }
})