import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        IsAuth: false
    },
    reducers: {

        registrUser(state, action) {
            state.user.push(action.payload);
        },

        Auth(state) {
            state.IsAuth = true
        },
        ExitUser(state) {
            state.IsAuth = false
        }
    }
})
export const { registrUser, Auth, ExitUser } = userSlice.actions
export default userSlice.reducer