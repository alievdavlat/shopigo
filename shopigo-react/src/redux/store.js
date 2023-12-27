import { configureStore } from "@reduxjs/toolkit";
import localeSlice from  './features/localeSlice'


export const store = configureStore({
  reducer:{
    locale : localeSlice,

  }
})