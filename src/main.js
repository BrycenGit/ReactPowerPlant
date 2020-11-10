import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {storeState, blueFood, superWater, superSun} from './js/plant.js';

$(document).ready(function() {

  const plantArray = [];
  let plantIndex = 0;

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
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
    const currentState = plantArray[plantArray.length - 1]();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water: ${currentState.water}`);
    $('#light-value').text(`Light: ${currentState.light}`);
    plantIndex = plantArray.length - 1;
  });

});