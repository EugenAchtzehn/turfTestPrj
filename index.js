// require 寫法
const turfHelpers = require('@turf/helpers');
const turf = require('@turf/turf');

// import turfHelpers, { polygon } from '@turf/helpers';
// import turf from '@turf/turf';

// data definition zone
const dataPolygon = [
  [
    [-10, 52],
    [-4, 56],
    [0, 51],
    [-5, 26],
    [-10, 52],
  ],
];

const polygon1 = turfHelpers.polygon(dataPolygon, { name: 'poly1' });

const polygonInstance = turf.polygon(dataPolygon);
const polygonCenterOfMass = turf.centerOfMass(polygonInstance);

// console.log('turf: ', turf);
// console.log('turfHelpers: ', turfHelpers);
console.log('polygon1: ', polygon1);
console.log('polygonInstance: ', polygonInstance);
console.log('polygonCenterOfMass: ', polygonCenterOfMass);
