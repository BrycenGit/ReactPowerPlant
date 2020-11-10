import {changeState} from './../src/js/plant';

describe('asdf', ()=> {
let plant = new Plant();

  test('should return money converted to coins', ()=> {
    expect(changeState("water")(10)(plant)).toEqual({water: 10});
  });

})