import React from "react";

export const feedRoutes = [
    {
        path: "/",
        component: React.lazy(() => import("@/layout/feedLayout")),
        children: [
            {
                path: "",
                component: React.lazy(() => import("@/pages/feed")),
            }
        ]
    },
]
