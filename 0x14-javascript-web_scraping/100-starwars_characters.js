#!/usr/bin/node
// prints all characters of a Star Wars movie
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const characterList = JSON.parse(body).characters;
  characterList.forEach(character => {
    request.get(character, (error, response, body) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(JSON.parse(body).name);
    });
  });
});
