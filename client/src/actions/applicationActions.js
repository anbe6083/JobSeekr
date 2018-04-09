export const { ADD_NEW_APPLICATION } = 'ADD_NEW_APPLICATION';
export const { EDIT_APPLICATION } = 'EDIT_APPLICATION';

let applicationId = 2;
//action creators
export function addNewApplication(application) {
  return {
    type: 'ADD_NEW_APPLICATION',
    application,
    applicationId: ++applicationId
  };
}

export function editApplication(application) {
  return {
    type: 'EDIT_APPLICATION',
    application
  };
}
