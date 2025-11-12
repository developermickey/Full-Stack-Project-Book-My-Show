import { configureStore, Tuple } from '@reduxjs/toolkit'
import userSlice from './userSlice'
const store = configureStore({
    reducer:{
      user : userSlice
    }
})

export default store