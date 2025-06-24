import type { JSX } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./components/store";

import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./user_components/Login";
import Logout from "./user_components/Logout";

import Home from "./components/Home";
import Cart from "./components/Cart";
import SignUp from "./user_components/SignUp";

const queryClient = new QueryClient();

function AppContent(): JSX.Element {
  const { currentUser } = useAuth();

  return (
    <div style={{ padding: "16px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Advanced React E-Commerce Web App
      </h1>

      {currentUser ? (
        <>
          <div style={{ marginBottom: "8px" }}>
            Welcome, {currentUser.email}
            <span style={{ marginLeft: "12px" }}>
              <Logout />
            </span>
          </div>
          <Home />
          <Cart />
        </>
      ) : (
        <>
          <Login />
          <SignUp />
          <p>Please log in to use the store or sign up.</p>
        </>
      )}
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}
