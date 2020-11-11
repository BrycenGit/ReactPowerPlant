// This function stores our state.

export const storeState = (nameParam) => {
  let currentState = { name: nameParam, soil: 0, water: 0, light: 0};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

// const storePlants = () => {
//   const plantArray = []
//   return () => {
//     let currentState = {};
//     plantArray[plantArray.length] = storeState()
//     return (stateChangeFunction = state => state) => {
//       const newState = stateChangeFunction(currentState);
//       currentState = {...newState};
//       return newState;
//     };
//   };
// };

export const stateControl = storeState();
// export const plantControl = storePlants();
// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

function makePlant() {
  const newPlant = storeState(plant);
  return newPlant;
}

function makeFungi() {
  const fungi = storeState();
}
