import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL} from './../actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(FETCH_START):
          return({
            ...state,
            isFetching: true
          })
        case(FETCH_SUCCESS):
          return({
            ...state,
            smurf: action.payload,
            isFetching: false
          })
        case(FETCH_FAIL):
          return({
            ...state,
            error: action.payload,
            isFetching: false
          });
          case(ADD_SMURF):
      return({
        ...state,
        isAdding: true
      });
    case (ADD_SMURF_SUCCESS):
      return ({
        ...state,
        smurf: [...action.payload],
        isAdding: false
      });
    case (ADD_SMURF_FAIL):
      return ({
        ...state,
        error: action.payload,
        isAdding: false
      });
        default:
          return state;
      }
}



//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.