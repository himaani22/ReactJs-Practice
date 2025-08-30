import { createContext, useReducer } from "react";

export const PostListData = createContext({
    postList : [] ,     //Array
    addPost : () => {},
    addInitialPosts : () => {},
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
const [postList , dispatchPostList] = useReducer(PostListReducer , [])       

const addPost = (userId , title , content , reactions , tags) =>{
dispatchPostList({
    type: "ADD_POST",
    payLoad : {
        id: Date.now() ,
    title: title,
    body: content  ,
    reactions: {
        likes: reactions?.likes || 0,
        dislikes: reactions?.dislikes || 0
      },
    userid: userId,
    tags: tags
    }
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

return <>
<PostListData.Provider value = {{
    postList : postList ,
    addPost : addPost , 
      addInitialPosts : addInitialPosts,
    deletePost : deletePost,
  
}} > {children}</PostListData.Provider>

</>}

export default PostListProvider;