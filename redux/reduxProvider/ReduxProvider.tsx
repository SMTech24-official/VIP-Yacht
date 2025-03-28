// src/app/storeWrapper.ts
"use client";
import { ReactNode } from "react";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { Provider } from "react-redux";

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};
