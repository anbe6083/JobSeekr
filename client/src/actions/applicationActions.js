export const { ADD_NEW_APPLICATION } = 'ADD_NEW_APPLICATION';
export const { EDIT_APPLICATION } = 'EDIT_APPLICATION';

let applicationId = 0;
//action creators
export function addNewApplication(application) {
  return {
    type: 'ADD_NEW_APPLICATION',
    application,
    applicationId: applicationId++
  };
}

export function addNewApplicationToServer(application) {
  return {
    type: 'ADD_NEW_APPLICATION_TO_SERVER',
    application,
    applicationId: applicationId++
  };
}

export function deleteApplication(application) {
  return {
    type: 'DELETE_APPLICATION',
    application
  };
}

export function editApplication(application) {
  return {
    type: 'EDIT_APPLICATION',
    application
  };
}
