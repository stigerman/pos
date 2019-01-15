import axios from "axios"

export default {
  user: {
    login: credentials => axios.port("/api/auth", { credentials })
  }
}
