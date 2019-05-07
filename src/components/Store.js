import React, { Component } from 'react';
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Items from './ItemList';
import Comments from './CommentList';



class Store extends Component {
  constructor(props) {
      super(props);

      this.state = {
        validId: 1,
        storageData: undefined,
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
    let addNewItem = [...this.state.globalItems, element];
    this.setState({
      globalItems:addNewItem, 
      validId: this.state.validId + 1
    })
    this.toStringifyJSON(addNewItem);
  };

  deleteItem = (id) => {
    let newItemsList = []

    for(let item of this.state.globalItems){
      if (item.id !== id){
        newItemsList = [...newItemsList, item]
        this.toStringifyJSON(newItemsList);
      }
    }

    if (this.state.pickedItem === null || id !== this.state.pickedItem.id){
      this.setState({globalItems: newItemsList})
    }else { 
      this.setState({globalItems: newItemsList, pickedItem:null})
    }
  };

  pickTheItemComments = (id) => {
    for(let item of this.state.globalItems){
      if(item.id === id){
        this.setState({pickedItem: item})
      }
    }
  }

  addComment = (comment, itemId) => {
    let newItemsList = []

    for (let item of this.state.globalItems){
      if (item.id === itemId){
        item.comments.push(comment);
      }
      newItemsList = [...newItemsList, item]
      this.toStringifyJSON(newItemsList);
    }
    this.setState({globalItems: newItemsList})
  }

  toStringifyJSON = (obj) => {
    let objStr = JSON.stringify(obj);
    localStorage.setItem('data',objStr);
  }


  parseStoregeData = () => {
    let objStrGet = localStorage.getItem("data"),
        objGet = JSON.parse(objStrGet),
        newObjGet = [];

    if(localStorage.length !== 0) {
      for (let [index, item] of objGet.entries()){
        if(item.id !== index){
          item.id = index;
        }
        newObjGet = [...newObjGet, item]
      }
      this.setState({
        globalItems: newObjGet,
        validId: newObjGet.length
      })
    }else {this.setState({globalItems: this.state.globalItems})}
  }

  componentDidMount() {
    window.addEventListener('load', this.parseStoregeData);
  }

  render () {
    return (
      <div className="store-block">
        <Items 
          itemsList={this.state.globalItems} addItem={this.addItem} 
          deleteItem={this.deleteItem} pickTheItemComments={this.pickTheItemComments}
          validId={this.state.validId}
        />
        <Comments item={this.state.pickedItem} addComment={this.addComment} number={this.state.globalItems}/>
      </div>
    )
  };
}

export default Store;
