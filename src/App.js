import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/pages/navbar';
import Home from './components/pages/Home/HomePage';
import AddPost from './components/pages/AddPost/AddPostPage';
import PostsPage from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
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
      <Route component={NotFound} />
    </Router>
  );
}

export default App;
