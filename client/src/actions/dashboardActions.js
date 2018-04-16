export const { INCREMENT } = 'INCREMENT';
export const { CHANGE_STATUS_AMOUNT } = 'INCREMENT_APPLIED';

//action creators
export function incrementApplicationAmount(application) {
  switch (application.applicationStatus) {
    case 'Applied':
      return {
        type: 'INCREMENT_APPLIED',
        application
      };
    case 'Rejected': {
      return {
        type: 'INCREMENT_REJECTED',
        application
      };
    }
    case 'First Interview': {
      return {
        type: 'INCREMENT_FIRST_INTERVIEW',
        application
      };
    }
    case 'Second Interview': {
      return {
        type: 'INCREMENT_SECOND_INTERVIEW',
        application
      };
    }
    case 'Third Interview': {
      return {
        type: 'INCREMENT_THIRD_INTERVIEW',
        application
      };
    }
    case 'OFFER': {
      return {
        type: 'INCREMENT_OFFER',
        application
      };
    }
  }
}

export function changeApplicationStatusAmount(application) {
  return {
    type: 'INCREMENT_APPLIED',
    application
  };
}
