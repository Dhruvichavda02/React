import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}
export const counterSlice = createSlice({
    name : 'Counter',
    initialState,
    reducers : {
        increment : state=> {
            state.value +=1;
        },
        decrement : state => {
            state.value -= 1;
        },
        clear : (state) =>{
            state.value = 0;
        }
    }
})

export const {increment,decrement,clear} = counterSlice.actions
export default counterSlice.reducer