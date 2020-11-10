import {changeState, stateControl, blueFood, superWater} from './../src/js/plant';

describe('asdf', ()=> {

  test('should return money converted to coins', ()=> {
    const newState = stateControl(blueFood);
    expect(newState.soil).toEqual(5);
  });

  test('should return money converted to coins', ()=> {
    const newState = stateControl(superWater);
    expect(newState.water).toEqual(5);
  });

})