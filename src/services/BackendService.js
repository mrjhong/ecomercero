import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use( config => {
  const user = JSON.parse(localStorage.getItem('user'));

  if(user && user.token){
    const token = 'Bearer ' + user.token;
    config.headers.Authorization =  token;
  }

  return config;

});

class BackendService {
  async getUserBoard() {
    return await axios.get("/api/test/user");
  }



  async getAdminBoard() {
    return await axios.get("/api/test/admin");
  }
}

export default new BackendService();