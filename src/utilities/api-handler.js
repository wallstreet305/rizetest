import axios from 'axios';
const apiUrl = ' https://staging-back.growhppy.com/api/v0'

export const apiHandler = {
    post: (url, postData) => {
        return new Promise((resolve, reject) => {
           
                axios.post(url, postData)
                    .then(({data}) => {
                        return resolve(data);
                    })
                    .catch(err => {
                        console.log('Error posting to', url);
                        console.log(err.response || err);
                        return reject(err);
                    })
        
        })
    },
    get: (url, question_id) => {
        return new Promise((resolve, reject) => {
          
                axios.get(url, question_id)
                    .then(({data}) => {
                        console.log('showDatatata',data);
                        
                        return resolve(data);
                    })
                    .catch(err => {
                        console.log('Error getting', url);
                        console.log(err.response || err);
                        return reject(err);
                    })
        
        })
    },
    authenticate: (url, postData) => {
        return new Promise((resolve, reject) => {
            axios.post(url, postData)
                .then(({data}) => {
                    return resolve(data);
                })
                .catch(err => {
                    console.log('Error posting to', url);
                    console.log(err.response || err);
                    return reject(err);
                })
        })
    }
}
export function new_user_0(credentials){
    
    return new Promise((resolve, reject) => {
        const registration_url = `${apiUrl}/new_user_0`
        apiHandler.authenticate(registration_url, credentials).then(data => {
            
            resolve(data)}).catch(err => reject(err));
    })
}
export function get_question(question_id){
    return new Promise((resolve, reject) => {
        const userUrl = `${apiUrl}/question`;
        apiHandler.get(userUrl, question_id).then(data => resolve(data)).catch(err => reject(err));
    })
}

