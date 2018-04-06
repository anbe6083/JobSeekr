//action types
export const { ADD_NEW_PERSON_TO_NETWORK } = 'ADD_NEW_PERSON_TO_NETWORK';

//action creators
export function addNewNetworkConnection(person) {
  return {
    type: 'ADD_NEW_PERSON_TO_NETWORK',
    person
  };
}
