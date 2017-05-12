import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h1>Post Index</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
