import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx' 
import {RouterProvider,  createBrowserRouter } from "react-router-dom"
import CreatePost from "./Components/CreatePost.jsx"
import PostList from './Components/PostList.jsx'

const router = createBrowserRouter([{path : "/" , element : <App/>,
  children : [  
    {path : "//" , element : <PostList/>} ,
 {path : "/create-post" , element : <CreatePost/>}
  ]
 
}]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>

    
  </React.StrictMode>,
)
