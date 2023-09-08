import { configureStore } from "@reduxjs/toolkit";
import recipesAllSlice from "./recipesAllSlice";


export const store = configureStore({
    reducer: {
        recipes : recipesAllSlice,
    }
})