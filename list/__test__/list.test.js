'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

const faker = require('faker');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops things like you would think', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    expect(stuff.pop()).toEqual('c')
  })

  it('shifts things the way you would hope it does', () =>{
    let stuff = new List();
    let arr = [2,7,2,6,5];
    arr.forEach(item => stuff.push(item));
    expect(stuff.shift()).toEqual(2);
    expect(stuff.data).toEqual({0:7,1:2,2:6,3:5})
  })

  it('shifts things EXACTLY the way you would hope it does', () => {
    let stuff = new List();
    let arr = [faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement()];
    arr.forEach(item => stuff.push(item));
    expect(stuff.shift()).toEqual(arr.shift());

  })

  it('unshifts things EXACTLY like you would expect', () => {
    let stuff = new List();
    let arr = [faker.random.arrayElement(),faker.random.arrayElement(),faker.random.arrayElement(),faker.random.arrayElement(),faker.random.arrayElement()];
    arr.forEach(item => stuff.push(item));
    let newItem = faker.random.arrayElement()
    expect(stuff.unshift(newItem)).toEqual(6);
    expect(stuff.data[0]).toEqual(newItem);
  })

  it('foreaches real good', () => {
    let arr = [1,2,3,4,5];
    let stuff = new List();
    arr.forEach(item => stuff.push(item));
    expect(stuff.forEach((item,idx) => (item,idx))).toEqual(arr.forEach((item,idx) => (item, idx)));
  })

  it('Maps like you want it to', () => {
    let arr = [2,3,4,5,6,7,8,9,6,4,4];
    let stuff = new List();
    let chkList = new List();
    arr.forEach(item => stuff.push(item));
    let sqArr = arr.map(item => item * item);
    sqArr.forEach(item => chkList.push(item));
    expect(stuff.map(item => item* item)).toEqual(chkList.data)
  })

  it('Filters like you want it to', () => {
    let arr = [1,2,3,4,54,5,6,7,8,89,5,100];
    let filterArr = arr.filter(val => val % 2);
    let stuff = new List();
    let chkList = new List();
    arr.forEach(item => stuff.push(item));
    filterArr.forEach(item => chkList.push(item));
    expect(stuff.filter(val => val%2)).toEqual(chkList.data)
  })

  it('Reduces things like a boss', () => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let reduced = arr.reduce((acc,val,idx,arr) => {
      return acc+val
    },0);
    let stuff = new List();
    arr.forEach(item => stuff.push(item));
    expect(stuff.reduce((acc,val,idx,arr) => {
      return acc+val
    }, 0))
    .toEqual(reduced)
  })
});
