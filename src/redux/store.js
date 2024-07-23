import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import contactReduser from "./contactsSlice";
import filtersReduser from "./filtersSlice";

const persistedcontactReducer = persistReducer(
  {
    key: "contacts",
    storage,
  },
  contactReduser
);

const persistedfiltersReducer = persistReducer(
  {
    key: "filters",
    storage,
  },
  filtersReduser
);

export const store = configureStore({
  reducer: {
    contacts: persistedcontactReducer,
    filters: persistedfiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
