export const ADD_REGISTRATION = 'ADD_REGISTRATION';

export function addRegistration(data) {
  return {
    type: ADD_REGISTRATION,
    payload: data,
  }
}

