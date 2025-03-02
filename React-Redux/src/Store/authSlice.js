import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = {
    isAuthenticated : false
}



const authSlice = createSlice({
    name : 'auth',
    initialState : initialAuthState,
    reducers : {
        login(state) {state.isAuthenticated = true},
        logout(state) {state.isAuthenticated = false}
    }

});

export const createAuthActions = authSlice.actions;

export default authSlice.reducer;