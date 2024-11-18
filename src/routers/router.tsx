import ProtectedRoute from "@/components/protectedRoute/protectedRoute";
import PublicRoute from "@/components/publicRoute/publicRoute";
import Home from "@/pages/home/home";
import Login from "@/pages/login/login";
import NotFound from "@/pages/notFound/notFound";
import Settings from "@/pages/settings/settings";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
        errorElement: <NotFound />,
    },
    {
        path: "/sign-in",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/location",
        element: (
            <Home
                headerTitleKey="location_main_title"
                headerParagraphKey="location_main_paragraph"
            />
        ),
    },
    {
        path: "/blog",
        element: (
            <Home
                headerTitleKey="blog_main_title"
                headerParagraphKey="blog_main_paragraph"
            />
        ),
    },
    {
        path: "/services",
        element: (
            <Home
                headerTitleKey="services_main_title"
                headerParagraphKey="services_main_paragraph"
            />
        ),
    },
    {
        path: "/about-us",
        element: (
            <Home
                headerTitleKey="about_us_main_title"
                headerParagraphKey="about_us_main_paragraph"
            />
        ),
    },
    {
        path: "/franchise",
        element: (
            <Home
                headerTitleKey="franchise_main_title"
                headerParagraphKey="franchise_main_paragraph"
            />
        ),
    },
    {
        path: "/settings",
        element: <Settings />,
    },
]);

export const Router = () => <RouterProvider router={router} />;
