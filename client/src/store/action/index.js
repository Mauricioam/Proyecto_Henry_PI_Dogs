import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const SEARCH_DOG = "SEARCH_DOG"
export const SORT = "SORT"
export const SIZE = "SIZE"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const TEMPERAMENTS = "TEMPERAMENTS"

export function getDogs() {
  return async function (dispatch) {
    try {
      let dogs = await axios.get(`http://localhost:3001/api/dogs/`);
      return dispatch({
        type: GET_DOGS,
        payload: dogs.data,
      })
    } catch (error) {
        console.log(error)
    }
  };
}

export function getTemperments(){
  return async function(dispatch){
    try {
      let temperaments = await axios.get("http://localhost:3001/api/temperament/")
      return dispatch({
        type:GET_TEMPERAMENTS,
        payload: temperaments.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}


export function searchDog(search){
  return async function(dispatch){
    try {
      let dogs = await axios.get(`http://localhost:3001/api/dogs?name=${search}`);
      return dispatch({
        type: SEARCH_DOG,
        payload: dogs.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function sort(order){
  return  {
    type: SORT,
    payload: order

  }
}

export function sortBySize(size){
  return {
    type:SIZE,
    payload:size
  }
}

export function sortByTemp(temp){
  return{
    type:TEMPERAMENTS,
    payload:temp

  }
}
