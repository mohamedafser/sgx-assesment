/** 
*
* appRouter.js
* file which hold application routers
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/

// REGISTER COMPONENT IMPORT
import { RegisterPage } from "../register";
// ROUTER PATH IMPORT
import * as routerPath from "./constants";
// CREATE BROWSER ROUTER IMPORT
import { createBrowserRouter } from "react-router-dom";
// ERROR IMAGE IMPORT
import errorImg from '../.././../assets/img/404.jpeg';
// ERROR COMPONENT IMPORT
import { Error } from "../error";

// ROUTER CONSTANT
export const router = createBrowserRouter([
  {
    path: routerPath.HOME_PAGE_PATH,
    element: <RegisterPage />,
  },
  {
    path: routerPath.PAGE_NOT_FOUND_PATH,
    element: <Error 
                imageUrl={errorImg}
                title="Page Not Found"
                info={`We are sorry but the page you are looking for does not exists. \n You could return to the home page by clicking the below button.`}
              />,
  },
]);