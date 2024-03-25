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
import Dashboard_User_Courses_Requests from "./Components/Dashboard_Users/User/Courses_Requests/Courses_Requests";
import Dashboard_User_Services from "./Components/Dashboard_Users/User/Services/Services";
import Dashboard_User_Services_Requests from "./Components/Dashboard_Users/User/Services_Requests/Services_Requests";

import Dashboard_Courses from "./Components/Dashboard_Courses/Dashboard_Courses";
import Add_Course from "./Components/Dashboard_Courses/Add_Course";
import Current_Skate_Courses from "./Components/Dashboard_Courses/Current_Courses";
import Courses_Requests from "./Components/Dashboard_Courses/Requests/Requests";
import Edit_Course from "./Components/Dashboard_Courses/Edit_Course";

import Dashboard_Services from "./Components/Dashboard_Services/Dashboard_Services";
import Add_Service from "./Components/Dashboard_Services/Add_Service";
import Current_Skate_Services from "./Components/Dashboard_Services/Current_Services";
import Services_Requests from "./Components/Dashboard_Services/Requests/Requests";
import Edit_Service from "./Components/Dashboard_Services/Edit_Service";

import Dashboard_Events from "./Components/Dashboard_Events/Dashboard_Events";
import Add_Event from "./Components/Dashboard_Events/Add_Event";
import Current_Skate_Events from "./Components/Dashboard_Events/Current_Events";
import Edit_Event from "./Components/Dashboard_Events/Edit_Event";

import Dashboard_Blogs from "./Components/Dashboard_Blogs/Dashboard_Blogs";
import Add_Blog from "./Components/Dashboard_Blogs/Add_Blog";
import Current_Skate_Blogs from "./Components/Dashboard_Blogs/Current_Blogs";
import Edit_Blog from "./Components/Dashboard_Blogs/Edit_Blog";

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
                                path: "/Users/:id/Courses",
                                element: <Dashboard_User_Courses />,
                            },
                            {
                                path: "/Users/:id/Services",
                                element: <Dashboard_User_Services />,
                            },
                            {
                                path: "/Users/:id/Courses_Requests",
                                element: <Dashboard_User_Courses_Requests />,
                            },
                            {
                                path: "/Users/:id/Services_Requests",
                                element: <Dashboard_User_Services_Requests />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "/Courses",
                element: <Dashboard_Courses />,
                children: [
                    { index: true, element: <Current_Skate_Courses /> },
                    { path: "/Courses/Add", element: <Add_Course /> },
                    {
                        path: "/Courses/Requests",
                        element: <Courses_Requests />,
                    },
                    {
                        path: "/Courses/:id/Edit",
                        element: <Edit_Course />,
                    },
                ],
            },
            {
                path: "/Events",
                element: <Dashboard_Events />,
                children: [
                    { index: true, element: <Current_Skate_Events /> },
                    { path: "/Events/Add", element: <Add_Event /> },
                    {
                        path: "/Events/:id/Edit",
                        element: <Edit_Event />,
                    },
                ],
            },

            {
                path: "/Services",
                element: <Dashboard_Services />,
                children: [
                    { index: true, element: <Current_Skate_Services /> },
                    {
                        path: "/Services/Add",
                        element: <Add_Service />,
                    },
                    {
                        path: "/Services/Requests",
                        element: <Services_Requests />,
                    },
                    {
                        path: "/Services/:id/Edit",
                        element: <Edit_Service />,
                    },
                ],
            },
            {
                path: "/Blogs",
                element: <Dashboard_Blogs />,
                children: [
                    { index: true, element: <Current_Skate_Blogs /> },
                    { path: "/Blogs/Add", element: <Add_Blog /> },
                    {
                        path: "/Blogs/:id/Edit",
                        element: <Edit_Blog />,
                    },
                ],
            },
            {
                path: "*",
                element: <Not_Found />,
            },
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
