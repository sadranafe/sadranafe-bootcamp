'use client';

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/context/AuthContext";

const Providers = ({ children }) => {
    const [ queryClient ] = useState(() => new QueryClient());
    return (
        <AuthProvider>
            <QueryClientProvider client = {queryClient}>
                { children }
            </QueryClientProvider>
        </AuthProvider>
    );
};

export default Providers;