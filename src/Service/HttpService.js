import axios from "axios";

export default class HttpService {
  static get(username) {
    return axios.get(`https://api.github.com/users/${username}`)
      
  }
}
