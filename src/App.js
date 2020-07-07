import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/pages/navbar';
import Home from './components/pages/home';
import AddPost from './components/pages/addPost';
import PostsPage from './components/pages/posts';
import Contact from './components/pages/contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={Home} />
      <Route path="/add-post" exact component={AddPost} />
      <Route path="/posts" exact component={PostsPage} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default App;
