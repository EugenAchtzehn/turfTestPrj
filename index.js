// import turfHelpers from '@turf/helpers';
const turfHelpers = require('@turf/helpers');

const polygon1 = turfHelpers.polygon(
  [
    [
      [-10, 52],
      [-4, 56],
      [0, 51],
      [-5, 26],
      [-10, 52],
    ],
  ],
  { name: 'poly1' }
);
console.log('turfHelpers: ', turfHelpers);
console.log('polygon1: ', polygon1);
