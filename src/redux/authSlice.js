import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            email: "demo@shop.com",
            password: "123456"
          },
        isAuthenticated: false
    },
    reducers: {
        registerUser: (state, action) => {
          state.user = action.payload;
          state.isAuthenticated = true;
          localStorage.setItem("registeredUser", JSON.stringify(action.payload));
        },
        loginUser: (state, action) => {
          const { email, password } = action.payload;
          const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
          if (
            storedUser &&
            storedUser.email === email &&
            storedUser.password === password
          ) {
            state.user = storedUser;
            state.isAuthenticated = true;
          }
        },
        logoutUser: (state) => {
          state.user = null;
          state.isAuthenticated = false;
        }
      }
        
    }


)

export const {registerUser, loginUser, logoutUser}= authSlice.actions
export default authSlice.reducer;