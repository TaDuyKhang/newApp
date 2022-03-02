import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice.js'
import userData from './slice/userData.js'
import FEData from './slice/changeFE.js';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


const reducers = combineReducers({
  counter: counterReducer,
      counter : counterReducer,
      FEData : FEData,
      userData: userData
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


export default configureStore({
  // reducer: {
      // counter : counterReducer,
      // setText: changeText,
      // Row_3: Row_3_Data,
      // Technology: Technology_Data,
      // Column: ColumnData
  // },
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})