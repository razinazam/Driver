import Axios from 'axios';
import * as constants from '../../constants';
export const SignUp = obj => {
  console.log(obj);

  return dispatch => {
    let config = {
      FirstName: '',
      LastName: '',
      FullName: obj.Yourname,
      MobileNumber: obj.PhoneNumber,
      VerificationCode: '',
      Email: obj.EmailId,
      Password: obj.password,
      DeviceUniqueCode: '',
      DeviceToken: '',
      DeviceType: '',
      ImageUrl: '',
      VehicleType: '',
      DriverStatus: true,
      JobStatus: '',
      ShiftStartTime: '',
      NoOfOrders: '',
      ShiftEndTime: '',
    };

    Axios.post('https://www.foodizza.com/api/Driver', config)
      .then(res => {
        alert('Successfull SignUn');
        dispatch({
          type: constants.Driver_SignUp,
          payload: res.data,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};
