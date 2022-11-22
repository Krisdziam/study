import { configureStore } from '@reduxjs/toolkit';
import { clicksReducer, clicksSlice } from './clicksSlice';
import { userSlice } from './userSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'




export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    clicks: clicksReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
