"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [client] = useState(() => new QueryClient());

    return (
        <Provider store={store}>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
}