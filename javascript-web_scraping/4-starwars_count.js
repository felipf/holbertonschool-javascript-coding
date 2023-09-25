#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const data = JSON.parse(body);
  let count = 0;

  data.results.forEach((movie) => {
    movie.characters.forEach((character) => {
      if (character.includes('/people/18/')) {
        count++;
      }
    });
  });
  console.log(count);
});
