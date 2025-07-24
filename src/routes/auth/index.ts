import React from "react";

export const authRoutes = [
    {
        path: "auth",
        component: React.lazy(() => import("@/layout/auth")),
        children: [
            {
                path: "signin",
                component: React.lazy(() => import("@/pages/auth/login")),
            },
            {
                path: "signup",
                component: React.lazy(() => import("@/pages/auth/register")),
            }
        ]
    },
]
