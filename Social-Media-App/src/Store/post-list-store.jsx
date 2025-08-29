import { createContext, useReducer } from "react";

export const PostListData = createContext({
    postList : [] ,     //Array
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
  else if (action.type === "ADD_POST"){
    NewPostList =[ action.payLoad , ...currPostList];
  }
return NewPostList ;
}
const PostListProvider = ({children}) =>{
const [postList , dispatchPostList] = useReducer(PostListReducer , DEFAULT_POST_LIST)       

const addPost = (userId , title , content , reactions , tags) =>{
dispatchPostList({
    type: "ADD_POST",
    payLoad : {
        id: Date.now() ,
    title: title,
    body: content  ,
    reactions: reactions,
    userid: userId,
    tags: tags
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
    deletePost : deletePost
}} > {children}</PostListData.Provider>

</>}

const DEFAULT_POST_LIST = [
{ 
    id: "1" ,
    title: "Mumbai visit" ,
    body: "Today i met my LOVE in Mumbai" ,
    reactions: 2 ,
    userid: "love-1",
    tags: ["vacation" , "enjoy"]
}, 

    ];
export default PostListProvider;