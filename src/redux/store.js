import { reducer } from "./reducer";
import {createStore} from 'redux'
export const store = createStore(
    reducer, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );