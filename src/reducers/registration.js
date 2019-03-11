import { 
  ADD_REGISTRATION, 
} from '../actions/registration';

export default function registration(state = {}, action) {
  switch (action.type) {
    case ADD_REGISTRATION:
      return action.payload

    default:
      return state;
  }
}
