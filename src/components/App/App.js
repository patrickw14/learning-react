/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Post from '../Post';
import PostList from '../PostList';

class App extends Component {

  
  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      posts: [
        { id: 0, username: 'Mateo', body: 'Lorem Ipsulum', upVote: 0, downVote: 0},
        { id: 1, username: 'Patrick', body: 'React is fun!', upVote: 0, downVote: 0},
      ],
    }
  }

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        {this.props.children}
        <Feedback />
        <PostList posts={this.state.posts} />
        <Footer />
      </div>
    ) : this.props.children;
  }
}

export default App;
