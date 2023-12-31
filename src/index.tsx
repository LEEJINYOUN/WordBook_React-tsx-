import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./utils/AuthContext";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </QueryClientProvider>
  </HashRouter>
);
