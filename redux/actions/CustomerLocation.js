import * as constatnts from '../constants';
export const CustomerLocations = (Show, v) => {
  return dispatch => {
    dispatch({
      type: constatnts.Customer_Location_Screen,
      payload: Show,
      LodationDetails: v,
    });
  };
};
