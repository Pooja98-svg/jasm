import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import StoreReducer from './store/reducer/StoreReducer'
import CategoryReducer from './store/reducer/CategoryReducer'
import ProductReducer from './store/reducer/ProductReducer'
const rootreducer = combineReducers({
  StoreReducer : StoreReducer,
  CategoryReducer:CategoryReducer,
  ProductReducer:ProductReducer
})
const store  = createStore(rootreducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
   <Provider store={store}>
     <Navigator />
   </Provider>
  );
}

