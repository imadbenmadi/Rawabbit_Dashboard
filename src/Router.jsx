import { createBrowserRouter } from "react-router-dom";

import Not_Finished from "./Components/Not_Finished";
import Not_Found from "./Components/Not_Found";

import Dashboard from "./Dashboard";
import Dashboard_Login from "./Dashboard_Login";
import Dashboard_home from "./Components/Dashboard_home/Dashboard_home";

import Dashboard_Users from "./Components/Dashboard_Users/Dashboard_Users";
import Default_user from "./Components/Dashboard_Users/User/Default";
import Edit_user from "./Components/Dashboard_Users/User/Edit";
import Dashboard_Users_Notification from "./Components/Dashboard_Users/User/Notifications/Notifications";
import Current_Notifications from "./Components/Dashboard_Users/User/Notifications/Current_Notifications";
import Add_user from "./Components/Dashboard_Users/Add_user";
import User from "./Components/Dashboard_Users/User/User";
import Table from "./Components/Dashboard_Users/Table/Table";
import Dashboard_User_Courses from "./Components/Dashboard_Users/User/Courses/Courses";
import Dashboard_User_Requests from "./Components/Dashboard_Users/User/Courses_Requests/Courses_Requests";

import Dashboard_WebSites from "./Components/WebSites/Dashboard_WebSites";
import Add_WebSite from "./Components/WebSites/Add_WebSite";
import Current_WebSites from "./Components/WebSites/Current_WebSites";
import Edit_WebSite from "./Components/WebSites/Edit_WebSite";

// import Dashboard_Requests from "./Components/Dashboard_Courses/Dashboard_Courses";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            { index: true, element: <Dashboard_home /> },
            {
                path: "/Users",
                element: <Dashboard_Users />,
                children: [
                    { index: true, element: <Table /> },
                    {
                        path: "/Users/Add",
                        element: <Add_user />,
                    },
                    {
                        path: "/Users/:id",
                        element: <User />,
                        children: [
                            { index: true, element: <Default_user /> },
                            {
                                path: "/Users/:id/Edit",
                                element: <Edit_user />,
                            },
                            {
                                path: "/Users/:id/Notification",
                                element: <Dashboard_Users_Notification />,
                            },
                            {
                                path: "/Users/:id/Current_Notifications",
                                element: <Current_Notifications />,
                            },
                            {
                                path: "/Users/:id/WebSites",
                                element: <Dashboard_User_Courses />,
                            },
                            {
                                path: "/Users/:id/Courses_Requests",
                                element: <Dashboard_User_Requests />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "/WebSites",
                element: <Dashboard_WebSites />,
                children: [
                    { index: true, element: <Current_WebSites /> },
                    { path: "/WebSites/Add", element: <Add_WebSite /> },
                    {
                        path: "/WebSites/:id/Edit",
                        element: <Edit_WebSite />,
                    },
                ],
            },
            {
                path: "*",
                element: <Not_Found />,
            },
            // {
            //     path: "/Requests",
            //     element: <Dashboard_Requests />,
            // },
        ],
    },
    {
        path: "/Dashboard_Login",
        element: <Dashboard_Login />,
    },
    {
        path: "*",
        element: <Not_Found />,
    },
]);

export default routes;
