// const getLocation = async () => {
// const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
// const data = await response.json();
//console.log(data);
// displayInfoAboutLOcation(data.city, data.latitude, data.longitude);
// }

// getLocation();

// function displayInfoAboutLOcation (city, latitude, longitude){
//     const paragraphInfo = document.createElement('p');
//     paragraphInfo.textContent = `${city}, ${latitude}, ${longitude}`;  
// }


const getLocation = async () => {
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const data = await response.json();
    //console.log(data);
    displayInfoAboutLocation(data.city, data.latitude, data.longitude);
    }
getLocation();

function displayInfoAboutLocation (city, latitude, longitude) {
    const paragraphInfo = document.querySelector('p');
    paragraphInfo.textContent = `you are located in the city: ${city}, your coordinates are: ${latitude}, ${longitude}`;
    
}
