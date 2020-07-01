import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import AddPost from './components/addPost';
import Posts from './components/posts';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={Home} />
      <Route path="/add-post" exact component={AddPost} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default App;
