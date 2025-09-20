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
import BorrowedBooks from "../components/BorrowedBooks";
import UpdateBook from "../components/UpdateBook";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "../Provider/PrivateRoute";
import Category from "../components/Category";

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
                 element : (
                    <PrivateRoute>
                        <AddBook></AddBook>
                    </PrivateRoute>
                )
            },
            {
                path :"/all-books",
                Component : AllBooks,
                loader : () => fetch("http://localhost:3000/books")
            },
            {
                path : "/book-details/:id",
                loader : ({params})=> fetch(`http://localhost:3000/book-details/${params.id}`),
                 element : (
                    <PrivateRoute>
                        <BookDetails></BookDetails>
                    </PrivateRoute>
                )
            },
            {
                path :"/borrowed-books",
                loader : () => fetch("http://localhost:3000/borrowed-books"),
                 element : (
                    <PrivateRoute>
                        <BorrowedBooks></BorrowedBooks>
                    </PrivateRoute>
                )
            },
            {
                path : "/update-book/:id",
                loader : ({params}) => fetch(`http://localhost:3000/update-book/${params.id}`),
                element : (
                    <PrivateRoute>
                        <UpdateBook></UpdateBook>
                    </PrivateRoute>
                )
            },
            {
                path: "/dashboard",
                element :(
                    <PrivateRoute>
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                )
            },
            {
                path :"/books/:category",
                loader : ({params}) => fetch (`http://localhost:3000/books/${params.category}`),
                Component : Category
            }
            
        ]
    },
    {
        path :"*",
        Component : ErrorPage
    }
])