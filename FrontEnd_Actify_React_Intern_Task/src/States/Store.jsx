import { configureStore } from "@reduxjs/toolkit";
import { UserProfile } from "./UserProfile/UserProfileSlice";


export const Store = configureStore({
    reducer: {
        user: UserProfile.reducer,
    }
})