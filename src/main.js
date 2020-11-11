import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {storeState, changeState} from './js/plant.js';

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const redFood = changeState("soil")(-10);
const greenFood = changeState("soil")(100);

// const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
// const badWater = changeState("water")(-10);
// const megaWater = changeState("water")(100);

// const sun = changeState("light")(1);
const superSun = changeState("light")(5);
// const noSun = changeState("light")(-10);
// const ultraSun = changeState("light")(100);

$(document).ready(function() {

  const plantArray = [];
  let plantIndex = 0;

  $(`#next`).on("click", function() {
    plantIndex += 1;
    if (plantIndex > plantArray.length - 1) {
      plantIndex = 0;
    }
    const currentState = plantArray[plantIndex]();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water: ${currentState.water}`);
    $('#light-value').text(`Light: ${currentState.light}`);
  });

  $(`#back`).on("click", function() {
    plantIndex -= 1;
    if (plantIndex < 0) {
      plantIndex = plantArray.length - 1;
    }
    const currentState = plantArray[plantIndex]();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water: ${currentState.water}`);
    $('#light-value').text(`Light: ${currentState.light}`);
  });

  $(`.feed`).on("click", function() {
    const newState = plantArray[plantIndex](blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('.hydrate').click(function() {
    const newState = plantArray[plantIndex](superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('.light').click(function() {
    const newState = plantArray[plantIndex](superSun);
    $('#light-value').text(`Light: ${newState.light}`);
  });

  $('#show-state').click(function() {
    const currentState = plantArray[plantIndex]();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water: ${currentState.water}`);
    $('#light-value').text(`Light: ${currentState.light}`);
  });

  $('#make-plant').click(function() {
    plantArray[plantArray.length] = storeState();
    // plantControl()
    const currentState = plantArray[plantArray.length - 1]();
    // const currentState = plantControl[plantControl.length - 1]();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water: ${currentState.water}`);
    $('#light-value').text(`Light: ${currentState.light}`);
    plantIndex = plantArray.length - 1;
  });

});
