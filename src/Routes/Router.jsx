import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Layouts/MainLayout/Home";
import Login from "../Layouts/AuthLayout/Login";
import Register from "../Layouts/AuthLayout/Register";
import TermsOfServices from "../pages/Shared/TermsOfServices";
import PrivacyPolicy from "../pages/Shared/PrivacyPolicy";
import DeveloperResources from "../pages/Shared/DeveloperResources";
import CookiesPolicy from "../pages/Shared/CookiesPolicy";

export const router = createBrowserRouter([
    {
        path : "/",
        Component : MainLayout,
        children :[
            {
                index: true,
                Component : Home
            },
            {
                path : "/login",
                Component : Login
            },
            {
                path : "/register",
                Component : Register
            },
            {
                path :"/terms-of-services",
                Component : TermsOfServices
            },
            {
                path :"/privacy-policy",
                Component : PrivacyPolicy
            },
            {
                path :"/developer-resources",
                Component : DeveloperResources
            },
            {
            path :"/cookies-policy",
            Component: CookiesPolicy
            },
        ]
    }
])