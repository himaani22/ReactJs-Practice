import { useContext, useRef } from "react";
import  { PostListData } from "../Store/post-list-store";
import { useNavigate } from "react-router-dom";

const createPost = () => {
const {addPost} = useContext(PostListData)
const navigate = useNavigate();
  const UserIdElement = useRef();
  const PostTitleElement = useRef();
  const PostContentElement = useRef();
  const ReactionsElement = useRef();
  const HashtagsElement = useRef();

  const handleSubmit = (event) =>{
event.preventDefault();

const userId = Number(UserIdElement.current.value); 
    const title = PostTitleElement.current.value;
    const content = PostContentElement.current.value;
    const reactions = Number(ReactionsElement.current.value) || 0; 
    const tags = HashtagsElement.current.value.split(" ");


 UserIdElement.current.value = "";
 PostTitleElement.current.value = "";
 PostContentElement.current.value = "";
  ReactionsElement.current.value = "";
  HashtagsElement.current.value = "";

// Addpost server call
  
  fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: content,
        reactions: reactions,
        userId: userId,      
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((postt) => {
        addPost(postt); //  add new post into context
        navigate("/");
      })
      .catch((err) => console.error("Error creating post:", err));
  };
    return ( <>
          <form className="Create-Post"   onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id</label>
    <input type="text" ref= {UserIdElement} className="form-control" id="userId" placeholder="Enter your userId " />
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={PostTitleElement} className="form-control" id="title" placeholder="How are you feeling Today.." />
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea rows="5" ref={PostContentElement} className="form-control" id="body" placeholder="Tell us more about it.." />
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input type="text" ref={ReactionsElement} className="form-control" id="reactions" placeholder="How may people reacted.." />
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Hahtags</label>
    <input type="text" ref={HashtagsElement} className="form-control" id="tags" placeholder="Enter your hashtags here.." />
  </div>
 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  </>  )
}
export default createPost;