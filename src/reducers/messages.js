export const messages = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [...state, action];

    default: 
      return state;
  }
}