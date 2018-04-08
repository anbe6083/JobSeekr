export const { ADD_NEW_APPLICATION } = 'ADD_NEW_APPLICATION';

//action creators
export function addNewApplication(application) {
  return {
    type: 'ADD_NEW_APPLICATION',
    application
  };
}
