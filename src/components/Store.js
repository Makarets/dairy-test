import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Items from './ItemList';
import Comments from './CommentList';




class Store extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        validId:1,
        globalItems: [
          { 
            id: 0, 
            comments: [
              
            ],
            name: 'Your first item'
          }
        ],
        pickedItem: null,
      }
   }

  addItem = (element) => {
    var newValidId = ++this.state.validId
      this.setState({globalItems:[...this.state.globalItems, element], validId: newValidId})
    };

    deleteItem = (id) => {
      var newItemsList = []
 
      for(let item of this.state.globalItems){
        if (item.id != id){
          newItemsList = [...newItemsList, item]
        }
      }

      if (this.state.pickedItem === null || id !== this.state.pickedItem.id){
        this.setState({globalItems: newItemsList})
      } else { 
        this.setState({globalItems: newItemsList, pickedItem:null})
      }
    };

    pickTheItemComments = (id) => {
      for(let item of this.state.globalItems){
        if(item.id == id){
          this.setState({pickedItem: item})
        }
      }
    }
    addComment = (comment, itemId) => {
      let newItemsList = []
      let itemWithNewComment = {}

      for (let item of this.state.globalItems){
        if (item.id === itemId){
          item.comments.push(comment);
          itemWithNewComment = {...item};
        }
        newItemsList = [...newItemsList, item]
      }
      this.setState({globalItems: newItemsList, pickedItem: itemWithNewComment})
    }
  render () {
    return (
      <div className="store--block">
        <Items 
          itemsList={this.state.globalItems} addItem={this.addItem} 
          deleteItem={this.deleteItem} pickTheItemComments={this.pickTheItemComments}
          validId={this.state.validId}
        />
        <Comments item={this.state.pickedItem} addComment={this.addComment}/>
      </div>
    )
  };
}


export default Store;
