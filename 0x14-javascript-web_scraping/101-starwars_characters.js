#!/usr/bin/node
// prints all characters of a Star Wars movie synchronously
const request = require('request');

// Get movie ID from command line argument
const movieId = process.argv[2];

// Construct URL to fetch movie data
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a request to fetch movie data
request(url, (error, response, body) => {
  // Handle errors
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Parse movie data
  const film = JSON.parse(body);

  // Get URLs of characters in the movie
  const charactersUrls = film.characters;

  // Create an array of promises that will fetch the data of each character
  const charactersPromises = charactersUrls.map(characterUrl => {
    // Create a promise that will fetch the data of a character
    return new Promise((resolve, reject) => {
      // Make a request to fetch character data
      request(characterUrl, (error, response, body) => {
        // Handle errors
        if (error) {
          reject(error);
          return;
        }

        // Parse character data
        const character = JSON.parse(body);

        // Resolve the promise with the name of the character
        resolve(character.name);
      });
    });
  });

  // Wait for all promises to resolve and then print the names of the characters
  Promise.all(charactersPromises)
    .then(characters => {
      console.log(characters.join('\n'));
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
