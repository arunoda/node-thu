node-thu
========

Simple utility to generate `thunks` on the fly

## installation

~~~bash
npm install t
~~~

## using with functions

~~~js
var thu = require('thu');
var fs = require('fs');

var thunk = thu(fs.readFile, 'filename.txt', 'utf8');

thunk(function(err, result) {
  console.log(result);
});
~~~

## using with objects

~~~js
var thu = require('thu');
var redis = require('redis');
var client = redis.createClient();

var thunk1 = thu(client, 'set', 'key-name', 'value');
var thunk2 = thu(client, 'get', 'key-name');
~~~