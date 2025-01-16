import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching all users
export const allUsers = createAsyncThunk("user/allUsers", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/actify`);
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error;
        }
        return rejectWithValue(error.response.data);
    }
});

// Async thunk for adding a new user
export const addUser = createAsyncThunk("user/addUser", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:8080/api/actify", userData);
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error;
        }
        return rejectWithValue(error.response.data);
    }
});

// Redux slice
export const UserProfile = createSlice({
    name: "UserProfile",
    initialState: {
        loading: false,
        errors: null,
        userList: [], // Complete list of users
        filteredUsers: [], // Filtered users based on criteria
        user: {}, // For individual user data
    },
    reducers: {
        // Reducer for filtering users based on state or city
        searchBasedOn: (state, action) => {
            // const { state: state, city: city } = action.payload;

            console.log("User city", action.payload.city);


            state.filteredUsers = state.userList.filter((user) => {
                const matchesCity = action.payload.city
                    ? user.city.toLowerCase() === action.payload.city.toLowerCase()
                    : true;

                return matchesCity;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            // Adding user case
            .addCase(addUser.pending, (state) => {
                state.loading = true;
                state.errors = null;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userList = [action.payload, ...state.userList];
                state.filteredUsers = [action.payload, ...state.filteredUsers];
                state.errors = null;
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
                console.error("Error adding user:", action.payload);
            })
            // Fetching all users case
            .addCase(allUsers.pending, (state) => {
                state.loading = true;
                state.errors = null;
            })
            .addCase(allUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.userList = action.payload;
                state.filteredUsers = action.payload;
                state.errors = null;
            })
            .addCase(allUsers.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
                console.error("Error fetching users:", action.payload);
            });
    },
});

// Exporting the reducer actions
export const { searchBasedOn } = UserProfile.actions;

// Export the reducer
export default UserProfile.reducer;
