import * as constatnts from '../constants';
export const ResturantLOcation = (Show, v) => {
  return dispatch => {
    dispatch({
      type: constatnts.Resturant_LOCATION_SCREEN,
      payload: Show,
      Locationdata: v,
    });
  };
};
