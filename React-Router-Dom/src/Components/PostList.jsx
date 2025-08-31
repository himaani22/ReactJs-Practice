import { useContext, useEffect, useState } from "react";
import Post from "./Post"
import { PostListData } from "../Store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Loading from "./Loading";

const PostList = () =>{
   const {fetching , postList} = useContext(PostListData) ; 
   
   
   

   return ( <>
   {fetching && <Loading/>}
   {!fetching && postList.length === 0 && <WelcomeMsg />}
   {!fetching && postList.map((post) => (<Post key={post.id} post = {post}/> ))}

   </>
   );
}
export default PostList;