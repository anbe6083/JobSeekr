export const { INCREMENT_APPLIED } = 'INCREMENT_APPLIED';
export const { CHANGE_STATUS_AMOUNT } = 'INCREMENT_APPLIED';

//action creators
export function incrementAppliedAmount(application) {
  return {
    type: 'INCREMENT_APPLIED',
    application
  };
}

export function changeApplicationStatusAmount(application) {
  return {
    type: 'INCREMENT_APPLIED',
    application
  };
}
