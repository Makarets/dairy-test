import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class Comment extends Component {

  render(){
    return (
      <div>
      <div className="comment-box">
            <div className='user-img'> <img src='./commentator.svg' width="60px" height="60px"/></div>
            <div className='comment-text '><p>{this.props.comment.commentText}</p></div>
         </div>
        
      </div>
    )
  }
}

export default Comment;