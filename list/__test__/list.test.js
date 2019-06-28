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
});
