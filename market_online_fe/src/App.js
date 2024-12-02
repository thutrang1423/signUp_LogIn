import  {Layout, RequireAuth } from "./routes/layout/Layout";
import HomePage from "./routes/homePage/HomePage";
// import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Register from "./routes/register/Register";
import Login  from "../src/routes/login/Login";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        // {
        //   path:"/:id",
        //   element:<SinglePage/>
        // },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        }
      ],
    },
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
