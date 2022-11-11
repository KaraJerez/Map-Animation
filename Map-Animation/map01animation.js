// This array contains the coordinates for all bus stops on MBTA Route 134 Bus
const busStops = [
  [-71.1625, 42.5053],
  [-71.1616, 42.5039],
  [-71.1590, 42.5018],
  [-71.1632, 42.4996],
  [-71.1559, 42.4974],
  [-71.1544, 42.4924],
  [-71.1531, 42.4900],
  [-71.1521, 42.4879],
  [-71.1519, 42.4859],
  [-71.0632, 42.4120],
  [-71.1516, 42.4790],
  [-71.1507, 42.4772],
  [-71.1496, 42.4748],
  [-71.1500, 42.4724],
  [-71.1500, 42.4710],
  [-71.1486, 42.4692],
  [-71.1464, 42.4667],
  [-71.1455, 42.4651],
  [-71.1437, 42.4630],
  [-71.1409, 42.4609],
  [-71.1392, 42.4581],
  [-71.1861, 42.5677],
  [-71.1379, 42.4547],
  [-71.1341, 42.4492],
  [-71.1340, 42.4472],
  [-71.1345, 42.4448],
  [-71.1349, 42.4432],
  [-71.1356, 42.4421],
  [-71.1333, 42.4391],
  [-71.1327, 42.4374],
  [-71.132, 42.4337],
  [-71.1315, 42.4315],
  [-71.1253, 42.4304],
  [-71.1250, 42.4269],
  [-71.1230, 42.4255],
  [-71.1209, 42.4239],
  [-71.1181, 42.4216],
  [-71.1176, 42.4213],
  [-71.1149, 42.4202],
  [-71.1129, 42.4192],
  [-71.1106, 42.4185],
  [-71.1078, 42.4186],
  [-71.1051, 42.4168],
  [-71.1026, 42.4157],
  [-71.1009, 42.4148],
  [-71.0983, 42.4135],
  [-71.0965, 42.4127],
  [-71.0954, 42.4123],
  [-71.0934, 42.4114],
  [-71.0915, 42.4084],
  [-71.0926, 42.4086],
  [-71.09087, 42.41107],
  [-71.0896, 42.4111],
  [-71.0842, 42.4096],
  [-71.0829, 42.4078],
  [-71.0817, 42.406],
  [-71.0755, 42.4046],
  [-71.0771, 42.4024],
];




///-71.1625, 42.5053
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyYWplcmV6IiwiYSI6ImNsYWNqN3ByajBhbXozcHF5dHIwZnh5eDYifQ.SHNgtX3FJS1O45aoJo3PLg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.1625, 42.5053],
  zoom: 11,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

let marker = new mapboxgl.Marker()
  .setLngLat([-71.1625, 42.5053])
  .addTo(map);

  //-71.1625, 42.5053


// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() =>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
