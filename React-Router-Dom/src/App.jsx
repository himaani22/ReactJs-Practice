import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost"
import PostList from "./Components/PostList"
import { useState } from "react";
import  "./App.css"
import PostListProvider from "./Store/post-list-store";
import { Outlet } from "react-router-dom";


function App() {

  const [selectedPost , setselectedPost] = useState('Home')
  return (
  <PostListProvider>
  <div className="appContainer">
   <Sidebar selectedPost = {selectedPost}  setselectedPost = {setselectedPost}></Sidebar>
  <div className="content">
  <Header></Header>
  <Outlet></Outlet>
<Footer></Footer>
 </div>

  </div>
  </PostListProvider>

)
}

export default App;
