fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(function (response) {
	// The API call was successful!
	return response.json();
})
.then(function (data) {
	// This is the JSON from our response
	console.log(data);

})
.catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
