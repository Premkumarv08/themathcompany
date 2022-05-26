import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { SharedProvider } from "./context/provider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SharedProvider>
      <App />
    </SharedProvider>
  </StrictMode>
);
