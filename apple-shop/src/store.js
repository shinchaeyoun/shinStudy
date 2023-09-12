/* eslint-disable */
import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'
 
let stock = createSlice({
  name: 'stock',
  initialState: [10,20,30]
});

let cartItem = createSlice({
  name: 'cartItem',
  initialState: [
    {id: 0, name: 'White and Black', count: 2},
    {id: 2, name: 'Gray Yordan', count: 1}
  ],
  reducers: {
    increment(state){
      return state.count ++;
    },
    addCount(state, action) {
      let result = state.find(item => item.id == action.payload);
      result.count++;
    },
    addItem (state, action){
      state.push(action.payload)
    }
  }
});

export let {increment, addCount, addItem} = cartItem.actions;

export default configureStore ({
  reducer: {
    user : user.reducer,
    stock: stock.reducer,
    cartItem: cartItem.reducer
  }
});