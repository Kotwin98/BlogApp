import React from 'react';
import '../styles/addPost.css';

const addPost = () => (
    <div className="addPost-container"> 
        <h1 className="addPost-title">Add post</h1>
        <form className="addPost-form">
            <input label="Title" value="Title" className="addPost-input addPost-title-input" />
            <input label="Author" value="Author" className="addPost-input" />
            <p className="addPost-par">Write your post content</p>
            <input className="addPost-content-input" />
            <button className="addPost-button">Add post</button>
        </form>
    </div>
);

export default addPost;