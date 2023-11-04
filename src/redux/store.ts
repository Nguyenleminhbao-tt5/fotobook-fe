import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post-slice";
import { postApi } from "./service/post-api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
    reducer: {
        post: postReducer,
        [postApi.reducerPath]: postApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware) 
})

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


