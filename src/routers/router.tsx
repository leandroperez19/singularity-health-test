import ProtectedRoute from "@/components/protectedRoute/protectedRoute";
import PublicRoute from "@/components/publicRoute/publicRoute";
import Home from "@/pages/home/home";
import Login from "@/pages/login/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: "/sign-in",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
]);

export const Router = () => <RouterProvider router={router} />;
