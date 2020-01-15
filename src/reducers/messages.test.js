import { messages } from './messages';

describe('messages', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = messages(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if action.type is ADD_MESSAGES', () => {
    const initialState = [];
    const message = 'this is a message';
    const isUser = true;
    const action = {
      type: 'ADD_MESSAGE',
      message,
      isUser
    }

    const result = messages(initialState, action);
    const expectedState =[{
          type: 'ADD_MESSAGE',
          message,
          isUser
        }]

    expect(result).toEqual(expectedState)
  });

  it('should clear the messags array in state if the action.type is CLEAR_MESSAGES', () => {
    const initialState = [
      {
        type: 'ADD_MESSAGE',
        message: 'message',
        isUser: true
      },
      {
        type: 'ADD_MESSAGE',
        message: 'message2',
        isUser: false
      }
    ];
    const action = {
      type: 'CLEAR_MESSAGES'
    }
    const expectedState = [];
    const result = messages(initialState, action)
    
    expect(result).toEqual(expectedState);
  });
})