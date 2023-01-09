import { createReducer } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
}

const userReducer = createReducer(initialState, {
  login: (state,action) => {
    console.log(action.payload)
    state.user = action.payload.user
  }
})

export default userReducer