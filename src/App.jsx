import {createBrowserRouter , RouterProvider} from "react-router-dom"
import LayOut from "./Components/LayOut/LayOut"
import Portofolio from "./Components/Portofolio/Portofolio"
import Contact from "./Components/Contact/Contact"
import About from "./Components/About/About"
import Home from "./Components/Home/Home"





export default function App(){
//creating routes
let routes = createBrowserRouter([
  { //when the path is empty go to layout
    path:"", element: <LayOut/>, children:[
      //index da elasasy
      {index: true, element: <Home/>},
    {path:"about", element: <About/>},
    {path:"portofolio", element: <Portofolio/>},
    {path:"contact", element: <Contact/>}
  ]}


])

   return <RouterProvider router={routes}> </RouterProvider>
}