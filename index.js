const fetch = require('node-fetch');
const prompt = require('prompt-sync')();
const fs = require('fs');



//Creating link to fetch from the api
const _title = prompt('What is your title: ');
const link = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=${_title}`

fs.appendFile('links.txt', link , function (err) {
	if (err) throw err;
	console.log('Saved!');
  });

fetch(link)
.then(response => response.json())
.then(data => {
	console.log(data);

    // Log the page objects
    console.log(data.query.pages)

    // Loop through the data object
    // Pulling out the titles of each page
    for (var i in data.query.pages) {
        console.log(data.query.pages[i].title);
    }
	
});

 
