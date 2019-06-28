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

  it('shifts things the way you would hope it does', () =>{
    let stuff = new List();
    stuff.push(2);
    stuff.push(7);
    stuff.push(2);
    stuff.push(6);
    stuff.push(5);
    expect(stuff.shift()).toEqual(2);
    expect(stuff.data).toEqual({0:7,1:2,2:6,3:5})
  })

  it('shifts things EXACTLY the way you would hope it does', () => {
    let stuff = new List();
    let arr = [faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement()];
    arr.forEach(item => stuff.push(item));
    expect(stuff.shift()).toEqual(arr.shift());

  })
});
