import "./commands";
import { mount } from "cypress/react18";
import { createElement } from "react";
import "@/index.css";
import Providers from "@/providers/providers";
import { BrowserRouter } from "react-router-dom";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

Cypress.Commands.add("mount", (component, options) => {
    const wrappedComponent = createElement(Providers, null, component);
    const superWrappedComponent = createElement(
        BrowserRouter,
        null,
        wrappedComponent
    );

    return mount(superWrappedComponent, options);
});
