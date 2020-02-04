import {new_user_0, fetchQuestion} from '../../utilities/api-handler'
export function signUpUser (values) {
    return function(dispatch){
        return new Promise((resolve, reject) => {
            new_user_0(values)
            resolve(values);
          
          })
   
}
}
export const createNewUser =  (data) => {
    return new Promise((resolve, reject) => {
        resolve("data");
      
      })
  };