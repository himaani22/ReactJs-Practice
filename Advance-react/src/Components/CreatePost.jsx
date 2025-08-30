import { useContext, useRef } from "react";
import  { PostListData } from "../Store/post-list-store";


const createPost = () => {
const {addPost} = useContext(PostListData)

  const UserIdElement = useRef();
  const PostTitleElement = useRef();
  const PostContentElement = useRef();
  const ReactionsElement = useRef();
  const HahtagsElement = useRef();

  const handleSubmit = (event) =>{
event.preventDefault();
const userId = UserIdElement.current.value;
const title = PostTitleElement.current.value;
const content = PostContentElement.current.value;
const reactions = ReactionsElement.current.value;
const tags = HahtagsElement.current.value.split(" ");


 UserIdElement.current.value = "";
 PostTitleElement.current.value = "";
 PostContentElement.current.value = "";
  ReactionsElement.current.value = "";
  HahtagsElement.current.value = "";

addPost(userId , title , content , reactions , tags);
  }

    return ( <>
          <form className="Create-Post"   onSubmit={handleSubmit}>

<div className="mb-3">
    <label for="userId" className="form-label">User Id</label>
    <input type="text" ref= {UserIdElement} className="form-control" id="userId" placeholder="Enter your userId " />
  </div>

  <div className="mb-3">
    <label for="title" className="form-label">Post Title</label>
    <input type="text" ref={PostTitleElement} className="form-control" id="title" placeholder="How are you feeling Today.." />
  </div>

  <div className="mb-3">
    <label for="body" className="form-label">Post Content</label>
    <textarea rows="5" ref={PostContentElement} className="form-control" id="body" placeholder="Tell us more about it.." />
  </div>

  <div className="mb-3">
    <label for="reactions" className="form-label">Reactions</label>
    <input type="text" ref={ReactionsElement} className="form-control" id="reactions" placeholder="How may people reacted.." />
  </div>

  <div className="mb-3">
    <label for="tags" className="form-label">Hahtags</label>
    <input type="text" ref={HahtagsElement} className="form-control" id="tags" placeholder="Enter your hashtags here.." />
  </div>
 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  </>  )
}
export default createPost;