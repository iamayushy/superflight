import React from "react";
import { feedRoutes } from "./feed";
import { authRoutes } from "./auth";
const allRoutes = [
    ...feedRoutes,
    ...authRoutes,
    {
        path: "*",
        component: React.lazy(() => import("@/components/error")),
    }
]

export default allRoutes;
