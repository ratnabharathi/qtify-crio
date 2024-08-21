import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/Homepage/Homepage";

const router = createBrowserRouter([{
    path: "/",
    element: < App / > , // Correct JSX formatting
    children: [{
        path: "/",
        element: < HomePage / > , // Correct JSX formatting
    }, ],
}, ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < RouterProvider router = { router }
        />);