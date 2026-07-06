import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Rings from "./pages/Rings"
import Earrings from "./pages/Earrings";
import Necklaces from "./pages/Necklaces";
import Bracelets from "./pages/Bracelets";
import Pendants from "./pages/Pendants";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "rings",
                Component: Rings
            },
            {
                path: "earrings",
                Component: Earrings
            }, 
            {
                path: "necklaces",
                Component: Necklaces
            }, 
            {
                path: "pendants",
                Component: Pendants
            }, 
            {
                path: "bracelets",
                Component: Bracelets
            },
            {
                path: "contacts",
                Component: Contacts
            }, 
            {
                path: "about",
                Component: About
            }
        ]
    }
])