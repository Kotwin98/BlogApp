import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/pages/Home/HomePage';
import AddPost from './components/pages/AddPost/AddPostPage';
import PostsPage from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-post" exact component={AddPost} />
          <Route path="/posts" exact component={PostsPage} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
