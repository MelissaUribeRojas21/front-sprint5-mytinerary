import { configureStore } from "@reduxjs/toolkit";
import commentsAPI from './reducers/commentAPI'
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(commentsAPI.middleware),
});