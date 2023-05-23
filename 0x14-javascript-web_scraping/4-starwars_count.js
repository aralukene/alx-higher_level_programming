#!/usr/bin/node
// prints the number of movies where the character “Wedge Antilles” is present
const request = require('request');
const url = process.argv[2];
const actor = 'https://swapi-api.alx-tools.com/api/people/18/';

request(url, (err, res, data) => {
  if (err) {
    console.log(err);
  } else {
    const films = JSON.parse(data).results;
    const match = films.filter((film) => film.characters.includes(actor));
    console.log(`${match.length}`);
  }
});
