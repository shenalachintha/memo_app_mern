import React from "react";
import Post from "./Post/Post.js";
import { useSelector } from "react-redux";
import{usestyles}  from './styles.js';

const Posts=()=>{
    const posts = useSelector((state) => state.posts);
    const classes=usestyles();
    console.log(posts);

    return(
        <div>
            <>
             <h1>Posts Component</h1>
            <Post/>
            <Post/>
            <Post/>
            </>
           
        </div>
    )   
}
export default Posts;