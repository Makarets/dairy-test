import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Store from './Store';
import Comment from './Comment';


class Comments extends React.Component{
  onPressEnterToAddNewComment = (event) => {
    var regText = /^[A-Za-zА-Яа-яЁё0-9]{3,30}$/;
    if( regText.test(this.refs.input.value) == true ) { 
      if (event.ctrlKey){
        this.props.addComment({commentText:this.refs.input.value}, this.props.item.id)
        this.refs.input.value = ''
        }
      }
    }
  

  render(){
    if(this.props.item !== null){
      return(
        <div className='box-1'>
        <h2 align='center'>Comments #{this.props.item.id}</h2>
          {
            this.props.item.comments.map(
              (el, i) => {
                return (
                  <Comment key={i} comment={el} />
                )
              }
            )
          }
  
        <div className="comment-form">
              <img className="contact-image" width="60px" height="60px" />
                  <textarea wrap='hard' ref="input" onKeyPress={this.onPressEnterToAddNewComment}></textarea>
              </div>
        </div>
      )
    } else {
      return (<div style={{display:"none"}}></div>)
    }
  }
}

export default Comments;