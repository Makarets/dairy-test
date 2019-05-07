import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Comment from './Comment';


class Comments extends Component {
   constructor(props) {
    super(props);
    this.state = { 
      incorrect: ''
    }
  }

//     if( regText.test(this.refs.input.value) === true ) { 
  onPressEnterToAddNewComment = (event) => {
    if(event.ctrlKey) { 
      if (this.refs.input.value !== ""){
        this.props.addComment({commentText:this.refs.input.value}, this.props.item.id)
        this.refs.input.value = ''
        this.setState({incorrect: 'none'})
      }else this.setState({incorrect: 'block'})
    }
  }
  
   
  searchItemIndex = (name) => {
    let arr = this.props.number;
    for (let i = 0; i < arr.length; i++)
        if (arr[i].name === name) {
            return ++i;
        }
  }

  render(){
    if(this.props.item !== null){
      return(
        <div className='box-1'>
        <h2 align='center'>Comments #{this.searchItemIndex(this.props.item.name)}</h2>
          <div className='comments-container' id='scroll'>
            {
              this.props.item.comments.map(
                (el, i) => {
                  return (
                    <Comment key={i} comment={el}/>
                  )
                }
              )
            }
          </div>
          <div className="comment-form">
            <img src='./comment.png' className="contact-image" width="85px" height="80px"/>
            <div>
                <textarea wrap='hard' ref="input" onKeyPress={this.onPressEnterToAddNewComment}></textarea>
                <p className='incorr_comment' style={{display: this.state.incorrect}}>incorrect comment</p>
            </div>
          </div>
          
        </div>
      )
    } else {
      return (<div style={{display:"none"}}></div>)
    }
  }
}

export default Comments;