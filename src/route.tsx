import { createBrowserRouter  } from "react-router-dom";
import {routes as teachersRoute} from './Modules/Teachers/routes/index'
import {routes as studentsRoute} from './Modules/Students/routes/index'
import {routes as coursesRoutes} from './Modules/Courses/routes/index'
import App from "./App";


 export  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
     children:[...teachersRoute,...studentsRoute,...coursesRoutes]
    },


    
  ]);