import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/features/NavBar/NavBar';
import Home from './components/pages/Home/HomePage';
import AddPost from './components/pages/AddPost/AddPostPage';
import PostsPage from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <NavBar />
          <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-post" exact component={AddPost} />
          <Route path="/posts" exact component={PostsPage} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
