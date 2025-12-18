"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import api from "@/services/axiosService";

const allowedPaths = ["/", "/login", "/register"];

type AuthContextValue = {
    isAuthenticated: boolean | undefined;
    refresh: () => void;
};

const AuthContext = createContext<AuthContextValue>({
    isAuthenticated: undefined,
    refresh: () => { },
});

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

   useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    const currentPath = pathname || "/";
    const isAllowedPath = allowedPaths.includes(currentPath);

    // For allowed paths, always allow access
    if (isAllowedPath) {
        setIsAuthenticated(!!token);
        return;
    }

    // For protected paths, require valid token
    if (!token) {
        router.push("/login");
        setIsAuthenticated(false);
        return;
    }

    // Has token on protected path
    setIsAuthenticated(true);
}, [pathname, router]);

    // Don't render children until auth state is determined
    if (isAuthenticated === undefined) {
        return null; // or a loading spinner
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated, 
            refresh: () => {
                setIsAuthenticated(!!localStorage.getItem("token"));
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}