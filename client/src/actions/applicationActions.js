export const { ADD_NEW_APPLICATION } = 'ADD_NEW_APPLICATION';
export const { EDIT_APPLICATION } = 'EDIT_APPLICATION';

//action creators
export function addNewApplication(application) {
  return {
    type: 'ADD_NEW_APPLICATION',
    application
  };
}

export function editApplication(application) {
  return {
    type: 'EDIT_APPLICATION',
    application
  };
}
