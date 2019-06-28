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

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */

List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};


List.prototype.shift = function(){
  // deletes the 0 index
  delete this.data[0];
  // re-indexes everything
  for(let i = 1; i< this.length ; i++){
    this.data[i-1] = this.data[i] 
  }
  delete this.data[this.length-1]
  return this.data[this.length]
}
List.prototype.unshift = function(input){
  // re-indexes everything +1

  // sets ${input}for this.data[0]
  return this.length
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
