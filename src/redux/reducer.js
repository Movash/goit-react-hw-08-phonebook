import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
import { appReducer } from './appState/slice';
import { authReducer } from './auth/slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const persistConfig2 = {
//   key: 'contacts',
//   storage,
// };

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

// const contactsPersistedReducer = persistReducer(persistConfig2, contactsReducer);

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  appState: appReducer,
  auth: authPersistedReducer,
});
