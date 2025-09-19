import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Layouts/MainLayout/Home";
import Login from "../Layouts/AuthLayout/Login";
import Register from "../Layouts/AuthLayout/Register";
import TermsOfServices from "../pages/Shared/TermsOfServices";
import PrivacyPolicy from "../pages/Shared/PrivacyPolicy";
import DeveloperResources from "../pages/Shared/DeveloperResources";
import CookiesPolicy from "../pages/Shared/CookiesPolicy";
import ErrorPage from "../pages/Shared/ErrorPage";
import AddBook from "../components/AddBook";
import AllBooks from "../components/AllBooks";
import BookDetails from "../components/BookDetails";

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
            {
                path :"/add-book",
                Component : AddBook
            },
            {
                path :"/all-books",
                Component : AllBooks,
                loader : () => fetch("http://localhost:3000/books")
            },
            {
                path : "/book-details/:id",
                loader : ({params})=> fetch(`http://localhost:3000/book-details/${params.id}`),
                Component : BookDetails
            }
            
        ]
    },
    {
        path :"*",
        Component : ErrorPage
    }
])