'use client'
import { QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { queryClient } from "../api/query.client"
import { persistor, store } from "../store/store"
import AuthProvider from "./auth-provider/AuthProvider"

export default function Providers({
   children
}: PropsWithChildren<unknown>) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    )
}