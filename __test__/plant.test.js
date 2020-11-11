import {changeState, stateControl} from './../src/js/plant';

describe('asdf', ()=> {

  const blueFood = changeState("soil")(5);
  const superWater = changeState("water")(5);

  test('should return money converted to coins', ()=> {
    const newState = stateControl(blueFood);
    expect(newState.soil).toEqual(5);
  });

  test('should return money converted to coins', ()=> {
    const newState = stateControl(superWater);
    expect(newState.water).toEqual(5);
  });

})