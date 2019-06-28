'use strict';

function List() {
  this.length = 0;
  this.data = {};
}

/**
 * Add item to the end of the list
 * @param item
 */

List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

List.prototype.pop = function() {
  let returnValue = this.data[this.length-1];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};


List.prototype.shift = function() {
  // stores starting value
  let bleep = this.data[0]
  // deletes the 0 index
  delete this.data[0];
  // re-indexes everything
  for(let i = 1; i< this.length ; i++){
    this.data[i-1] = this.data[i] 
  }
  delete this.data[this.length-1]
  this.length--
  return bleep
}
List.prototype.unshift = function(input){
  // re-indexes everything +1
  for(let i = this.length; i<= 0; i--){
    this.data[i] = this.data[i+1];
  };
  // sets ${input}for this.data[0]
  this.data[0]= input;
  this.length++;
  return this.length;
}
List.prototype.forEach = function(){

}
List.prototype.map = function(){

}
List.prototype.filter = function(){

}
List.prototype.reduce = function(){

}


//this function changes the 'indexes' for every item in the 'array'

module.exports = List;
