import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from './todoReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  card: todoReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))