import axios from 'axios';

export default {

getSchedule: function() {
    return axios.get('/api/schedule');
},

getRequests: function() {
    return axios.get('/api/requestoff')
},

postRequests: function() {
    return axios.post('/api/requestoff')
},

postAvail: function() {
    return axios.post('/api/avail')
},

deleteRequest: function() {
    return axios.destroy('/api/requestoff/:id')
}



}