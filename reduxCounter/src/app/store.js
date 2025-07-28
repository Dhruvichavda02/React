import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice' 
// here  So, counterReducer is just: counterSlice.reducer

export const store = configureStore({
    reducer :{
        counter : counterReducer
    }
})