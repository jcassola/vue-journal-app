import axios from "axios"

const journalApi = axios.create({
    baseURL: 'https://vue-course-45eac-default-rtdb.firebaseio.com'
})

export default journalApi