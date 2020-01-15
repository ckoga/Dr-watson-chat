import * as actions from '../actions';

describe('actions', () => {
  describe('createUser', () => {
    let user = {
      id: 1,
      firstName: 'Colin',
      lastName: 'Koga',
      feeling: 'exhausted',
    }
    it('should have a type of CREATE_USER', () => {
      const expectedAction = {
        type: 'CREATE_USER',
        user
      };

      const result = actions.createUser(user);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('removeUser', () => {
    it('should have a type of REMOVE_USER', () => {
      const expectedAction = {
        type: 'REMOVE_USER',
      };

      const result = actions.removeUser();

      expect(result).toEqual(expectedAction);
    });
  });

  describe('hasErrored', () => {
    let errorMsg = 'error'
    it('should have a type of HAS_ERRORED', () => {
      const expectedAction = {
        type: 'HAS_ERRORED',
        errorMsg
      };

      const result = actions.hasErrored(errorMsg);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('addMessage', () => {
    let message = 'message';
    let isUser = true;
    it('should have a type of ADD_MESSAGE', () => {
      const expectedAction = {
        type: 'ADD_MESSAGE',
        message,
        isUser
      };

      const result = actions.addMessage(message, isUser);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('clearMessages', () => {
    it('should have a type of CLEAR_MESSAGES', () => {
      const expectedAction = {
        type: 'CLEAR_MESSAGES',
      };

      const result = actions.clearMessages();

      expect(result).toEqual(expectedAction);
    });
  });
});