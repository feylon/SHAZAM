export default  async function(song){
    const url = 'https://shazam-api7.p.rapidapi.com/search?term=calm%20down&limit=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c0a2b9cecmsh03918711380315bp1921d6jsn69a311209e72',
		'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
return result
} catch (error) {
	console.error(error);
}
}