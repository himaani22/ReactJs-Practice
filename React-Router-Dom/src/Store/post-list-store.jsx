import { createContext, useReducer , useState ,useEffect} from "react";
import post from "../Components/Post";

export const PostListData = createContext({
    postList : [] ,     //Array
    fetching : false ,
    addPost : () => {},
    deletePost : () => {}  //Method
});

const PostListReducer =(currPostList , action) => {
    let NewPostList  = currPostList;
    if (action.type === "DELETE_POST"){
        NewPostList = currPostList.filter(
            (post) => post.id !== action.payLoad.postId
        );
    }
    else if (action.type === "ADD_INITIAL_POSTS") {
        NewPostList = action.payLoad.posts;
    }
  else if (action.type === "ADD_POST"){
    NewPostList =[ action.payLoad , ...currPostList];
  }
return NewPostList ;
}
const PostListProvider = ({children}) =>{
const [postList , dispatchPostList] = useReducer(PostListReducer , []) ;

const [fetching , setFetching] = useState(false)


const addPost = (postt) =>{
dispatchPostList({
    type: "ADD_POST",
    payLoad : 
        postt , 
    
})
};

const addInitialPosts = (posts) =>{
dispatchPostList({
    type: "ADD_INITIAL_POSTS",
    payLoad : {
      posts 
    }
})
};
const deletePost = (postId) =>{
dispatchPostList({
    type : "DELETE_POST",
    payLoad : {
        postId,
    },
})
};

  useEffect( () =>{
      setFetching(true);

      const controller = new AbortController();
  

fetch('https://dummyjson.com/posts' , )
.then((res) => res.json())
.then((data) => {
addInitialPosts(data.posts);
setFetching(false);
});

return () =>{
   console.log("Cleaning up useEffect");
   controller.abort();
};
} , []) 

return <>
<PostListData.Provider value = {{
    postList : postList ,
    addPost : addPost ,
    fetching : fetching , 
    deletePost : deletePost,
  
}} > {children}</PostListData.Provider>

</>}

export default PostListProvider;