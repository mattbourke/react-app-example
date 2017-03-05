import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (module.hot) {
  module.hot.accept('./reducer', () => {
    import('./reducer').then(module => store.replaceReducer(module.default));
  });
}

export default store;
