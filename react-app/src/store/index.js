import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import spotReducer from './spotReducer';
import bookReducer from './bookingReducer';
import modalReducer from './modalReducer';
import reviewReducer from './reviewReducer';
import editProfileReducer from './profileReducer';

const rootReducer = combineReducers({
  session,
  spots:spotReducer,
  booking:bookReducer,
  modal:modalReducer,
  reviews:reviewReducer,
  profile:editProfileReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
