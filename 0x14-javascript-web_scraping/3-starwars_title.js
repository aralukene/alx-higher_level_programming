#!/usr/bin/node
// Display the status code of a GET request

const request = require('request');

const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request.get(url, (error, response, body) => {
  if (response) {
    const movie = JSON.parse(body);
    console.log(`${movie.title}`);
  } else {
    console.log(error);
  }
});
