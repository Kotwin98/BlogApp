import React, { Component } from 'react';
import axios from 'axios';
import '../styles/addPost.css';

class AddPost extends Component {
    state = {
        title: '',
        author: '',
        content: ''
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    onChangeAuthor = (e) => {
        this.setState({
            author: e.target.value
        });
    }

    onChangeContent = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            author: this.state.author,
            content: this.state.content
        }

        axios.post('http://localhost:5000/posts/add', post)
            .then(res => console.log(res.data));

        this.setState({
            title: '',
            author: '',
            content: ''
        });
    }

    render() {
        return (
            <div className="addPost-container"> 
            <h1 className="addPost-title">Add post</h1>
            <form onSubmit={this.onSubmit} className="addPost-form">
                <input 
                    type="text"
                    value={this.state.title}
                    onChange={this.onChangeTitle} 
                    label="Title" 
                    placeholder="Title" 
                    className="addPost-input addPost-title-input" 
                />
                <input 
                    type="text"
                    value={this.state.author}
                    onChange={this.onChangeAuthor} 
                    label="Author" 
                    placeholder="Author" 
                    className="addPost-input" 
                />
                <p className="addPost-par">Write your post content</p>
                <input 
                    type="text" 
                    value={this.state.content}
                    onChange={this.onChangeContent} 
                    className="addPost-content-input" />
                <button className="addPost-button">Add post</button>
            </form>
            </div>
        );
    }
};

export default AddPost;