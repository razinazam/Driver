import * as constatnts from '../../constants';
import Axios from 'axios';
export const UpComingnDeleveris = Id => {
  return dispatch => {
    Axios.get(`https://www.foodizza.com/api/AssignedOrder?driverId=${Id}`)
      .then(res => {
        dispatch({
          type: constatnts.Pyment_Modal_Slider_Data_upComing,
          payload: res.data,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};
