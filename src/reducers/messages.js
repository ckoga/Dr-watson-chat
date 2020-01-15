export const message = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [...messages, { message, isUser }];

    default: 
      return state;
  }
}