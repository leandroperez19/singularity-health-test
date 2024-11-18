import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./routers/router";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import Providers from "./providers/providers";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Providers>
                <Router />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    theme="colored"
                />
            </Providers>
        </QueryClientProvider>
    </StrictMode>
);
