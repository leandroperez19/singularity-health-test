import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./routers/router";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import Providers from "./providers/providers";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Providers>
                <Router />
            </Providers>
        </QueryClientProvider>
    </StrictMode>
);
