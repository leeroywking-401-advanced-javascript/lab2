'use strict';

function List() {
  this.length = 0;
  this.data = {};
}

/**
 * Add item to the end of the list
 * @param item
 */

List.prototype.push = function (item) {
  this.data[this.length] = item;
  this.length++;
};

List.prototype.pop = function () {
  let returnValue = this.data[this.length - 1];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function () {
  // stores starting value
  let bleep = this.data[0];
  // deletes the 0 index
  delete this.data[0];
  // re-indexes everything
  for (let i = 1; i < this.length; i++) {
    this.data[i - 1] = this.data[i];
  }
  delete this.data[--this.length];
  return bleep;
};

List.prototype.unshift = function (input) {
  // sets ${input}for this.data[0]
  let newData = new List();
  newData.push(input);
  for (let i = 0; i < this.length; i++) {
    newData.push(this.data[i]);
  }
  this.data = newData.data;
  this.length++;
  return this.length;
};

List.prototype.forEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this.data[i], [i], this.data);
  }
};

List.prototype.map = function (cb) {
  let response = new List();
  for (let i = 0; i < this.length; i++) {
    response.push(cb(this.data[i], i, this.data));
  }
  return response.data;
};

List.prototype.filter = function (cb) {
  let response = new List();
  for (let i = 0; i < this.length; i++) {
    if (cb(this.data[i], i, this.data)) { response.push(this.data[i]); }
  }
  return response.data;
};

List.prototype.reduce = function (cb, strt) {
  let accum = strt;
  for (let i = 0; i < this.length; i++) {
    accum = cb(accum, this.data[i], i, this.data);
  }
  return accum;
};

// this comment is superfluous 

//this function changes the 'indexes' for every item in the 'array'

module.exports = List;
