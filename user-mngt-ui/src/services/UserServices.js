import axios from "axios";

const USER_API_BASE_URL = process.env.NEXT_PUBLIC_USER_API_BASE_URL;

class UserServices {

  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }
}

export default new UserServices();