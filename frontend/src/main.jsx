import { createRoot } from "react-dom/client";
import AppRoutes from "./routes.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </ChakraProvider>
);
