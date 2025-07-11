import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./ticket";
export const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
    },
});
