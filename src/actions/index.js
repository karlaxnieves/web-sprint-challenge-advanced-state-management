import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const fetchSmurfs = () => {
    return (dispatch => {
        dispatch({type: FETCH_START});

        axios.get('http://localhost:3333/smurfs')
          .then(resp=> {
            console.log(resp.data);
            dispatch({type: FETCH_SUCCESS, payload:resp.data});
          })
          .catch(err=>{
            dispatch({type: FETCH_FAIL, payload:err});
          });
    });
}

export const addSmurfs = ({ name, age, height }) => {
    return (dispatch => {
        dispatch({type: ADD_SMURF});

        axios.get('http://localhost:3333/smurfs', { name, age, height })
          .then(resp=> {
            console.log(resp.data);
            dispatch({type: ADD_SMURF_SUCCESS, payload:resp.data});
          })
          .catch(err=>{
            dispatch({type: ADD_SMURF_FAIL, payload:err});
          });
    });
}

export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const fetchSuccess = (smurf)=> {
    return({type: FETCH_SUCCESS, payload:smurf});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error})
}

export const addSmurf = ()=> {
    return({type: ADD_SMURF});
}

export const addSmurfSuccess = (smurf)=> {
    return({type: ADD_SMURF_SUCCESS, payload:smurf});
}

export const addSmurfFail = (error)=> {
    return({type: ADD_SMURF_FAIL, payload: error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.