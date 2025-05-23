import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

export const router = createBrowserRouter(routes, {
    future: {
        v7_partialHydration: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_skipActionErrorRevalidation: true,
        v7_relativeSplatPath: true,
    },
})