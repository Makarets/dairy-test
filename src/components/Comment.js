import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Store from './Store';
import Comments from './CommentList';


class Comment extends React.Component{
  render(){
    return (
      <div>
      <div className="comment-box">
            <div className='user-img'> <img src='./Unknown.jpg' width="60px" height="60px" /></div>
            <div className='comment-text '><p>{this.props.comment.commentText}</p></div>
         </div>
        
      </div>
    )
  }
}

export default Comment;