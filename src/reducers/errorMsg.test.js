import { errorMsg } from './errorMsg';

describe('errorMsg', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorMsg(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an error message if the action.type is HAS_ERRORED', () => {
    const initialState = '';
    const action = {
      type: 'HAS_ERRORED',
      errorMsg: 'error'
    };
    const result = errorMsg(initialState, action);
    const expectedState = 'error'

    expect(result).toEqual(expectedState)
  });
})