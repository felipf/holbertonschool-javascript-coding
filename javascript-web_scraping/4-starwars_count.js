#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const film of films) {
      const characters = film.characters;
      if (characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
        count++;
      }
    }
    console.log(count);
  }
});
