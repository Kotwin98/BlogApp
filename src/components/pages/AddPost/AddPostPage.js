import React, { Component } from 'react';
import axios from 'axios';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import '../../../styles/AddPost.scss';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';

class AddPostPage extends Component {
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

    onChangeContent = (text) => {
        this.setState({
            content: text
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
            <div> 
            <h1 className="addPost-title">Add post</h1>
            <form onSubmit={this.onSubmit}>
                <TextField 
                    value={this.state.title}
                    onChange={this.onChangeTitle} 
                    label="Title" 
                    name="title" 
                />
                <TextField
                    value={this.state.author}
                    onChange={this.onChangeAuthor} 
                    label="Author" 
                    name="author" 
                />
                <SectionTitle>Edit post content</SectionTitle>
                <Editor 
                    className="content-editor"
                    text={this.state.content}
                    onChange={this.onChangeContent} 
                    options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] } }}
                />
                <Button variant="primary">Add post</Button>
            </form>
            </div>
        );
    }
};

export default AddPostPage;