import {combineReducers, configureStore} from '@reduxjs/toolkit'
import accountReducer from './accountSlice'
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    account: persistReducer({
        key: 'account',
        storage: storage,
    }, accountReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persistor = persistStore(store)