import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import ReducerFunction from './Reducer';
import reduxStorage from './ReduxStorage';
const config = {
  key: 'root',
  storage: reduxStorage,
};

const persistReduce = persistReducer(config, ReducerFunction);

const store = configureStore({
  reducer: persistReduce,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persister = persistStore(store);

export {store, persister};
