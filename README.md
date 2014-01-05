node-t
======

Simple Utility to Generate thunks on the fly

## installation

~~~bash
npm install t
~~~

## using with functions

~~~js
var t = require('t');
var fs = require('fs');

var thunk = t(fs.readFile, 'filename.txt', 'utf8');

thunk(function(err, result) {
  console.log(result);
});
~~~

## using with objects

~~~js
var t = require('t');
var redis = require('redis');
var client = redis.createClient();

var thunk1 = t(client, 'set', 'key-name', 'value');
var thunk2 = t(client, 'get', 'key-name');
~~~